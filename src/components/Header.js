import React from 'react';
import {View, Dimensions} from 'react-native';
import {Appbar} from 'react-native-paper';
import GreenHeader from '../assets/svgs/GreenHeader.svg';

const {width, height} = Dimensions.get('window');

const Header = () => (
  <View>
    <GreenHeader width={width} height={width*0.55} />
    <Appbar.Header>
      <Appbar.Content title="Welcome Hassan!" subtitle="Let's get started" />
    </Appbar.Header>
  </View>
);

export default Header;
