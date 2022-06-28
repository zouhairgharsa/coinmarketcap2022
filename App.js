import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, Home, WatchList, PortfolioStack } from './screens';
import { store } from './store';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }
          if (route.name === 'Portfolio') {
            iconName = 'pie-chart-sharp';
          }
          if (route.name === 'WatchList') {
            iconName = 'md-star';
          }
          if (route.name === 'Profile') {
            iconName = 'person-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6188ff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          background: '#222531',
          height: 60,
          position: 'absolute',
          bottom: 0,
          left: 5,
          right: 5,
        },
        tabBarItemStyle: { background: '#222531' },
        tabBarLabelStyle: { fontSize: 15, fontWeight: '600' },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="WatchList" component={WatchList} />
      <Tab.Screen name="Portfolio" component={PortfolioStack} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#17171A',
        },
      }}>
      <Provider store={store}>
        <StatusBar style="light" />

        <MyTabs />
      </Provider>
    </NavigationContainer>
  );
}
