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

const SignUpScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // Construct the data object for the POST request
    const userData = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    // Make the POST request to the Django server
    try {
      const response = await fetch(`${SERVER_URL}api/users/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers such as authorization if needed
        },
        body: JSON.stringify(userData),
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
      console.error('Error registering user:', error);
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'SIGN UP'} textSub={''} />
        <ScrollView style={styles.scrollView}>
          <CustomTextInput
            name={'Full Name'}
            placeholder={'Enter name'}
            text={fullName}
            onChangeText={setFullName}
          />
          <CustomTextInput
            name={'Email'}
            placeholder={'Enter Email'}
            text={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            name={'Password'}
            placeholder={'Enter Password'}
            text={password}
            onChangeText={setPassword}
          />
          <CustomTextInput
            name={'Confirm Password'}
            placeholder={'Enter Password'}
            text={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <View style={{height: 20}}></View>

          <CustomButton title={'Sign Up'} onPress={handleRegister} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Text style={{fontSize: 16, color: '#4F6F52'}}>
              Already have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text style={{fontSize: 16, color: '#567189', fontWeight: '600'}}>
                Sign In
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

export default SignUpScreen;
