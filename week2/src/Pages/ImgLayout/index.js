import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ImgLayout extends Component {

  render() {
    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          <Text style={styles.title}>标题栏</Text>
          <View style={styles.imgContainer}>
            <Image source={require('../../../image/xiaoxin.jpg')} style={styles.image}></Image>
          </View>
          <View style={styles.footer}>
            <Text style={styles.text}>探索</Text>
            <Text style={styles.text}>学习</Text>
            <Text style={styles.text}>进步</Text>
          </View>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
    height: 30,
    backgroundColor: '#000',
    color: '#fff',
    lineHeight: 30
  },
  imgContainer: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    width: '33.3%',
    textAlign: 'center',
  }
});
