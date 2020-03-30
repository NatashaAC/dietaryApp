import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Button } from 'react-native';

import { CheckBox } from 'react-native-elements';

export default class AllergyScreen extends Component {

    constructor(props){
        super(props);
        this.state= {
            isChecked: true
        }
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
                <Text>Allergies</Text>
                {
                    list.map((l, i) => (
                        <CheckBox
                            key={i}
                            title={l.name}
                            onPress= {
                                () => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }
                            }
                            isChecked= {this.state.isChecked}
                        />
                    ))
                }
                <Button
                    title='done'
                    onPress = {
                        () =>
                        this.props.navigation.navigate('Home')
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