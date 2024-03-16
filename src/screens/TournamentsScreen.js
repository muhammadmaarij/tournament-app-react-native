import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView, Text, Pressable} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import TournamentCard from '../components/TournamentCard';
import Match from '../components/Match';
import styles from '../styles/MainStyles';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';

import {fetchTournaments, fetchMatches} from '../utils/api/api';

const TournamentsScreen = ({navigation}) => {
  const [tournaments, setTournaments] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getTournaments = async () => {
      try {
        const response = await fetchTournaments();
        setTournaments(response.data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    const getMatches = async () => {
      try {
        const response = await fetchMatches();
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    getTournaments();
    getMatches();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'Tournaments'} textSub={''} />
        <CustomButton
          title={'New Tournament'}
          onPress={() => {
            navigation.navigate('NewTournament');
          }}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
          <ScrollView style={styles.scrollView} horizontal={true}>
            {tournaments.map(tournament => (
              <Pressable
                key={tournament.id}
                onPress={() => {
                  navigation.navigate('TournamentDetail', {
                    id: tournament.id,
                    name: tournament.title,
                    startDate: tournament.start_date,
                    endDate: tournament.end_date,
                    winning: tournament.winning_prize,
                    slots: tournament.slots,
                    details: tournament.details,
                  });
                }}>
                <TournamentCard
                  key={tournament.id}
                  style={styles.card}
                  name={tournament.title}
                  winning={tournament.winning_prize}
                  slots={tournament.slots}
                  startDate={tournament.start_date}
                  endDate={tournament.end_date}
                  uri={tournament.image}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}></View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default TournamentsScreen;
