import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react/cjs/react.development';
import axios from 'axios';

const ImageScreen = () => {
  const route = useRoute();
  const [image, setImage] = useState('');
  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${route.params.id}`,
        );
        setImage(images.data);
      } catch (error) {
        alert('error');
      }
    };
    getImages();
  }, []);
  return (
    <View>
      <Image style={styles.img} source={{uri: image.url}} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  img: {
    width: 500,
    height: 500,
  },
});
