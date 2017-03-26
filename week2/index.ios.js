/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
import ImgLayout from './src/Pages/ImgLayout';
import Sudoku from './src/Pages/Sudoku';
import LoadingLayout from './src/Pages/LoadingLayout';
import InputBox from './src/Pages/InputBox';
import Login from './src/Pages/Login';

const array = [
  { ary: [1, 2, 3] },
  { ary: [4, 5, 6] },
  { ary: [7, 8, 9] },
]

export default class AwesomeProject extends Component {

  render() {
    return (
      <View style={styles.content}>
        {/* <ImgLayout/> */}
        {/* <Sudoku array={array}/> */}
        {/* <LoadingLayout/> */}
        {/* <InputBox/> */}
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
