import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
  
  goToQ4omi = () => {
    this.props.navigation.navigate('Q4omi');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q3. You read in the newspaper that fully vaccinated people also may get infected by Omicron. In this situation you should:</Text>
        
        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. panic</Text>
        </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. not get vaccinated</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ4omi();
          }}>
          <Text style={styles.buttonText}>c. stay calm and follow necessary precautions</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>d. All of the above</Text>
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
