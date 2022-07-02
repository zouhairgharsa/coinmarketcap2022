import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Portfolio from './Portfolio';
import AssetsModal from './AssetsModal';
import DetailPortfolio from  './DetailPortfolio'
const RootStack = createStackNavigator();

function PortfolioStack() {
  return (
    <RootStack.Navigator   screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Portfolio" component={Portfolio} />
        <RootStack.Screen name="DetailPortfolio" component={DetailPortfolio} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="AssetsModal" component={AssetsModal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default PortfolioStack;
