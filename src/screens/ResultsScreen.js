import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';

const tournamentResults = [
  {
    id: '1',
    match: 'Semi-final 1',
    team1: 'Team A',
    team2: 'Team B',
    winner: 'Team A',
  },
  {
    id: '2',
    match: 'Semi-final 2',
    team1: 'Team C',
    team2: 'Team D',
    winner: 'Team D',
  },
  {id: '3', match: 'Final', team1: 'Team A', team2: 'Team D', winner: 'Team D'},
  // Add more matches as needed
];

const ResultsScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View>
      <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{item.match}</Text>
        <Text style={styles.teamText}>
          {item.team1} vs {item.team2}
        </Text>
        <Text style={styles.winnerText}>Winner: {item.winner}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Header text={'Results'} navigationFn={() => navigation.pop()} />
      <View style={styles.container}>
        <FlatList
          data={tournamentResults}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchContainer: {
    backgroundColor: '#4F6F52',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  matchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  teamText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  winnerText: {
    fontSize: 16,
    color: 'gold',
    fontWeight: 'bold',
  },
});

export default ResultsScreen;
