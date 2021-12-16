import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './screens/Inicio';
import Perfil from './screens/Perfil';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={Inicio} />
      <HomeStack.Screen name="Perfil" component={Perfil} />
    </HomeStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};
