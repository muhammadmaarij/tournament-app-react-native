import React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import GreenHeader from '../assets/svgs/GreenHeader.svg';
import MainStyles from '../styles/MainStyles';

const {width, height} = Dimensions.get('window');

const GreenHeaderWrapper = ({text, textSub}) => (
  <View>
    <GreenHeader width={width * 0.85} height={width * 0.47} />
    <View
      style={{
        position: 'absolute',
        left: '50%',
        transform: [{translateX: -12.5}],
      }}>
      {/* Assuming the width of the image is 25, centering it horizontally */}
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: 25, height: 50}}
      />
    </View>
    <View
      style={{
        position: 'absolute',
        top: '30%',
        left: '7%',
      }}>
      <Text style={[{fontSize: 22, color: '#ffffff'}, MainStyles.boldText]}>
        {text}
      </Text>
      <Text style={[{fontSize: 15, color: '#ffffff'}, MainStyles.lightText]}>
        {textSub}
      </Text>
    </View>
  </View>
);

export default GreenHeaderWrapper;
