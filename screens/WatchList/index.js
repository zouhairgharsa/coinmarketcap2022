import React from 'react';

import { CoinItem } from '../../components';
import { Entypo } from '@expo/vector-icons';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useFetch } from '../../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import Constants from 'expo-constants';

import {
  items,
  addToFavorite,
  removefromFavorite,
} from '../../features/favoriteSlice';

const WatchList = () => {
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const coins = useSelector(items);
  const isSelected = (coin) => coins.includes(coin);
  const favouriteData = data.filter((item) => isSelected(item.id));

  const dispatch = useDispatch();
  return (
    <FlatList
      data={favouriteData}
      contentContainerStyle={{ paddingTop: Constants.statusBarHeight + 30 }}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#222531',
            marginHorizontal: 15,
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <CoinItem marketCoin={item} />
          <Entypo
            onPress={() => dispatch(removefromFavorite(item.id))}
            name="star"
            size={24}
            color={'blue'}
            style={{ marginLeft: 10 }}
          />
        </View>
      )}
    />
  );
};

export default WatchList;
