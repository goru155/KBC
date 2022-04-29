import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToQ4del = () => {
    this.props.navigation.navigate('Q4del');
  };

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textStyle}>Q3. The Delta variant is highly contagious, more than 2x as contagious as previous variants. What precautions would you take to keep safe from the variant?</Text>
      
      <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>a. Avoiding crowded spaces</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>b. Keeping distance from others</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>c. Wearing mask</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToQ4del();
          }}>
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
