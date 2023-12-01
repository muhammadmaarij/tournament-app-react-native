import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import styles from '../styles/MainStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const NewTournament = ({navigation}) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'New Tournament'}
          textSub={''}
          navigationFn={() => navigation.pop()}
        />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput
            name={'Title'}
            placeholder={'Enter Tournament Title'}
          />
          <CustomTextInput
            name={'Venue'}
            placeholder={'Enter online for virtual'}
          />
          <CustomTextInput
            name={'Slots'}
            placeholder={'Enter Tournament Slots'}
          />
          <CustomTextInput
            name={'Date'}
            placeholder={'Enter Tournament Title'}
          />
          <CustomTextInput
            name={'Winning Prize'}
            placeholder={'Enter Tournament Prize'}
          />
          <View style={{height: 20}}></View>
          <CustomButton title={'Create Tournament'} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default NewTournament;
