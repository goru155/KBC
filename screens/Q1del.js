import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToQ2del = () => {
    this.props.navigation.navigate('Q2del');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q1. What would you do if you come to know that your neighbour is suffering from the second variant of COVID-19, i.e. Delta?</Text>
      
      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Go to greet them personally at their house.</Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. Go to the temple with them to pray for quick recovery.</Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ2del();
          }}>
          <Text style={styles.buttonText}>c. Greet virtually, keep the doors shut and maintain safe distance with proper face coverings.</Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>d. Avoid vaccination.</Text>
        </TouchableOpacity> 

        </View> 
    )
  }
}

const styles=StyleSheet.create({
    textStyle:{
    color: 'Black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    width: 300,
    height: 70,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})
