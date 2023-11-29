import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import TournamentCard from '../components/TournamentCard';
import Match from '../components/Match';
import styles from '../styles/MainStyles';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const NewTournament = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'New Tournament'} textSub={''} />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput placeholder={'New Tournament'} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default NewTournament;
