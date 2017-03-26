import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Rows from '../../components/rows';

export default class Sudoku extends Component {

  render() {
    const { array } = this.props;
    const { sudoku, container } = styles;
    return (
      <View style={container}>
        <View style={sudoku}>
          {array.map((item, index) => {
            return <Rows ary={item.ary} key={index}/>
          })}
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
  },
  sudoku: {
    width: 152,
    height: 152,
    justifyContent: 'space-between'
  },
}
