import React from 'react';

import Constants from 'expo-constants';

import { View, SafeAreaView, Platform } from 'react-native';

const Screen = ({ children }) => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? 30 : Constants.statusBarHeight+10,
      }}>
      {children}
    </View>
  );
};

export default Screen;
