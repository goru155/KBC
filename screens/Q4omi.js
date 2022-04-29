import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToEnd = () => {
    this.props.navigation.navigate('EndPage');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q4. If you face sore throat and fever during this Covid Pandemic, Then which of the following options should you consider?</Text>
      
      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Take ayurvedic tablets of neem </Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. Take Cough syrup </Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>c. MRI Scan of lung every day</Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => {
            this.goToEnd();
          }}>
          <Text style={styles.buttonText}>d. Do RTPCR or Antigen</Text>
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
