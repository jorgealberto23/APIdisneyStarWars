import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const [registros, setRegistros] = useState([])
  useEffect(() => {
    request(setRegistros);
  }, []);


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Usando API do Star Wars</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) =>
          <Text style={styles.item}>
            <Text style={styles.desc}>{item.name}{'\n'}</Text>
            <Text style={styles.desc}>{item.model}{'\n'}</Text>
            <Text style={styles.desc}>{item.manufacturer}</Text>
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 50,
    fontSize: 30,
  },
  item: {
    fontSize: 18,
    backgroundColor: "#00FFFF",
    padding: 10,
    margin: 8,
    borderRadius: 15
  }
});
