import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import styles from '../styles/MainStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const PlayerRegistration = ({navigation}) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'Player Registration'}
          textSub={''}
          navigationFn={() => navigation.pop()}
        />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput name={'Name'} placeholder={'Enter Player Name'} />

          <View style={{height: 50}}></View>
          <CustomButton
            title={'Register'}
            onPress={() => navigation.navigate('HomeTabs')}
          />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default PlayerRegistration;
