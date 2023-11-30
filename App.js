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

const App = () => {
  return <EditMatchScreen />;
};

export default App;
