import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from './components';
import { useFetch } from '../../hooks/useFetch';

const multiply = 2;
import {formatDecimal} from  '../../helpers'


const Portfolio = ({navigation}) => {
  const [qte, setQte] = useState(0);
  const [selectCOins, setSelectCoins] = useState('');
  const [portfolio, setPortfolio] = useState([]);
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
  );
  console.log(data)
  

  const dataselect = data.find((item) => item.name === selectCOins);

  const addTomyPortfolio = () => {
    const { name, image, current_price,price_change_percentage_24h:percentage24h } = dataselect;
    setPortfolio((x) => [...x, { name, image,current_price,percentage24h, price: qte * current_price }]);
    setQte(0);
    setSelectCoins('');
  };
  console.log(portfolio);

  const totalPrice = portfolio?.reduce((acc, rec) => {
   return acc + rec.price;
  }, 0);
  return (
    <View style={{ paddingHorizontal: 15,paddingTop:30 }}>
      <Header total={totalPrice} />
      {portfolio?.map((item) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ color: 'white',fontSize:16,marginLeft:8 }}>{item.name}</Text>
          </View>
          <Text style={{color:'#16c784',fontSize:17}}>{formatDecimal(item.current_price)}</Text>
          <Text style={{ color: 'white',fontSize:17,marginLeft:10 }}>{formatDecimal(item.price)}</Text>
          <Text>{formatDecimal(item.percentage24h)} %</Text>
        </View>
      ))}
      <View>
        <TextInput
        keyboardType='numeric'
          value={qte}
          onChangeText={setQte}
          style={{ fontSize: 30, color: 'blue' }}
        />
        {data.map((item) => (
          <TouchableOpacity onPress={() => setSelectCoins(item.name)}>
            <Text
              style={{ color: selectCOins === item.name ? 'white' : 'black' }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        disabled={qte == 0}
        onPress={addTomyPortfolio}
        style={{
          backgroundColor: 'blue',
          height: 40,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          opacity: !selectCOins ? 0.5 : 1,
        }}>
        <Text style={{ fontSize: 18, color: 'white' }}>add to my assets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate('AssetsModal')}
        style={{
          backgroundColor: 'blue',
          height: 40,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          opacity: !selectCOins ? 0.5 : 1,
        }}>
        <Text style={{ fontSize: 18, color: 'white' }}>add to my assets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Portfolio;