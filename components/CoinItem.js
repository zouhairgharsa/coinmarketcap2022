import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { percentageColor, normalizeMarketCap } from '../helpers';

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const navigation = useNavigation();

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{ uri: image }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: 'center',
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={percentageColor(price_change_percentage_24h)}
            style={{ alignSelf: 'center', marginRight: 5 }}
          />
          <Text style={{ color: percentageColor(price_change_percentage_24h) }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={[styles.title, { color: '#cfd6e4' }]}>
          {current_price}
        </Text>
        <Text style={{ color: 'white' }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  rank: {
    fontWeight: '300',
    color: 'white',
  },
  rankContainer: {
    backgroundColor: '#171924',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});
