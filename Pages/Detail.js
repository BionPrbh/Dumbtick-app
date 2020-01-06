import React, { Component } from 'react';
import { Card } from "react-native-elements";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  BackHandler
} from 'react-native';

import axios from 'axios'

import { Button, Header, Footer, Content, CardItem } from 'native-base';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      counter:0
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
      console.log(navigation);
    const GetId = JSON.stringify(navigation.getParam('id'))
      console.log('ini id di detail', GetId);
    axios.get(`http://10.0.2.2:8000/api/v1/event/${GetId}`)
    .then(res => {
        const eventData = res.data;
        this.setState({ eventData });
    })
    .catch(err => {
      console.log('card props data undefined', err);
    })
  }
  handleEventMinus = () => {
    if(this.state.counter > 0){
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
  handleEventPlus = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    let eventDataFromState = this.state.eventData
    console.log('ini data event',eventDataFromState);
    const eventData = this.state.eventData
    
    return (
      <ScrollView style={{ backgroundColor: '#f5e0df', flex: 1 }}>
        <View>
          <Card
            title={null}
            image={{ uri: eventData.img }}
            containerStyle={{ 
              padding: 0, 
              marginTop: 50,
              flex: 1, 
              borderRadius:10, 
              overflow:'hidden', 
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, 
              shadowOffset: {
                width: 1,
                height: 2,
              }
            }}
          >
            <View>
              <Text style={{fontSize:30, color:"#ff5555", fontWeight:'bold'}}>{eventData.title}</Text>
              <Text style={{fontSize:20, color:"darkslategray"}}>Rp. {eventData.price}</Text>
              <Text style={{fontSize:22}}>{eventData.startTime}</Text>
              <Text style={{fontSize:22}}>{eventData.description}</Text>
            </View>
          </Card>
        </View>
        <View style={{flex:1, flexDirection:'row', marginLeft:12, marginTop:20}}>
          <Button rounded style={{width:40, height:40, backgroundColor:'#ff5555'}} onPress={this.handleEventMinus}>
              <Text style={{fontSize:30, color:'white', paddingLeft:16, paddingBottom:4}}>-</Text>
          </Button>
            <Text style={{fontSize:30, color:'#ff5555', marginLeft:15, marginRight:15}}>{this.state.counter}</Text>
          <Button rounded style={{width:40, height:40, backgroundColor:'#ff5555'}} onPress={this.handleEventPlus}>
            <Text style={{fontSize:30, color:'white', paddingLeft:12, paddingBottom:4}}>+</Text>
          </Button>
        </View>
        <View style={{ padding: 12 }}>
          <TouchableOpacity 
            style={{ 
              width: "30%", 
              height: 60, 
              backgroundColor: "#ff5555", 
              marginTop: 5, 
              marginBottom: 200, 
              borderRadius:5, 
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              marginLeft:5 
            }}
              onPress={() => this.props.navigation.navigate('OrderScreen')}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop:10, textAlign: "center", color:'white', fontSize:30, }}>
              Buy
            </Text>
          </TouchableOpacity>
       </View>
      </ScrollView>
        );
      }
    }
    
export default Detail;