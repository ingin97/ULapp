import React from 'react'
import { View, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component{
  navLink(nav, text, logo){
    return(
      <TouchableOpacity style={styles.navlink} onPress={() => this.props.navigation.navigate(nav)}>
        <Ionicons 
          name={logo}
          color='#000000'
          size={32}
          style={styles.itemLogo}
        />
        <View style={{marginTop: 12,}}>
          <Text style={styles.link}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.ulImgArea}>
            <View style={styles.profile}>
              <View style={styles.imgView}>
                <Image style={styles.ulImg} source={require('../assets/ul2019forside3.jpg')} />
              </View>
            </View>
          </View>
          <View style={styles.menuLinks}>
            {this.navLink('Home', 'Home', 'ios-home', )} 
            {this.navLink('Info', 'Info', 'md-information-circle-outline', )}
            {this.navLink('Program', 'Program', 'md-calendar', )}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>UL-app 2019</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  scroller:{
    flex: 1,
  },
  ulImgArea:{
    height: 200,
    backgroundColor: 'black',
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
  },
  imgView: {
    flex: 1,
    paddingRight: 20,
  },
  ulImg: {
    height: 200,
    width: WIDTH*0.83, 
  },
  menuLinks:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 50,
  },
  navlink:{
    flex: 2,
    flexDirection: 'row',
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
  itemLogo: {
    top: 20,
    paddingLeft: 14,
  },
  footer:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'gray',
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16
  },
})
