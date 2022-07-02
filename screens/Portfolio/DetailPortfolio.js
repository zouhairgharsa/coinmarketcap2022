import React, { useState, useRef } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { Header } from './components';
import { useFetch } from '../../hooks/useFetch';
import { Screen } from '../../components';
import { TextButton } from '../../components/UI';
const multiply = 2;
import { formatDecimal } from '../../helpers';

const Portfolio = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { coins } = route.params.item;
  const [qte, setQte] = useState(0);
  const [selectCOins, setSelectCoins] = useState('');
  const [portfolio, setPortfolio] = useState([]);

  const dataselect = coins.find((item) => item.name === selectCOins);

  const addTomyPortfolio = () => {
    const {
      name,
      image,
      current_price,
      price_change_percentage_24h: percentage24h,
    } = dataselect;
    setPortfolio((coin) => [
      ...coin,
      {
        name,
        image,
        percentage24h,
        current_price,
        price: qte * current_price,
        qte: qte,
      },
    ]);

    setQte(0);
    setSelectCoins('');
  };

  const totalPrice = portfolio?.reduce((acc, coin) => {
    return acc + coin.price;
  }, 0);

  return (
    <Screen>
      <View style={{ paddingHorizontal: 15 }}>
        <Header total={totalPrice} />
        <View style={{ marginBottom: 50, marginTop: 25 }}>
          {portfolio
            ?.sort((a, b) => b.price - a.price)
            .map((item) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 60, height: 60, resizeMode: 'contain' }}
                  />
                  <Text style={{ color: 'white', fontSize: 16, marginLeft: 8 }}>
                    {item.name}
                  </Text>
                </View>
                <Text style={{ color: '#16c784', fontSize: 17 }}>
                  {formatDecimal(item.current_price)}
                </Text>
                <Text style={{ color: 'white', fontSize: 17, marginLeft: 10 }}>
                  {formatDecimal(item.price)}
                </Text>
              </View>
            ))}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <TextInput
              keyboardType="numeric"
              editable={modalVisible}
              value={qte}
              onChangeText={setQte}
              style={{
                fontSize: 30,
                color: 'blue',
                backgroundColor: '#a1a7bb',
              }}
            />
            {coins.map((item) => (
              <TouchableOpacity
                style={{
                  marginBottom: 10,
                  marginTop: 20,
                  height: 100,
                  width: 100,
                  borderWidth: 1,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    selectCOins === item.name ? '#3861fb' : 'white',
                }}
                onPress={() => setSelectCoins(item.name)}>
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <Text
                  style={{
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}

            <View>
              <TextButton
                label={'cancel'}
                backgroundColor={'#6188ff'}
                onPress={() => setModalVisible(!modalVisible)}
              />
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
                  marginTop: 20,
                  opacity: !selectCOins ? 0.5 : 1,
                }}>
                <Text style={{ fontSize: 18, color: 'white' }}>
                  add to my assets
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TextButton
          label={'change my assets'}
          backgroundColor={'#6188ff'}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </Screen>
  );
};

export default Portfolio;
