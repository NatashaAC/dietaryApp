import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import CustomButton from '../onboarding/button';

export default class OnboardingScreens extends Component {
    render() {
        return (
            <View style={styles.slide}>
                <Onboarding
                    bottomBarColor= {'#EAF8E4'}
                    showSkip= {false}
                    // containerStyles={{ height: 250, width: 320}}
                    imageContainerStyles={{paddingBottom: 15}}
                    titleStyles={{color: '#E78200', fontSize: 35 }}
                    subtitleStyles={{fontSize: 20}}
                    pages={[
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'NutriDish',
                            subtitle: 'Having trouble finding a recipe that suits your needs? NutriDish can help with that.'
                        },
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'How to use the App',
                            subtitle: 'Search and save your favourite recipes, or get a customized meal plan based on your dietary needs.'
                        },
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'Let\'s Get Started',
                            subtitle: 'Make a free account today to start using the app.'
                        }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   slide: {
       flex: 1,
       backgroundColor: '#EAF8E4',
   }
});