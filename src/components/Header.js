import React from 'react';
import {View, Dimensions} from 'react-native';
import {Appbar} from 'react-native-paper';
import GreenHeader from '../assets/svgs/GreenHeader.svg';
import GreenHeaderWrapper from './GreenHeaderWrapper';

const {width, height} = Dimensions.get('window');

const Header = ({text, textSub}) => (
  <View>
    <GreenHeaderWrapper text={text} textSub={textSub} />
  </View>
);

export default Header;
