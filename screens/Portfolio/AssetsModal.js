import {
  View,
  Text,
  FlatList,
  Switch,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFetch } from '../../hooks/useFetch';
import Constants from 'expo-constants';

import React, { useState, useEffect, useCallback } from 'react';

const AssetsModal = ({ route, navigation }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState([]);
  const [value, setValue] = useState(0);
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false'
  );

  const isSelected = (coin) => isEnabled.includes(coin);
  const newData = data.filter((item) => isSelected(item.id));

  const handleValue = (id) => {
    data.map((item) =>
      item.id === id ? { ...item, value: item.value } : item
    );
  };

  const addTomyPortfolio = () => {
    navigation.navigate('Portfolio', {
      coinsP: { name, coins: newData },
    });
  };

  const handleSelect = (x) => {
    if (isSelected(x)) {
      return setIsEnabled(isEnabled.filter((item) => item !== x));
    } else {
      return setIsEnabled([...isEnabled, x]);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 30,
      }}>
      <FlatList
        data={data}
        style={{ flexGrow: 0 }}
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: 'white', fontSize: 19, fontWeight: '800' }}>
              Name of my Portfolio
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={{
                padding: 10,
                backgroundColor: 'white',
                marginTop: 5,
                borderRadius: 10,
              }}
              placeholder="Name of my Portfolio"
            />
          </View>
        }
        renderItem={({ item }) => (
          <View
            style={{
              height: 50,
              backgroundColor: '#222531',
              justifyContent: 'center',
              marginBottom: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
                paddingVertical: 8,
              }}>
              <Text style={{ flex: 1, color: 'white', fontSize: 18 }}>
                {item.name}
              </Text>

              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => handleSelect(item.id)}
                value={isSelected(item.id)}
              />
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        disabled={!name}
        onPress={addTomyPortfolio}
        style={{
          backgroundColor: 'blue',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          opacity: name ? 1 : 0.5,
        }}>
        <Text style={{ color: 'white', fontSize: 16 }}>add new Assets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssetsModal;
