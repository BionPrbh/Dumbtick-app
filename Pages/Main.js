import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
class Main extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#EE7070', flex: 1 }}>
          <Image style={styles.image} source={require('../Images/ticket.png')} />
          <Text style={styles.welcome}>Welcome to Dumbtick !</Text>
          <Text style={styles.description}>Dumbtick is a event ticket sales aplication mainly based on Music, Sports, Science, and Programming.</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.button}> Continue </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Main;


const styles = StyleSheet.create({
    welcome: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: "center",
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5
    },
    red: {
      color: 'red',
    },
    image: {
      marginTop: 100,
      marginBottom: 30,
      alignSelf: 'center'
    },
    button: {
      backgroundColor: '#cd3b3b',
      width: 130,
      height: 38,
      borderRadius: 20,
      alignSelf: 'center',
      borderBottomColor: 'white',
      marginTop:50,
      color: 'white', 
      fontSize: 25, 
      textAlign: 'center'
    },
    description:{
      color: 'white', 
      fontSize: 24, 
      textAlign:'center',
      marginLeft:'5%',
      marginRight:'5%',
      marginTop:30
    }
  });