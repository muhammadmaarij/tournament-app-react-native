// import React, {useState} from 'react';
// import {SafeAreaView, View, ScrollView, Text} from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';
// import Header from '../components/Header';
// import SearchComponent from '../components/SearchComponent';
// import TournamentCard from '../components/TournamentCard';
// import Match from '../components/Match';
// import styles from '../styles/MainStyles';
// import SearchBar from '../components/SearchBar';

// const HomeScreen = ({navigation}) => {
//   const [tournaments, setTournaments] = useState([
//     {
//       id: '1',
//       title: 'Tekken 8 Evo Tournament',
//       winning: '100k',
//       image: 'https://via.placeholder.com/150',
//     },
//     // ... more tournaments
//   ]);
//   const [matches, setMatches] = useState([
//     {id: '1', title: 'Final', time: '10pm - 11pm'},
//     // ... more matches
//   ]);

//   return (
//     <PaperProvider>
//       <SafeAreaView style={styles.container}>
//         <Header text={'Welcome Maarij'} textSub={'Lets get started'} />
//         <ScrollView style={styles.scrollView}>
//           <SearchBar term={'Search any tournament'} />
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
//             {tournaments.map(tournament => (
//               <TournamentCard
//                 key={tournament.id}
//                 tournament={tournament}
//                 style={styles.card}
//                 name={'Tournament'}
//                 time={'10 Dec - 12 Dec'}
//                 winning={'20k'}
//                 slots={'7/15'}
//               />
//             ))}
//           </View>
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Today's Matches</Text>
//             {matches.map(match => (
//               <Match
//                 key={match.id}
//                 match={'Final'}
//                 time={'10pm - 11pm'}
//                 style={styles.match}
//               />
//             ))}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </PaperProvider>
//   );
// };

// export default HomeScreen;

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TournamentCard from '../components/TournamentCard';
import Match from '../components/Match';
import styles from '../styles/MainStyles';

import {fetchTournaments, fetchMatches} from '../utils/api/api';

const HomeScreen = ({navigation}) => {
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
        <Header text={'Welcome Maarij'} textSub={'Lets get started'} />
        <ScrollView style={styles.scrollView}>
          <SearchBar term={'Search any tournament'} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
            {tournaments.map(tournament => (
              <TournamentCard
                key={tournament.id}
                style={styles.card}
                name={tournament.title}
                winning={tournament.winning_prize}
                slots={tournament.slots}
                startDate={tournament.start_date}
                endDate={tournament.end_date}
                uri={tournament.image} // Pass the image URL as the uri prop
              />
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Matches</Text>
            {matches.map(match => (
              <Match
                key={match.id}
                match={match.name}
                style={styles.match}
                time={match.time}
                team1={match.team1}
                team2={match.team2}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default HomeScreen;
