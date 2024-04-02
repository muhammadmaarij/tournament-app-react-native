import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomDatePicker = ({name, date, onChange}) => {
  const [date1, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeProp = (event, selectedDate) => {
    const currentDate = selectedDate || date; // fallback to the current date if selectedDate is undefined
    setShow(Platform.OS === 'ios');
    setDate(currentDate); // Use currentDate here, not onChange
    onChange(currentDate); // Call the onChange prop with the new date
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
        <Icon name="calendar" size={24} color="white" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeProp}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.15,
    width: width * 0.7,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#567189',
    marginBottom: 5,
  },
  datePicker: {
    height: 45,
    backgroundColor: '#4F6F52',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    opacity: 0.5,
  },
  dateText: {
    color: 'white',
  },
});

export default CustomDatePicker;
