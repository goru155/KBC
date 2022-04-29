import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
  
  goToQ2omi = () => {
    this.props.navigation.navigate('Q2omi');
  };
  
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q1. A person is found attacked from Jaundice as well as the Omicron variant of COVID-19. He had the following symptoms:</Text>
        <Text style={styles.textStyle}>1. Weakness, tiredness, headache</Text>
        <Text style={styles.textStyle}>2. Fever, pain in the throat, loss of taste</Text>
        <Text style={styles.textStyle}>3. Yellowing of eyes and skin, chills, abdominal pain</Text>
        <Text style={styles.textStyle}>4. Dark-colored urine and clay-colored stool</Text>
        <Text style={styles.textStyle}>Which amongst the above-mentioned symptoms lead to the identification of Omicron virus?</Text>
      
      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ2omi();
          }}>
          <Text style={styles.buttonText}>(1) and (2) only</Text>
        </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>(3) and (4) only</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>(2) and (4) only</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>(1) and (3) only</Text>
        </TouchableOpacity>

        </View>
    )
  }
}

const styles=StyleSheet.create({
    textStyle:{
    color: 'Black',
    fontSize: 14,
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
