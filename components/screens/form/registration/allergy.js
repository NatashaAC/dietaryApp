import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button } from 'react-native';

import { CheckBox, Header } from 'react-native-elements';

var tempCheckValues = [];

export default class AllergyScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            boxChecked: []
        }
    }

    boxChanged(name, value) {
        this.setState({
            boxChecked: tempCheckValues
        })

        var tempBoxChecked = this.state.boxChecked;
        tempBoxChecked[name] = !value;

        this.setState({
            boxChecked: tempBoxChecked
        })

    }

    render() {

        const list = [
            {
                name: 'Lactose Intolerance'
            },
            {
                name: 'Gluten Intolerance'
            },
            {
                name: 'Eggs'
            },
            {
                name: 'Tree Nuts'
            },
            {
                name: 'Peanuts'
            },
            {
                name: 'Wheat'
            },
            {
                name: 'Soy'
            },
            {
                name: 'Shrimp'
            },
            {
                name: 'Prawns'
            },
            {
                name: 'Crayfish'
            },
            {
                name: 'Crab'
            },
            {
                name: 'Squid'
            },
            {
                name: 'Scallops '
            }
        ]

        return (
            <ScrollView>
                <Header
                    containerStyle={{
                        backgroundColor: '#74D14C',
                        height: 60,
                        paddingVertical: 25
                    }} 
                    placement='center'
                    centerComponent={{text: 'ALLERGY', style: {color: '#FFF'}}}
                />
                {
                    list.map((val) => {
                        {tempCheckValues[val.name] = false}

                        return (

                            <View key={val.name} style={{ flexDirection: 'column' }}>
                                <CheckBox
                                    title={val.name}
                                    checkedColor='#74D444'
                                    checkedIcon='check-square'
                                    checked={this.state.boxChecked[val.name]}
                                    onPress={() => this.boxChanged(val.name, this.state.boxChecked[val.name] )}
                                />
                            </View>
 
                        );
                    })
                }
                <Button
                    title='done'
                    onPress = {
                        () =>
                        this.props.navigation.navigate('HomeTabNavigator')
                    }
                    color='#74D14C'
                 ></Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });