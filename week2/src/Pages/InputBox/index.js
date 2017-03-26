import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
const ary = [1, 2, 3, 4, 5, 6];

export default class InputBox extends Component {

  render() {
    const { inputBox, container, boxContaienr, box, text } = styles;
    return (
      <View style={container}>
        <View style={inputBox}>
          <View>
            <Text style={{fontSize: 18}}>请输入六位交易密码</Text>
          </View>
          <View style={boxContaienr}>
            {
              ary.map((item) => {
                return (
                  <Text style={box} key={item}/>
                )
              })
            }
          </View>
        </View>
      </View>

    )
  }
}
const styles = {
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ddd',
  },
  inputBox: {
    width: 300,
    height: 180,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: 187,
    height: 32
  },
  box: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
  },
}
