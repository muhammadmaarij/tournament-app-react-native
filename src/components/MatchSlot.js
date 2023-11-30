import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatchSlot = ({match, team1, team2, type}) => {
  // A helper function to render the team slot
  const renderTeamSlot = (team, isTeam1) => {
    return (
      <View style={styles.team}>
        <Text style={isTeam1 ? styles.teamText : styles.emptySlotText}>
          {team || 'Empty Slot'}
        </Text>
        {team && (
          <TouchableOpacity>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.slot}>
        <Text style={styles.slotText}>{match}</Text>
        <TouchableOpacity>
          <Icon name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {renderTeamSlot(team1, true)}
      {renderTeamSlot(team2, false)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6F52',
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // Set width as per your layout
    alignSelf: 'center',
    margin: 10, // Add space between the items
  },
  slot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
    width: '100%',
    marginTop: 8,
  },
  slotText: {
    color: 'white',
    fontSize: 18,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '100%',
  },
  teamText: {
    color: 'white',
    fontSize: 18,
  },
  emptySlotText: {
    color: 'red',
    fontSize: 18,
  },
});

export default MatchSlot;
