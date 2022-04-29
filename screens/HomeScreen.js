import * as React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  goToQ1omi = () => {
    this.props.navigation.navigate('Q1omi');
  };

  goToQ1del = () => {
    this.props.navigation.navigate('Q1del');
  };

  render() {
    return (
      <View>
        <AppHeader />

        <Text styles={StyleSheet.buttonText}>Here are two varients of  COVID-19 press on them :-</Text>

        <TouchableOpacity
          onPress={() => {
            this.goToQ1del();
            }}>
            <Image
        style={styles.imageIcon}
        source={{
          uri:"https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_960_720.png",
        }}        
        />
        <Text>Delta</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
            this.goToQ1omi();
            }}>
            <Image
        style={styles.imageIcon}
        source={{
          uri:"https://images.vexels.com/media/users/3/193297/isolated/lists/4752adfc1ac1732ee4ebb62297016c15-covid-19-cartoon-icon.png",
        }}        
        />
          <Text>Omicron</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon:{
    width:150,
    height:150,
    marginLeft:75,
    marginTop:40
  },
});
