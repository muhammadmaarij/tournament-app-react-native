import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import styles from '../styles/MainStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomDatePicker from '../components/CustomDatePicker';

const NewTournament = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [slots, setSlots] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [winning, setWinning] = useState(0);
  const [details, setDetails] = useState('');

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'New Tournament'} navigationFn={() => navigation.pop()} />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput
            name={'Title'}
            placeholder={'Enter Tournament Title'}
            text={title}
            onChangeText={setTitle}
            secureText={false}
          />
          <CustomTextInput
            name={'Slots'}
            placeholder={'Enter Tournament Slots'}
            text={slots}
            onChangeText={setSlots}
            secureText={false}
          />
          <CustomDatePicker
            name={'Start Date'}
            date={startDate}
            onChange={setStartDate}
          />
          <CustomDatePicker
            name={'End Date'}
            date={endDate}
            onChange={setEndDate}
          />
          <CustomTextInput
            name={'Winning Prize'}
            placeholder={'Enter Tournament Prize'}
            text={winning}
            onChangeText={setWinning}
            secureText={false}
          />
          <CustomTextInput
            name={'Details'}
            placeholder={'Enter Tournament details'}
            text={details}
            onChangeText={setDetails}
            secureText={false}
          />
          <View style={{height: 20}}></View>
          <CustomButton
            title={'Next'}
            onPress={() => {
              navigation.navigate('TournamentFormat', {
                title,
                slots,
                startDate,
                endDate,
                winning,
                details,
              });
            }}
          />
          <View style={{height: 20}}></View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default NewTournament;
