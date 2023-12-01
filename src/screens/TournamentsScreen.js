import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text, Pressable} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import TournamentCard from '../components/TournamentCard';
import Match from '../components/Match';
import styles from '../styles/MainStyles';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';

const TournamentsScreen = ({navigation}) => {
  const [tournaments, setTournaments] = useState([
    {
      id: '1',
      name: 'Tekken 8 Evo Tournament',
      winning: '100k',
      startDate: '15-5-23',
      endDate: '17-5-23',
      slots: 12,
      details: 'details',
    },
    // ... more tournaments
  ]);
  const [matches, setMatches] = useState([
    {id: '1', title: 'Final', time: '10pm - 11pm'},
    // ... more matches
  ]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'Tournaments'} textSub={''} />
        <ScrollView style={styles.scrollView}>
          <CustomButton
            title={'New Tournament'}
            onPress={() => {
              navigation.navigate('NewTournament');
            }}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
            {tournaments.map(tournament => (
              <Pressable
                key={tournament.id}
                onPress={() => {
                  navigation.navigate('TournamentDetail', {
                    id: tournament.id,
                    name: tournament.name,
                    startDate: tournament.startDate,
                    endDate: tournament.endDate,
                    winning: tournament.winning,
                    slots: tournament.slots,
                    details: tournament.details,
                  });
                }}>
                <TournamentCard
                  key={tournament.id}
                  tournament={tournament}
                  style={styles.card}
                  name={'Tournament'}
                  time={'10 Dec - 12 Dec'}
                  winning={'20k'}
                  slots={'7/15'}
                />
              </Pressable>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Matches</Text>
            {matches.map(match => (
              <Match
                key={match.id}
                match={'Final'}
                time={'10pm - 11pm'}
                style={styles.match}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default TournamentsScreen;
