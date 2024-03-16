import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import {SERVER_URL} from '../utils/constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
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
        <Header text={'LOGIN'} textSub={''} />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput
            name={'Email'}
            placeholder={'Enter Email'}
            text={captainName}
            onChangeText={setCaptainName}
          />
          <View style={{height: 20}}></View>
          <CustomTextInput
            name={'Password'}
            placeholder={'Enter Password'}
            text={description}
            onChangeText={setDescription}
          />

          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#0C134F',
                alignSelf: 'flex-end',
                marginRight: width * 0.15,
                marginTop: 25,
              }}>
              Forget Password?
            </Text>
            <View style={{height: 10}}></View>
          </View>
          <CustomButton
            title={'Login'}
            // onPress={() => navigation.navigate('HomeTabs')}
            onPress={handleRegister}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text style={{fontSize: 16, color: '#4F6F52'}}>
              Don't have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={{fontSize: 16, color: '#567189', fontWeight: '600'}}>
                Sign Up
              </Text>
            </Pressable>
          </View>
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

export default LoginScreen;
