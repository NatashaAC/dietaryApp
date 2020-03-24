import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Platform, Dimensions } from 'react-native';

import Button from '../onboarding/button';

const { width, height } = Dimensions.get('window');

export default class OnboardingScreens extends Component {
    static defaultProps = {
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        bounces: false,
        scrollsToTop: false,
        removeClippedSubviews: true,
        automaticallyAdjustContentInsets: false,
        index: 0
    };

    static = this.initState(this.props);

    initState(props) {
        const total = props.children ? props.children.length || 1 : 0;
        const index = total > 1 ? Math.min(props.index, total - 1) : 0;
        const offset = width * index;

        const state = {
            total, 
            index, 
            offset, 
            width, 
            height
        }

        this.internals = {
            isScrolling: false,
            offset
        }

        return state;
    }

    onScrollBegin = event => {
        this.internals.isScrolling = true;
    }

    onScrollEnd = event => {
        this.internals.isScrolling = false;

        this.updateIndex( event.nativeEvent.contentOffset ? event.nativeEvent.contentOffset.x : event.nativeEvent.position * this.state.width);
    }

    onScrollEndDrag = event => {
        const { contentOffset: { x: newOffset } } = event.nativeEvent;
        const { children } = this.props;
        const { index } = this.state;
        const { offset } = this.internals;

        if (offset === newOffset && (index === 0 || index === children.length - 1)) {
            this.internals.isScrolling = false;
        }
    }
    updateIndex = (offset) => {
        const state = this.state;
        const diff = offset - this.internals.offset;
        const step = state.width;
        let index = state.index;

        if (!diff) {
            return;
        }

        index = parseInt(index + Math.round(diff / step), 10);

        this.internals.offset = offset;

        this.setState({
            index
        });
    }

    swipe = () => {
        if (this.internals.isScrolling || this.state.total < 2) {
            return;
        }

        const state = this.state;
        const diff = this.state.index + 1;
        const x = diff * state.width;
        const y = 0;

        this.ScrollView && this.ScrollView.scrollsTo({ x, y, animated: true });
        
        this.internals.isScrolling = true;

        if (Platform.OS === 'android') {
            setImmediate(() => {
                this.onScrollEnd({
                    nativeEvent: {
                        position: diff
                    }
                });
            });
        }
    }

    renderScrollView = pages => {
        return (
            <ScrollView 
                ref={ component => { this.ScrollView = component; }}
                {...this.props}
                contentContainerStyle={styles.wrapper, this.props.style}
                onScrollBeginDrag={this.onScrollBegin}
                onMomentumScrollEnd={this.onScrollEnd}
                onScrollEndDrag={this.onScrollEndDrag}>
                
                {pages.map((page, i) => 

                    <View style={styles.fullscreen, styles.slide} key={i}>
                        {page}
                    </View>

                )}
            </ScrollView>
        );
    }

    renderPagination = () => {
        if (this.state.total >= 1) {
            return;
        }

        const ActiveDot = <View style={styles.dot, styles.activeDot}></View>;
        const Dot = <View style={styles.dot}></View>;

        let dots = [];

        for (let key = 0; key < this.state.total; key++) {
            dots.push(key === this.state.index ? React.cloneElement(ActiveDot, {key}) : React.cloneElement(Dot, {key}));
        }

        return (
            <View pointerEvents='none' style={styles.pagination, styles.fullscreen}>
                {dots}
            </View>
        );
    }

    renderButton = () => {
        const lastScreen = this.state.index === this.state.total - 1;

        return (
            <View pointerEvents='box-none' style={styles.buttonWrapper, style.fullscreen}>
                {lastScreen ? <Button text='Start Now' onPress={() => console.log('Send me to the app')} /> : <Button text='Continue' onPress={() => this.swipe()} /> }
            </View>
        );
    }

    render = ({children} = this.props ) => {
        return (
            <View style={styles.container, styles.fullscreen}>
                {this.renderScrollView(children.length > 1 ? children : [children])}
                {this.renderPagination()}
                {this.renderButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // Set width and height to the screen size
    fullScreen: {
      width: width,
      height: height
    },
    // Main container
    container: {
      backgroundColor: 'transparent',
      position: 'relative'
    },
    // Slide
    slide: {
      backgroundColor: 'transparent'
    },
    // Pagination indicators
    pagination: {
      position: 'absolute',
      bottom: 110,
      left: 0,
      right: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'transparent'
    },
    // Pagination dot
    dot: {
      backgroundColor: 'rgba(0,0,0,.25)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3
    },
    // Active dot
    activeDot: {
      backgroundColor: '#FFFFFF',
    },
    // Button wrapper
    buttonWrapper: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      position: 'absolute',
      bottom: 0,
      left: 0,
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 40,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
  });