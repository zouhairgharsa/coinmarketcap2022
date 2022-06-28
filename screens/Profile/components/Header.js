import React from 'react';
import { View, Text } from 'react-native';
import { profile, settings, DATA } from '../../../constants/profileData';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
  return (
    <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 32,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'roboto',
          }}>
          Profile
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontStyle: 'italic',
              lineHeight: 26,
              fontFamily: 'Roboto-Bold',
            }}>
            {profile.email}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#3B3B3B',
              fontFamily: 'Roboto-Bold',
              lineHeight: 22,
            }}>
            ID:{profile.id}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="verified" size={25} color="#4BEE70" />
          <Text
            style={{
              fontSize: 17,
              color: '#4BEE70',
              marginLeft: 8,
              fontFamily: 'Roboto-Regular',
              lineHeight: 22,
            }}>
            verified
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
