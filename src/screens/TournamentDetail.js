import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

const TournamentDetail = ({name, details, dates, prize, slots, navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        text={'Tournament Details'}
        navigationFn={() => navigation.pop()}
      />
      <View style={styles.tournamentDetails}>
        <Text style={styles.tournamentTitle}>{name}</Text>
        <Text style={styles.tournamentSubtitle}>{details}</Text>
        <Text style={styles.date}>{dates}</Text>
        <Text style={styles.prize}>{prize}</Text>
        <Text style={styles.slots}>{slots}</Text>
      </View>
      <CustomButton title={'Register Individual'} />
      <View style={{marginTop: 30}}></View>
      <CustomButton title={'Register Team'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: '30%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'green', // Placeholder for background color
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  tournamentDetails: {
    padding: 20,
    alignItems: 'flex-start',
  },
  tournamentTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tournamentSubtitle: {
    fontSize: 22,
    color: '#333',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  prize: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  slots: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#4F6F52',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TournamentDetail;
