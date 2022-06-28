import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { CoinItem } from '../../components';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import Constants from 'expo-constants';

import { SearchBar } from './components';
import {
  items,
  addToFavorite,
  removefromFavorite,
} from '../../features/favoriteSlice';

const Home = () => {
  const [search, setSearch] = useState('');
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const dispatch = useDispatch();

  const coinSearch = search
    ? data.filter((item) =>
        item.id.toUpperCase().includes(search.toUpperCase())
      )
    : data;
  const coins = useSelector(items);
  const isSelected = (coin) => coins.includes(coin);
  const handleFavourite = (coin) => {
    isSelected(coin)
      ? dispatch(removefromFavorite(coin))
      : dispatch(addToFavorite(coin));
  };

  return (
    <FlatList
      data={coinSearch}
      contentContainerStyle={{ paddingTop: Constants.statusBarHeight + 30 }}
      ListHeaderComponent={<SearchBar search={search} setSearch={setSearch} />}
      renderItem={({ item }) => {
        return (
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
            <TouchableOpacity onPress={() => handleFavourite(item.id)}>
              <Entypo
                name="star"
                size={24}
                color={isSelected(item.id) ? 'blue' : 'black'}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default Home;
