import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToQ3del = () => {
    this.props.navigation.navigate('Q3del');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q2. When can you make sure that a patient is suffering (symptoms) from the Delta variant of COVID-19?</Text>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Loss of hair, tiredness and yellowing of eyes and skin</Text>
        </TouchableOpacity> 

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. Cough and fever</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>c. Headache and significant loss of smell</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ3del();
          }}>
          <Text style={styles.buttonText}>d. Both (b) and (c)</Text>
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
