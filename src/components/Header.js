import React from 'react';
import {View, Dimensions} from 'react-native';
import {Appbar} from 'react-native-paper';
import GreenHeader from '../assets/svgs/GreenHeader.svg';
import GreenHeaderWrapper from './GreenHeaderWrapper';

const {width, height} = Dimensions.get('window');

const Header = () => (
  <View>
    <GreenHeaderWrapper text={'Welcome Maarij'} textSub={'Lets get started'} />
    <Appbar.Header>
      <Appbar.Content title="Welcome m!" subtitle="Let's get started" />
    </Appbar.Header>
  </View>
);

export default Header;
