import React, {Component} from 'react';
import {View, Image} from 'react-native';
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
        }}>
        <Image
          source={{
            uri: 'https://d117h1jjiq768j.cloudfront.net/images/default-source/blogs/2019/2019-10/the-react-native-sdk-for-kinvey-is-now-available_870_450.png?sfvrsn=296e1008_0',
          }}
          style={{height: height(30), width: width(100)}}
        />
      </View>
    );
  };

  const returnItem = props => {
    // console.log('item', props);
    return <Item name={props.item} />;
  };

  //here the height of the header must be same as inside Collapsable bar
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <CollapsibleTabView
        renderHeader={Header()}
        HeaderHeight={300}
        Data={[data1, data2, data3]}
        tabNames={[
          {key: 'tab1', title: 'Taha'},
          {key: 'tab2', title: 'usama'},
          {key: 'tab3', title: 'ejaz'},
          // {key: 'tab4', title: 'Tab4'},
          // {key: 'tab5', title: 'Tab5'},
        ]}
        tabsData={{
          tab1: [12, 23, 45, 12, 21, 21, 313, 3123],
          tab2: ['a', 'a23', 'c', 'a', 'a23', 'c', 'a', 'a23', 'c'],
          tab3: [
            'usam',
            'sadsad',
            'asas',
            'sadsad',
            'asas',
            'sadsad',
            'asas',
            'sadsad',
            'asas',
          ],
        }}
        renderComponent={returnItem}
      />
    </View>
  );
};

export default App;
