import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Results from '../assets/svgs/Results.svg';
import Gamerxpo from '../assets/svgs/Gamerxpo.svg';
import Tournament from '../assets/svgs/Tournament.svg';
import Home from '../assets/svgs/Home.svg';
import TournamentsScreen from '../screens/TournamentsScreen';
import ResultsScreen from '../screens/ResultsScreen';
import FavouriteTournamentsScreen from '../screens/FavouriteTournamentsScreen';
import TournamentResultsScreen from '../screens/TournamentResultsScreen';
import MainStyles from '../styles/MainStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="black"
      activeColor="#4F6F52"
      barStyle={{
        backgroundColor: 'white',
        height: height * 0.1,
        width: width,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4F6F52',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 5,
          height: 60,
          shadowOpacity: 0, // Remove shadow on iOS
          elevation: 0, // Remove elevation shadow on Android
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10.5,
          fontFamily: MainStyles.mediumText.fontFamily,
        },
        tabBarIconStyle: {
          flex: 1,
        },
        // tabBarShowLabel: false,
      })}
      labeled={false}>
      <Tab.Screen
        name="Tournaments"
        component={TournamentsScreen}
        options={{
          tabBarIcon: () => (
            <Tournament width={width * 0.06} height={width * 0.06} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavouriteTournamentsScreen}
        options={{
          tabBarIcon: () => <Icon name="heart-o" size={28} color="black" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: '#4F6F52',
                height: width * 0.12,
                width: width * 0.12,
                borderRadius: width,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
              }}>
              <Icon name="home" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={TournamentResultsScreen}
        options={{
          tabBarIcon: () => (
            <Results width={width * 0.06} height={width * 0.06} />
          ),
        }}
      />
      <Tab.Screen
        name="GamerXpo"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Gamerxpo width={width * 0.07} height={width * 0.07} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
