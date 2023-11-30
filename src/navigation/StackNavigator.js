import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Import screens
import HomeScreen from './screens/HomeScreen';
import EditMatchScreen from './screens/EditMatchScreen';
import MatchResultsSubmissionScreen from './screens/MatchResultsSubmissionScreen';
import NewTournament from './screens/NewTournament';
import PlayerRegistration from './screens/PlayerRegistration';
import ResultsScreen from './screens/ResultsScreen';
import TeamRegistration from './screens/TeamRegistration';
import TournamentDetail from './screens/TournamentDetail';
import TournamentFormat from './screens/TournamentFormat';
import TournamentsScreen from './screens/TournamentsScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EditMatchScreen" component={EditMatchScreen} />
        <Stack.Screen
          name="MatchResultsSubmissionScreen"
          component={MatchResultsSubmissionScreen}
        />
        <Stack.Screen name="NewTournament" component={NewTournament} />
        <Stack.Screen
          name="PlayerRegistration"
          component={PlayerRegistration}
        />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
        <Stack.Screen name="TeamRegistration" component={TeamRegistration} />
        <Stack.Screen name="TournamentDetail" component={TournamentDetail} />
        <Stack.Screen name="TournamentFormat" component={TournamentFormat} />
        <Stack.Screen name="TournamentsScreen" component={TournamentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
