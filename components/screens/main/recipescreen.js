import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content } from 'native-base';

import SearchHeader from '../search/searchheader';

export default class RecipeScreen extends Component {
  render() {
    return (
      <Container>
        <SearchHeader />
        <Content>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});