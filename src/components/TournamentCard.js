import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import {shadow} from 'react-native-paper';
import {SERVER_URL} from '../utils/constants';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function TournamentCard({
  name,
  startDate,
  winning,
  uri,
  slots,
  endDate,
}) {
  const [imageHeight, setImageHeight] = useState(0);
  console.log(uri);

  const handleImageLoad = event => {
    const {height, width} = event.nativeEvent.source;
    const aspectRatio = width / height;
    const calculatedHeight = (screenWidth * 0.8) / aspectRatio;
    setImageHeight(calculatedHeight);
  };

  return (
    <View
      style={{
        height: screenHeight * 0.2 + 100,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 20,
        width: screenWidth * 0.65,
        marginLeft: 20,
      }}>
      <View style={[styles.container, {height: screenHeight * 0.2}]}>
        <Image
          source={
            uri
              ? {
                  uri: `${SERVER_URL}/${uri}`, // Pass the image URL as the uri prop
                }
              : require('../assets/images/tekken.png')
          }
          style={[
            styles.image,
            {height: screenHeight * 0.2, width: screenWidth * 0.65},
          ]}
          onLoad={handleImageLoad}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>
            {startDate}---{endDate}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.caption}>Winning: {winning}</Text>
        <Text style={styles.caption}>Slots: {slots}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.6,
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'center',
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
  caption: {
    marginHorizontal: 15,
    marginBottom: 5,
    maxWidth: screenWidth * 0.7,
    color: 'black',
  },
});
