import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CustomTextInput({
  onChangeText,
  text,
  placeholder,
  secureText,
  name,
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#567189',
          marginLeft: width * 0.15,
          marginBottom: 5,
        }}>
        {name}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        secureTextEntry={secureText}
        placeholderTextColor={'black'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: width * 0.7,
    backgroundColor: '#4F6F52',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    opacity: 0.5,
  },
});
