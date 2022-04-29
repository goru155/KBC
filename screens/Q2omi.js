import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToQ3omi = () => {
    this.props.navigation.navigate('Q3omi');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q2. Which of the following precautions would you NOT take to keep safe from Omicron virus?</Text>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Keep a safe physical distance and wear a well-fitted mask.</Text>
        </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ3omi();
          }}>
          <Text style={styles.buttonText}>b. Do not get vaccinated and have junk food.</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>c. Avoid crowded places and travel only if necessary.</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>d. Keep hands clean and use sanitizer.</Text>
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
