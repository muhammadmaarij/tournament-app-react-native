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
import {SERVER_URL} from '../utils/constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TeamRegistration = ({navigation}) => {
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState('');

  const handleRegister = async () => {
    // Split the members string by comma and remove whitespace
    const memberNames = members.split(',').map(name => name.trim());

    // Construct the data object for the POST request
    const teamData = {
      title: teamName,
      captain: captainName, // This might need to be a player ID
      description: description,
      members: memberNames, // This should be an array of player IDs
    };

    // Make the POST request to the Django server
    try {
      const response = await fetch(`${SERVER_URL}api/teams/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers such as authorization if needed
        },
        body: JSON.stringify(teamData),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Handle successful registration (navigate or show message)
        navigation.navigate('HomeTabs');
      } else {
        // Handle errors (show error message)
        console.error(responseData);
      }
    } catch (error) {
      console.error('Error registering team:', error);
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'Team Registration'}
          textSub={''}
          navigationFn={() => navigation.pop()}
        />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput
            name={'Title'}
            placeholder={'Enter Team Name'}
            text={teamName}
            onChangeText={setTeamName} // Update the teamName state
          />
          <CustomTextInput
            name={'Captain'}
            placeholder={'Enter Captain Name'}
            text={captainName}
            onChangeText={setCaptainName}
          />
          <CustomTextInput
            name={'Description'}
            placeholder={'Enter Team Description'}
            text={description}
            onChangeText={setDescription}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#567189',
                marginLeft: width * 0.15,
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
              value={members}
              onChangeText={setMembers}
            />
          </View>
          <View style={{height: 20}}></View>
          <CustomButton
            title={'Register'}
            // onPress={() => navigation.navigate('HomeTabs')}
            onPress={handleRegister}
          />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 75,
    width: width * 0.7,
    backgroundColor: '#4F6F52',
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    opacity: 0.5,
  },
});

export default TeamRegistration;
