import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { CoinItem, Screen } from '../../components';
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
  const coins = useSelector(items);
  const dispatch = useDispatch();

  const { data, error, loading } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  );

  const coinSearch = search
    ? data.filter((item) =>
        item.id.toUpperCase().includes(search.toUpperCase())
      )
    : data;

  const isSelected = (coin) => coins.includes(coin);
  const handleFavourite = (coin) => {
    isSelected(coin)
      ? dispatch(removefromFavorite(coin))
      : dispatch(addToFavorite(coin));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  if (error) {
    return <Text>no data....</Text>;
  }
  return (
    <Screen>
      <FlatList
        data={coinSearch}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 10 }}>
            <SearchBar search={search} setSearch={setSearch} />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
                marginVertical: 12,
              }}>
              CryptoAssets
            </Text>
          </View>
        }
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
    </Screen>
  );
};

export default Home;
