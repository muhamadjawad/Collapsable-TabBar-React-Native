import {View, Text} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';

export default function Item(props) {
  return (
    <View
      style={{
        backgroundColor: 'cyan',
        // justifyContent: 'cent
        height: height(15),
        // width: width(100),
      }}>
      <Text>{props.name}</Text>
    </View>
  );
}
