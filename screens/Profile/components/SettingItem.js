import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Switch,
  TouchableOpacity,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';





const SettingItem = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(item.type);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <TouchableOpacity
      disabled={isEnabled}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        height: 40,
      }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textTransform: 'capitalize',
            fontFamily: 'Roboto-Bold',
            lineHeight: 22,
          }}>
          {item.name}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            color: '#757575',
            fontSize: 17,
            fontFamily: 'Roboto-Bold',
          }}>
          {item.options}
        </Text>
        {item.type ? (
          <Switch
            trackColor={{ false: 'grey', true: 'white' }}
            thumbColor={item.type ? '#3861fb' : 'yellow'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ width: 30, height: 30 }}
          />
        ) : (
          <AntDesign
            name="right"
            size={15}
            color="white"
            style={{ marginLeft: 8}}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem