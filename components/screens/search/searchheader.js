import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Item, Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

export default class SearchHeader extends Component {
  render() {
    return (
        <Header
            style= {{height: 80}}
            searchBar
            rounded
        >
          <Icon name='heartbeat'
          type='font-awesome'></Icon>
        </Header>
    );
  }
}
