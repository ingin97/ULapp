import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Button } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Dimensions } from "react-native";

class Item extends React.Component {
  render() {
    return (
      <View>
        <Collapse>
          <CollapseHeader>        
                <View style={styles.header} >
                  <Text style={styles.text}>Kl: {this.props.tid} - {this.props.name} </Text>
                </View>                      
          </CollapseHeader>
          <CollapseBody>
          <View style={styles.info} >
                  <Text style={styles.text}>{this.props.info}</Text>
                </View>     
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}


export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    var width = Dimensions.get('window').width;
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Mandag</Text>
        <Item tid="10:00" name="Morgenmøte" info="Lovsang og tale av Seb"/>
        <Item tid="12:00" name="Seminar 1" info="Se eget program"/>
        <Item tid="14:00" name="Seminar 2" info="Se eget program"/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 32,
  },
  text: {
    fontSize: 16,
    marginLeft:8,
    padding: 10,
    color: 'white',
  },
  header: {
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    backgroundColor: 'skyblue',
    
  },
  info: {
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    backgroundColor: 'lightgrey',
  },
  h1: {
    fontSize: 22,
    marginLeft:8,
    padding: 10,
    color: 'skyblue',
  }
  
});
