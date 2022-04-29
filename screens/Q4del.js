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
        <Text style={styles.textStyle}>Q4. If you get affected by the Delta variant of Covid-19 then what will you preferably do? </Text>
      
      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Start eating Azithromycin 3-4 times a day for the next 14 days with our parent's or relatives' consultant </Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. Take vaccine regularly </Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>c. Drink Amla juice </Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToEnd();
          }}>
          <Text style={styles.buttonText}>d. Take medicines like remdesivir under doctor's consultant</Text>
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
