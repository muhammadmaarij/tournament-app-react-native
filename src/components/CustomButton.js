import React from 'react';
import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import MainStyles from '../styles/MainStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CustomButton({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width * 0.7,
    backgroundColor: '#4F6F52',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    fontFamily: MainStyles.fontFamily,
  },
});
