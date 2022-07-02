import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TextButton = ({ onPress, backgroundColor, label }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 15,
      }}
      onPress={onPress}>
      <Text style={{ fontSize: 15, color: 'white', fontWeight: '500' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
