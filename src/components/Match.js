import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import {shadow} from 'react-native-paper';
import Team from '../assets/svgs/Team.svg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Match = ({match, time, team1, team2}) => (
  <View
    style={{
      height: 160,
      backgroundColor: 'white',
      borderRadius: 20,
      marginVertical: 20,
      width: screenWidth * 0.4,
      marginLeft: 20,
    }}>
    <View style={styles.container}>
      <Text
        style={[
          styles.name,
          {color: 'white', marginLeft: 15, fontSize: 18, fontWeight: '500'},
        ]}>
        {match}
      </Text>
    </View>
    <View style={{flexDirection: 'row', margin: 10}}>
      <View>
        <Text style={styles.name}>{team1}</Text>
        <Team width={screenWidth * 0.1} height={screenWidth * 0.1} />
      </View>
      <Text style={{margin: 15}}>VS</Text>
      <View>
        <Text style={styles.name}>{team2}</Text>
        <Team width={screenWidth * 0.1} height={screenWidth * 0.1} />
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.caption}>{time}</Text>
      <View
        style={{
          height: 25,
          width: 50,
          backgroundColor: 'black',
          marginRight: 5,
          borderRadius: 13,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Live</Text>
      </View>
    </View>
    {/* <View style={{flexDirection: 'row', margin: 10}}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.caption}>Winning: {winning}</Text>
      <Text style={styles.caption}>{slots}</Text>
    </View> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6F52',
    justifyContent: 'center',
    width: screenWidth * 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'center',
    marginLeft: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
  caption: {
    marginHorizontal: 10,
    marginBottom: 5,
    maxWidth: screenWidth * 0.7,
    color: 'black',
  },
});

export default Match;
