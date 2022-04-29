import * as React from 'react';
import { View } from 'react-native';
import Insturuction from './screens/instruction' 
import HomeScreen from './screens/HomeScreen'
import Q1omi from './screens/Q1omi'
import Q2omi from './screens/Q2omi'
import Q3omi from './screens/Q3omi'
import Q4omi from './screens/Q4omi'
import Q1del from './screens/Q1del'
import Q2del from './screens/Q2del'
import Q3del from './screens/Q3del'
import Q4del from './screens/Q4del'
import EndPage from './screens/EndPage'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  Insturuction:Insturuction,
  HomeScreen:HomeScreen,
  Q1omi : Q1omi,
  Q2omi : Q2omi,
  Q3omi : Q3omi,
  Q4omi : Q4omi,
  Q1del : Q1del,
  Q2del : Q2del,
  Q3del : Q3del,
  Q4del : Q4del,
  EndPage : EndPage
})

const AppContainer = createAppContainer(AppNavigator)
