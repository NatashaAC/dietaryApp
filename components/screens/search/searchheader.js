import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Icon, Item, Input } from 'native-base';

export default class SearchHeader extends Component {
  render() {
    return (
        <Header
            style= {{height: 80}}
            searchBar
            rounded
        >
            <Item>
                <Icon name='ios-search'></Icon>
            </Item>
        </Header>
    );
  }
}
