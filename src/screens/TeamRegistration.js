import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TeamRegistration = ({navigation}) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'Team Registration'}
          textSub={''}
          navigationFn={() => navigation.pop()}
        />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput name={'Title'} placeholder={'Enter Team Name'} />
          <CustomTextInput
            name={'Captain'}
            placeholder={'Enter Captain Name'}
          />
          <CustomTextInput
            name={'Description'}
            placeholder={'Enter Team Description'}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#567189',
                marginLeft: width * 0.1,
                marginBottom: 5,
              }}>
              Team Members
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder={'Enter names separeted by comma'}
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={{height: 20}}></View>
          <CustomButton title={'Register'} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 75,
    width: width * 0.8,
    backgroundColor: '#4F6F52',
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    opacity: 0.5,
  },
});

export default TeamRegistration;
