import * as React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  goToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.text}>INSTRUCTION'S </Text>
        <Text style={styles.textStyle}>1. This is a quiz based game in which you have to answer all the questions.</Text>
        <Text style={styles.textStyle}>2. Until you do not answer all the questions correctly you will not be taken to the next question.</Text>
        <Text style={styles.textStyle}>3. There are four questions in total.</Text>
        <Text style={styles.text}>ALL THE BEST</Text>

        <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
         onPress={() => {
            this.goToHome();
            }}>
          <Text style={styles.buttonText}>lets go</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
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
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
