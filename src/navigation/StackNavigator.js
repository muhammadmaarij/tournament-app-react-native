import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import EditMatchScreen from '../screens/EditMatchScreen';
import MatchResultsSubmissionScreen from '../screens/MatchResultsSubmissionScreen';
import NewTournament from '../screens/NewTournament';
import PlayerRegistration from '../screens/PlayerRegistration';
import ResultsScreen from '../screens/ResultsScreen';
import TeamRegistration from '../screens/TeamRegistration';
import TournamentDetail from '../screens/TournamentDetail';
import TournamentFormat from '../screens/TournamentFormat';
import TournamentsScreen from '../screens/TournamentsScreen';
import TabNavigation from './TabNavigator';
import KnockoutPhase from '../screens/KnockoutPhase';
import MatchSlot from '../components/MatchSlot';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="HomeTabs"
          component={TabNavigation}
          options={{headerShown: false}}
        />
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
        <Stack.Screen name="KnockoutPhase" component={KnockoutPhase} />
        <Stack.Screen name="MatchSlot" component={MatchSlot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
