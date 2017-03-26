import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default class Login extends Component {
  goToLogin = () => {
    Alert.alert('登陆啦...',)
  }
  render() {
    const { layout, container, image, button, input, inputBox, } = styles;
    return (
      <View style={layout}>
        <View style={container}>
          <Image source={require('../../../image/xiaoxin.jpg')} style={image}/>
          <View style={inputBox}>
            <TextInput
              style={input}
              placeholder={'请输入用户名'}
              />
          </View>
          <View style={inputBox}>
            <TextInput
              style={input}
              placeholder={'请输入密码'}
              />
          </View>
          <View style={button}>
            <Button
              title="登录"
              onPress={this.goToLogin}
              color={'#fff'}
              />
          </View>
        </View>
      </View>

    )
  }
}
const styles = {
  layout: {
    height: '70%'
  },
  container: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  image: {
    marginTop: 100,
    width: 100,
    height: 100,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  input: {
    width: 200,
    height: 40,
    textAlign: 'center',
  },
  button: {
    width: 60,
    height: 30,
    backgroundColor: '#ccc'
  }
}
