import React from 'react';

import { View, TextInput } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

const SearchBar = ({ search, setSearch }) => {
  return (
    <View
      style={{
        backgroundColor: '#171924',
        height: 50,
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <AntDesign
          name="search1"
          size={24}
          color="#646b80"
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search coins"
          placeholderTextColor="#646b80"
          style={{ fontSize: 18, color: 'white', flex: 1, paddingVertical: 5 }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
