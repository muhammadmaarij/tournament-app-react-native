import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon style={styles.iconStyle} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        // onEndEditing={() => onTermSubmit()}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
    // alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: 'grey',
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
