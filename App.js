// App.js
import React from 'react';
import HomeScreen from './src/screens/HomeScreen'; // import your screen component
import TabNavigation from './src/navigation/TabNavigator';
import TournamentsScreen from './src/screens/TournamentsScreen';
import NewTournament from './src/screens/NewTournament';
import PlayerRegistration from './src/screens/PlayerRegistration';
import TeamRegistration from './src/screens/TeamRegistration';

const App = () => {
  return <TeamRegistration />;
};

export default App;
