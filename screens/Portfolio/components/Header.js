import React from 'react';

import { View, Text } from 'react-native';

import { AntDesign,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { formatDecimal } from '../../../helpers';
const Header = ({ total }) => {
  const navigation=useNavigation()
  return (
    <View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Ionicons onPress={()=>navigation.goBack()} name="arrow-back-outline" size={30} color="white" style={{marginRight:10}} />
      <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
        Current Balance
      </Text>
    </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, marginTop: 8 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              letterSpacing: 1.5,
              fontWeight: '700',
            }}>
            $ {formatDecimal(total)}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign
              name="caretup"
              size={20}
              color="#16c784"
              style={{ alignSelf: 'flex-end' }}
            />
            <Text style={{ color: '#16c784', lineHeight: 32, fontSize: 16 }}>
              $324.00
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: '#16c784',
            borderRadius: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 16 }}>+2.5 %</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
