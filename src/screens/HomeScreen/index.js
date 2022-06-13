import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import axios from 'axios';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

        setData(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  item: item.id,
                  data: data,
                })
              }>
              <Text style={styles.list}>{item.username}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a9271',
    width: 400,
  },
  list: {
    padding: 10,
    margin: 40,
    backgroundColor: '#5c95bd',
    color: 'white',
    fontSize: 24,
  },
});
