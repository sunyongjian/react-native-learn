import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

export default class LoadingLayout extends Component {
  constructor () {
    super();
    this.state = {
      animating: true,
      fadeAnim: new Animated.Value(0)
    }
  }
  toggleTimeout () {
    setTimeout( () => {
      this.setState({
        animating: !this.state.animating
      }, () =>{
        Animated.timing(
         this.state.fadeAnim,
         {
           toValue: 1,
         }
       ).start();
      })

    },3000)
  }

  componentDidMount() {
    this.toggleTimeout();

  }

  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator
        animating={this.state.animating}
        style={{padding: 10, width: 20, height:20}}
        />
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
          }}
        >
        {this.state.animating
          ? null
          : <Image
          source={require('../../../image/xiaoxin.jpg')}
          style={this.state.animating ? styles.image : styles.animate}
          />}
      </Animated.View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200
  },
  animate: {
    width: 300,
    height: 300,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};
