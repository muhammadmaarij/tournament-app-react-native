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

const TournamentResultsScreen = ({navigation}) => {
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

  const handlePressTournament = id => {
    navigation.navigate('ResultsScreen', {id});
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header text={'Tournaments Results'} textSub={''} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tournaments</Text>
            {tournaments.map(tournament => (
              <Pressable
                key={tournament.id}
                onPress={() => handlePressTournament(tournament.id)}>
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
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default TournamentResultsScreen;
