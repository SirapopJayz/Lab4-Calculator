import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Buttons extends Component {
  
  render() {
      const {value, handleOnpress} = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={() => handleOnpress(value)}>
          <Text style={{fontSize: 20, fontWeight:'bold', color: 'white'}}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
});