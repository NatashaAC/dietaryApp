import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import { CheckBox } from 'react-native-elements';

export default class HealthCondition extends Component {

    render() {

        const list = [
            {
                name: 'High Cholesterol'
            },
            {
                name: 'Calcium Deficiency'
            },
            {
                name: 'Type 1 Diabetes'
            },
            {
                name: 'Type 2 Diabetes'
            },
            {
                name: 'Iron Deficiency'
            },
            {
                name: 'Peptic Ulcers (Stomach Ulcers)'
            },
            {
                name: 'Irritable Bowl Syndrome'
            } 
        ]

        return (
            <View style={styles.container}>
                <Text>Health Screen</Text>
                {
                    list.map((l, i) => (
                        <CheckBox
                            key={i}
                            title={l.name}
                        />
                    ))
                }
                <Button
                    title='Next'
                    onPress = {
                        () =>
                        this.props.navigation.navigate('Allergy')
                    }
                    color='#74D14C'
                 ></Button>
            </View>
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
