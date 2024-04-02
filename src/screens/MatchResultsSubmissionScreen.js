import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput'; // Assuming this is your styled TextInput
import CustomButton from '../components/CustomButton'; // Assuming this is your styled Button
import Header from '../components/Header';

const MatchResultSubmissionScreen = ({navigation}) => {
  const [team1Score, setTeam1Score] = useState('');
  const [team2Score, setTeam2Score] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    // Submit logic goes here...
    navigation.navigate('KnockoutPhase');
    console.log({
      team1Score,
      team2Score,
      comments,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        text={'Results Submission'}
        navigationFn={() => navigation.pop()}
      />
      <ScrollView>
        <CustomTextInput
          name="Team 1 Score"
          placeholder="Enter Team 1 Score"
          onChangeText={setTeam1Score}
          text={team1Score}
          keyboardType="numeric"
        />
        <CustomTextInput
          name="Team 2 Score"
          placeholder="Enter Team 2 Score"
          onChangeText={setTeam2Score}
          text={team2Score}
          keyboardType="numeric"
        />
        <CustomTextInput
          name="Comments"
          placeholder="Any comments"
          onChangeText={setComments}
          text={comments}
          multiline
        />
        <View style={{marginTop: 20}}></View>
        <CustomButton title="Submit Result" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  photoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  photoText: {
    color: '#4F6F52',
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MatchResultSubmissionScreen;
