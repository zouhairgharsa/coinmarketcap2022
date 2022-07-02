import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { profile, settings, DATA } from '../../constants/profileData';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Header, SettingItem } from './components';
export default function Profile() {
  return (
    <View style={styles.container}>

      <Header />
      <SectionList
        sections={DATA}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 20, marginTop: 24 }}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <SettingItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginBottom: 15, marginTop: 20 }}>
            <Text
              style={{
                color: '#757575',
                fontFamily: 'Roboto-Bold',
                fontSize: 14,
                lineHeight: 22,
              }}>
              {title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
