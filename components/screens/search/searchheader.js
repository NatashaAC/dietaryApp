import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Item, Input } from 'native-base';
import { Icon } from 'react-native-vector-icons';

export default class SearchHeader extends Component {
  render() {
    return (
        <Header
            style= {{height: 80}}
            searchBar
            rounded
        >
          <Icon name='search'
          type='font-awesome'></Icon>
        </Header>
    );
  }
}
