import React, { Component } from 'react';
import { Card } from "react-native-elements";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Header, Footer, Content } from 'native-base';
import axios from 'axios'

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const GetId = JSON.stringify(navigation.getParam('id'))
    const GetName = JSON.stringify(navigation.getParam('name'))
    console.log('ini id di category', GetId);
    console.log('ini id di category', GetName);
    axios.get(`http://10.0.2.2:8000/api/v1//category/${GetId}/events`)
    .then(res => {
        const data = res.data;
        this.setState({ data });
        console.log(this.state.data);
        
    })
    .catch(err => {
      console.log('card props data undefined', err);
    })
  }
  
  render() {
    const { navigation } = this.props;
    const GetName = JSON.stringify(navigation.getParam('name'))
    const modifiedName = GetName.slice(1,GetName.length-1)
    let categoriesDataFromState = this.state.data
    console.log('ini data categories',categoriesDataFromState);
    console.log(categoriesDataFromState);
    
    return (
      // Start header
      <ScrollView style={{ backgroundColor: '#EE7070', flex: 1 }}>
        <View style={styles.categoryTitleContainer}>
          <Text style={styles.categoryPageIntro}>This is</Text>
          <Text style={styles.categoryPageTitle}>{modifiedName}</Text>
        </View>
        <View style={{flex:1}}>
          <FlatList
            data={categoriesDataFromState}
            renderItem={({ item: Value }) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen', { id: Value.id })}>
                  <Card
                    title={null}
                    image={{ uri: Value.img }}
                    containerStyle={{ 
                      padding: 0,
                      marginTop:45, 
                      alignSelf:'center', 
                      width: 330, 
                      height:210, 
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
                    <View>
                      <Text style={{fontSize:30, color:"#ff5555", fontWeight:'bold'}}>{Value.title}</Text>
                    </View>
                  </Card>
                </TouchableOpacity>                  
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryTitleContainer:{
    marginTop:40
  },
  categoryPageIntro:{
    fontSize: 27,
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    color:"#f5e0df",
    fontWeight:"bold"

  },
  categoryPageTitle:{
    fontSize: 45,
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    color:"#f5e0df",
    fontWeight:"bold"
  },
  categoryContent:{
    
  }
})

export default Category;