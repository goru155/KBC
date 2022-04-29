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
            <Image
        style={styles.imageIcon}
        source={{
          uri:"https://thumbs.dreamstime.com/z/coronavirus-slogan-covid-virus-stop-fist-sign-trend-corona-quarantine-pandemic-design-survivor-punch-quote-social-distance-182040851.jpg",
        }}        
        />
        
        <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => {
            this.goToHome();
            }}>
          <Text style={styles.buttonText}> GO TO HOMEPAGE</Text>
        </TouchableOpacity> 

      </View>
    );
  }
}

const styles=StyleSheet.create({
  imageIcon:{
    width:150,
    height:150,
    marginLeft:75,
    marginTop:40
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})

