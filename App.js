import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/Home'
import ElementFinder from './Screens/ElementFinder';
import FormulaFinder from './Screens/FormulaFinder';

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
  HomeScreen:HomeScreen,
  ElementFinder : ElementFinder,
  FormulaFinder:FormulaFinder,

})

const AppContainer = createAppContainer(AppNavigator)
