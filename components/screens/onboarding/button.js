import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class CustomButton extends Component {
    render( {onPress} = this.props ) {
        return (
            <TouchableOpacity onPress={ onPress }>
                <View style={styles.button}>
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        backgroundColor: '#74D14C',
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginTop: 25
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});