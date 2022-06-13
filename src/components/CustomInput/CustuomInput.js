import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustuomInput = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="email" />
    </View>
  );
};

export default CustuomInput;

const styles = StyleSheet.create({
  input: {
    opacity: 1,
    height: '30%',
    width: '70%',
    fontSize: 40,
  },
});
