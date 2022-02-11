import React, {Component} from 'react';
import {View} from 'react-native';
import {height, width} from 'react-native-dimension';
import {data1, data2, data3} from './Source/Data/data';
import CollapsibleTabView from './Source/Screens/CollapsableTabBar';
import CollapsableTabBar from './Source/Screens/CollapsableTabBar';
import Item from './Source/Screens/Components/Item';

const App = () => {
  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          height: height(30),
          width: width(100),
        }}></View>
    );
  };

  const returnItem = ({item}) => {
    return <Item name={item.name} />;
  };

  //here the height of the header must be same as inside Collapsable bar
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <CollapsibleTabView
        renderHeader={Header()}
        Data={[data1, data2, data3]}
      />
    </View>
  );
};

export default App;
