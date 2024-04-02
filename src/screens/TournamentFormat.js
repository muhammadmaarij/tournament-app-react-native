import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions, Alert, Image} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import styles from '../styles/MainStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TotalTeamsC from '../components/TotalTeamsC';
// import RNFS from 'react-native-fs';
import {createTournament} from '../utils/api/api';
import tekken from '../assets/images/tekken.png';
import {launchImageLibrary} from 'react-native-image-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TournamentFormat = ({navigation, route}) => {
  const [teams, setTeams] = useState(0);
  const [image, setImage] = useState(null);
  const {title, startDate, endDate, winning, details} = route.params;
  console.log(route.params);

  const imageToBase64 = async () => {
    try {
      const filePath = RNFS.MainBundlePath + '/assets/images/tekken.png'; // Adjust path as necessary
      const base64String = await RNFS.readFile(filePath, 'base64');
      return base64String;
    } catch (error) {
      console.error('Error converting image to base64:', error);
    }
  };

  const handleImagePicker = async () => {
    let options = {
      mediaType: 'photo',
    };
    let response = await launchImageLibrary(options);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      setImage(response.assets[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slots', parseInt(teams, 10).toString());
    formData.append('start_date', startDate.toISOString().split('T')[0]);
    formData.append('end_date', endDate.toISOString().split('T')[0]);
    formData.append('winning_prize', winning.toString());
    formData.append('details', details);
    if (image) {
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
    }

    try {
      console.log(formData);
      const response = await fetch(`http://10.0.2.2:8000/api/tournaments/`, {
        method: 'POST',
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      });

      if (response.ok) {
        console.log('Tournament created successfully');
        navigation.navigate('HomeTabs');
      } else {
        console.log('Error:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error creating tournament:', error);
      Alert.alert('Error', 'Failed to create tournament');
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header
          text={'Tournament Format'}
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
        <TotalTeamsC onChange={value => setTeams(value)} />
        {/* <View style={{marginTop: 200}}></View> */}
        <CustomButton title={'Add Image'} onPress={handleImagePicker} />
        {image && (
          <Image
            source={{uri: image.uri}}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
        )}
        <View style={{height: 20}}></View>

        <CustomButton title={'Create Tournament'} onPress={handleSubmit} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default TournamentFormat;
