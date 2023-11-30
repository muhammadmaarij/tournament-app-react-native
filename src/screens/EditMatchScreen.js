import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput'; // Import your CustomTextInput component
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {Provider as PaperProvider} from 'react-native-paper';

const EditMatchScreen = () => {
  // Assuming you're passing the current match details as params to the route
  //   const {match, team1, team2} = route.params;
  const {match, team1, team2} = {match: 'match', team1: 'team1', team2: 'team'};

  const [matchName, setMatchName] = useState(match);
  const [team1Name, setTeam1Name] = useState(team1);
  const [team2Name, setTeam2Name] = useState(team2);
  const [spectator, setSpectator] = useState('');
  const [time, setTime] = useState('');
  const [matchLink, setMatchLink] = useState('');

  // Handle saving the edited match details
  const handleSave = () => {
    // Save logic goes here
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header text={'Edit Match'} textSub={''} />
        <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 30}}>
          <CustomTextInput
            onChangeText={setMatchName}
            text={matchName}
            placeholder="Enter match name"
            name="Match Name"
          />
          <CustomTextInput
            onChangeText={setTeam1Name}
            text={team1Name}
            placeholder="Enter team 1 name"
            name="Team 1"
          />
          <CustomTextInput
            onChangeText={setTeam2Name}
            text={team2Name}
            placeholder="Enter team 2 name"
            name="Team 2"
          />
          <CustomTextInput
            onChangeText={setSpectator}
            text={spectator}
            placeholder="Add spectator"
            name="Spectator"
          />
          <CustomTextInput
            onChangeText={setTime}
            text={time}
            placeholder="Set match time"
            name="Time"
          />
          <CustomTextInput
            onChangeText={setMatchLink}
            text={matchLink}
            placeholder="Enter match link"
            name="Match Link"
          />
          <CustomButton title={'Update'} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

// Assuming you have a separate file for CustomTextInput
export default EditMatchScreen;
