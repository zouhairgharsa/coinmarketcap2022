import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';

import { useFetch } from '../../hooks/useFetch';
export default function Portfolio({ navigation, route }) {
  const [qte, setQte] = useState(0);
  const [selected, setSelected] = useState('bitcoin');
  const [datas, setDatas] = useState([]);
  console.log(datas);
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
  );

  const coinsP = route.params ? route.params.coinsP : null;

  useEffect(() => {
    if (coinsP) {
      setDatas((current) => [coinsP, ...current]);
    }
  }, [coinsP]);

  const totalPrice = (data) =>
    data.coins?.reduce((acc, rec) => {
      return acc + rec.current_price;
    }, 0);
  return (
    <View
      style={{
        marginHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 30,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#3861fb',
          alignSelf: 'flex-start',
          paddingHorizontal: 10,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
        onPress={() => navigation.navigate('AssetsModal')}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
          Create Portfolio
        </Text>
      </TouchableOpacity>
      <FlatList
        data={datas}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 28, color: 'white', fontWeight: '700' }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: '300',
              }}>
              {totalPrice(item).toFixed(2)}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'grey',
                paddingVertical: 5,
              }}>
              {item.coins.map((item) => (
                <View
                  key={item.id}
                  style={{ marginRight: 10, marginBottom: 5 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50, resizeMode: 'contain' }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                      textTransform: 'capitalize',
                    }}>
                    {item.id}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}
