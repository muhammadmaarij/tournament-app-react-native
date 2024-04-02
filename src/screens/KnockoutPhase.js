import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MatchSlot from '../components/MatchSlot'; // Your MatchSlot component
import Header from '../components/Header';

const KnockoutPhase = ({navigation}) => {
  // Example state for matches in each round
  const [quarterFinals, setQuarterFinals] = useState([
    {id: 'E1', match: 'Match E1', team1: 'Team A', team2: 'Team B'},
    {id: 'E2', match: 'Match E2', team1: 'Team C', team2: 'Team D'},
    // ... other quarterfinals
  ]);

  const [semiFinals, setSemiFinals] = useState([
    {
      id: 'E5',
      match: 'Match E5',
      team1: 'Winner Match E1',
      team2: 'Winner Match E2',
    },
    // ... other semifinals
  ]);

  const [final, setFinal] = useState([
    {
      id: 'E7',
      match: 'Final',
      team1: 'Winner Match E5',
      team2: 'Winner Match E6',
    },
  ]);

  // Add logic to handle creating new matches or editing existing ones
  const addMatch = () => {
    // Your logic to add a match
  };

  const editMatch = id => {
    // Your logic to edit a match
  };

  return (
    <>
      <Header text={'Knockout Phase'} navigationFn={() => navigation.pop()} />
      <ScrollView style={styles.container}>
        <View style={styles.roundContainer}>
          {/* Render Quarter Finals */}
          <View style={styles.round}>
            {quarterFinals.map(match => (
              <MatchSlot
                key={match.id}
                {...match}
                isSpectator={true}
                onPress={() => navigation.navigate('EditMatchScreen')}
                onPress2={() =>
                  navigation.navigate('MatchResultsSubmissionScreen')
                }
              />
            ))}
          </View>

          {/* Render Semi Finals */}
          <View style={styles.round}>
            {semiFinals.map(match => (
              <MatchSlot key={match.id} {...match} isSpectator={false} />
            ))}
          </View>

          {/* Render Final */}
          <View style={styles.round}>
            {final.map(match => (
              <MatchSlot key={match.id} {...match} isSpectator={false} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  roundContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Add more styles as needed
});

export default KnockoutPhase;
