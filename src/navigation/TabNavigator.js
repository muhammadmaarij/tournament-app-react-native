import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Results from '../assets/svgs/Results.svg';
import Gamerxpo from '../assets/svgs/Gamerxpo.svg';
import Tournament from '../assets/svgs/Tournament.svg';
import Home from '../assets/svgs/Home.svg';
// import GroupScreen from '../screens/GroupScreen';
// import NotificationScreen from '../screens/NotificationScreen';
// import PostScreen from '../screens/PostScreen';
// import MenuScreen from '../screens/MenuScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="black"
        activeColor="#4F6F52"
        barStyle={{
          backgroundColor: 'white',
          height: height * 0.1,
          width: width,
        }}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Tournament width={width * 0.06} height={width * 0.06} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Fav"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="heart-o" size={28} color="black" />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Post"
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
                  marginBottom: 50,
                }}>
                <Icon name="home" size={24} color="white" />
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Results width={width * 0.06} height={width * 0.06} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Gamerxpo width={width * 0.06} height={width * 0.06} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
