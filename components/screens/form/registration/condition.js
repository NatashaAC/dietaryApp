import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import { CheckBox, Header } from 'react-native-elements';

var tempCheckValues = [];

export default class HealthCondition extends Component {

    constructor(props) {
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
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#74D14C',
                        height: 60,
                        paddingVertical: 25
                    }} 
                    placement='center'
                    centerComponent={{text: 'HEALTH CONDITION', style: {color: '#FFF'}}}
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
