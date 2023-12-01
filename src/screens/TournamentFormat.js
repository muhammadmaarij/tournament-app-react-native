import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text, Dimensions} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import styles from '../styles/MainStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TotalTeamsC from '../components/TotalTeamsC';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TournamentFormat = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'Tournament Format'}
          textSub={''}
          navigationFn={() => navigation.pop()}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#567189',
            marginLeft: width * 0.15,
          }}>
          Select total teams
        </Text>
        <TotalTeamsC />
        <View style={{marginTop: 200}}></View>
        <CustomButton title={'Create Phase'} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default TournamentFormat;
