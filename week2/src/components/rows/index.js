import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Rows extends Component {
  render() {
    const { ary } = this.props;
    const { boxContaienr, box, text } = this.props.styles || styles;
    return (
      <View style={boxContaienr}>
        { ary.map((num) => {
          return <View key={num} style={box}>
            <Text style={text}>{num}</Text>
            </View>
        })}

      </View>
    )
  }
}
const styles = {
  boxContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
  },
  text: {
    width: '100%',
    lineHeight: 50,
    color: '#fff',
    textAlign: 'center'
  }
}
