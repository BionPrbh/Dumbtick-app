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

import {
  Text,
  Button
} from 'native-base'
import axios from 'axios'



import { Header, Footer, Content } from 'native-base';

class Home extends Component {
  static navigationOptions = () => ({
    headerTintColor: 'red',
  });
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      today:[],
      tomorrow:[]
    };
  }
  
  componentDidMount(){
    axios.get(`http://10.0.2.2:8000/api/v1/categories`)
      .then(res => {
        const categories = res.data;
        this.setState({ data: categories });
        console.log(this.state.data);
        
      })
      .catch(err => {
        console.log(err);
      }),
    axios.get(`http://10.0.2.2:8000/api/v1/events?start_time=2019-12-30`)
      .then(res => {
        const today = res.data;
        this.setState({ today: today });
        console.log(this.state.today);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get(`http://10.0.2.2:8000/api/v1/events?start_time=2019-12-31`)
      .then(res => {
        const tomorrow = res.data;
        this.setState({ tomorrow: tomorrow });
        console.log(this.state.tomorrow);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f5e0df', flex: 1 }}>
        <Text style={{ fontSize: 25, color: "#ff5555", marginLeft:15, marginTop:30, fontWeight:'bold' }}>Categories</Text>
        <ScrollView horizontal style={{marginTop:30, paddingLeft:15}}>
          {
            this.state.data.map((value) => {
              return(
                <TouchableOpacity >
                  <Button
                    onPress={() => this.props.navigation.navigate('CategoryScreen',{
                      id:value.id,
                      name:value.name
                    })} 
                    light 
                    style={{
                    padding: 0, 
                    borderRadius:5, 
                    overflow:'hidden', 
                    shadowColor: "#000",
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,marginRight:10, backgroundColor:'#ff5555'
                    }}
                  >
                    <Text style={{ color:'white', fontWeight:'bold'}}>{value.name}</Text>
                  </Button>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <View style={{marginBottom:30}}>
          <Text style={{ fontSize: 25, color: "#ff5555", marginLeft:15, marginTop:30, fontWeight:'bold' }}>Today Event</Text>
          <ScrollView horizontal>
            {
              this.state.today.map((value) => {
                return(
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', { id: value.id })}>
                    <Card
                      title={null}
                      image={{ uri: value.img }}
                      containerStyle={{ padding: 0, 
                      width: 300, 
                      height:200, 
                      borderRadius:10, 
                      overflow:'hidden', 
                      shadowColor: "#000",
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5, 
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      }
                      }}
                    >
                      <View style={{ display:'flex'}}>
                        <Text style={{ marginBottom: 10, color:'#ff5555', fontWeight:'bold' }}>
                          {value.title}
                        </Text>
                        <Text style={{ marginBottom: 10, color:'#ff5555', fontWeight:'bold' }}>
                          {`Rp. `+value.price}
                        </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={{marginBottom:40}}>
          <Text style={{ fontSize: 25, color: "#ff5555", marginLeft:15, fontWeight:'bold' }}>Upcoming Event</Text>
          <ScrollView horizontal>
            {
              this.state.tomorrow.map((value) => {
                return(
                  <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('DetailScreen', { id:value.id })}>
                    <Card
                      title={null}
                      image={{ uri: value.img }}
                      containerStyle={{ 
                      padding: 0, 
                      height:200, 
                      width: 200, 
                      borderRadius:10, 
                      overflow:'hidden', 
                      shadowColor: "#000",
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5, 
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      }}
                    >
                      <View style={{ display:'flex'}}>
                        <Text style={{ marginBottom: 10, color:'#ff5555', fontWeight:'bold' }}>
                          {value.title}
                        </Text>
                        <Text style={{ marginBottom: 10, color:'#ff5555', fontWeight:'bold' }}>
                          {`Rp. `+value.price}
                        </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Home;