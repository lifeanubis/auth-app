import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react/cjs/react.development';
import axios from 'axios';
const Details = ({navigation}) => {
  const [album, setAlbum] = useState();

  const route = useRoute();
  useEffect(() => {
    const getAlbum = async () => {
      try {
        const albums = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${route.params.item}`,
        );

        setAlbum(albums.data);
      } catch (error) {
        alert('error');
      }
    };
    getAlbum();
  }, []);

  return (
    <View style={styles.container}>
      {album ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ImageScreen', {
              id: album.userId,
            })
          }>
          <Text style={styles.text}> {album.title}</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size={40} color="white" />
      )}
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: ' 100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#2a9271',
  },
  text: {
    padding: 10,
    margin: 40,
    backgroundColor: '#5c95bd',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});
