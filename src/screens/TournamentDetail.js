import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {deleteTournament} from '../utils/api/api';

const TournamentDetail = ({navigation, route}) => {
  const {id, name, startDate, endDate, winning, slots, details, creator} =
    route.params;
  console.log(route.params);
  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this tournament?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await deleteTournament(id);
              navigation.pop(); // or navigation.goBack();
            } catch (error) {
              console.error('Error deleting tournament:', error);
              // Display an error message if needed
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  // const isCreator = currentUser && creator && currentUser.id === creator;
  const isCreator = true;

  return (
    <View style={styles.container}>
      <Header
        text={'Tournament Details'}
        navigationFn={() => navigation.pop()}
      />
      <View style={styles.tournamentDetails}>
        <View style={styles.titleContainer}>
          <Text style={styles.tournamentTitle}>{name}</Text>
          {isCreator && (
            <TouchableOpacity onPress={handleDelete}>
              <Icon name="trash" size={24} color="#b22222" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.tournamentSubtitle}>{details}</Text>
        <Text style={styles.date}>Start date: {startDate}</Text>
        <Text style={styles.date}>End date: {endDate}</Text>
        <Text style={styles.prize}>Prize: {winning}</Text>
        <Text style={styles.slots}>Slots: {slots}</Text>
      </View>
      <CustomButton
        title={'Register Individual'}
        onPress={() => {
          navigation.navigate('PlayerRegistration');
        }}
      />
      <View style={{marginTop: 20}}></View>
      <CustomButton
        title={'Register Team'}
        onPress={() => {
          navigation.navigate('TeamRegistration');
        }}
      />
      <View style={{marginTop: 20}}></View>

      <CustomButton
        title={'Knockout Phase'}
        onPress={() => {
          navigation.navigate('KnockoutPhase');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Make sure the container uses the full width
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
    paddingHorizontal: 20,
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
