import React from 'react';
import {View, Image, Dimensions, Text, TouchableOpacity} from 'react-native';
import GreenHeader from '../assets/svgs/GreenHeader.svg';
import MainStyles from '../styles/MainStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const GreenHeaderWrapper = ({text, textSub, navigationFn}) => (
  <View>
    <GreenHeader width={width * 0.85} height={width * 0.47} />
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      {navigationFn && (
        <TouchableOpacity style={{marginLeft: 13}} onPress={navigationFn}>
          <Icon name="angle-left" size={38} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: 25, height: 50, marginLeft: width * 0.4}}
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
