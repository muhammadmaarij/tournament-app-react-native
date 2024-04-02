// App.js
import React from 'react';
import HomeScreen from './src/screens/HomeScreen'; // import your screen component
import TabNavigation from './src/navigation/TabNavigator';
import TournamentsScreen from './src/screens/TournamentsScreen';
import NewTournament from './src/screens/NewTournament';
import PlayerRegistration from './src/screens/PlayerRegistration';
import TeamRegistration from './src/screens/TeamRegistration';
import TotalTeamsC from './src/components/TotalTeamsC';
import TournamentFormat from './src/screens/TournamentFormat';
import MatchSlot from './src/components/MatchSlot';
import EditMatchScreen from './src/screens/EditMatchScreen';
import CustomDatePicker from './src/components/CustomDatePicker';
import ResultsScreen from './src/screens/ResultsScreen';
import MatchResultSubmissionScreen from './src/screens/MatchResultsSubmissionScreen';
import TournamentDetail from './src/screens/TournamentDetail';
import StackNavigator from './src/navigation/StackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import KnockoutPhase from './src/screens/KnockoutPhase';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNavigator />
    </GestureHandlerRootView>
    // <SignUpScreen />
    // <KnockoutPhase />
  );
};

export default App;
