import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TotalTeamsC = ({onChange}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    {label: '2', value: '2'},
    {label: '4', value: '4'},
    {label: '8', value: '8'},
    {label: '16', value: '16'},
  ]);

  const handleValueChange = selectedValue => {
    setValue(selectedValue); // Update the local state
    if (onChange) {
      onChange(selectedValue); // Notify the parent component
    }
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={setItems}
        zIndex={1000} // Ensure dropdown is on top of other components
        zIndexInverse={1000}
        placeholder="Select total no. of teams"
        style={styles.picker}
        dropDownContainerStyle={styles.dropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  picker: {
    borderWidth: 0,
    borderColor: '#777',
    borderRadius: 6,
    width: width * 0.7,
    alignSelf: 'center',
  },
  dropdown: {
    borderWidth: 0,
    borderColor: '#777',
    borderRadius: 6,
    width: width * 0.7,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default TotalTeamsC;
