import React, { Component } from 'react';
import { Card } from "react-native-elements";
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';

import { Button, Text } from 'native-base'

import { Header, Footer, Content, CardItem } from 'native-base';
const data = [
];
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f5e0df', flex: 1 }}>
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 35, padding: 20, textAlign: "left", color:"#ff5555" }}>Order</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center", color:"#ff5555" }}></Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20, textAlign: "center", color:"#ff5555" }}></Text>
          <TouchableOpacity style={{ marginTop: 50, marginBottom: 200 }}
          onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Button light style={{width:130, height:50, marginLeft:20,marginTop:250, backgroundColor:'#ff5555'}}>
              <Text style={{ color:'white', fontWeight:'bold', fontSize:17}}>{} Checkout</Text>
            </Button>
          </TouchableOpacity>
       </View>
      </ScrollView>
        );
      }
    }
    
export default Order;