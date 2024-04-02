import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatchSlot = ({
  match,
  team1,
  team2,
  type,
  isSpectator,
  onPress,
  onPress2,
}) => {
  const renderTeamSlot = (team, isTeam1) => {
    return (
      <View style={styles.team}>
        <Text style={team != '' ? styles.teamText : styles.emptySlotText}>
          {team || 'Empty Slot'}
        </Text>
        {team && <TouchableOpacity></TouchableOpacity>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.slot}>
        <Text style={styles.slotText}>{match}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {renderTeamSlot(team1, true)}
      {renderTeamSlot(team2, false)}
      {isSpectator && (
        <TouchableOpacity style={styles.resultButton} onPress={onPress2}>
          <Text style={styles.resultButtonText}>Submit Result</Text>
          <Icon name="trophy" size={24} color="white" />
        </TouchableOpacity>
      )}
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
  resultButton: {
    backgroundColor: '#4F6F52',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%', // Match the width with other elements
  },
  resultButtonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 5, // Add space between text and icon
  },
});

export default MatchSlot;
