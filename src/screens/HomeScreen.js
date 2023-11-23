import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import TournamentCard from '../components/TournamentCard';
import Match from '../components/Match';
import styles from '../styles/MainStyles';

const HomeScreen = () => {
  const [tournaments, setTournaments] = useState([
    {
      id: '1',
      title: 'Tekken 8 Evo Tournament',
      winning: '100k',
      image: 'https://via.placeholder.com/150',
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
        <Header />
        <ScrollView style={styles.scrollView}>
          <SearchComponent style={styles.search} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
            {tournaments.map(tournament => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                style={styles.card}
              />
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Matches</Text>
            {matches.map(match => (
              <Match key={match.id} match={match} style={styles.match} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default HomeScreen;
