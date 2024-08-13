import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, ImageBackground } from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

const image = {uri: 'https://e1.pxfuel.com/desktop-wallpaper/754/27/desktop-wallpaper-1280x2120-death-star-planet-star-wars-iphone-backgrounds-and-death-star-iphone.jpg'};

export default function App() {
  const [registros, setRegistros] = useState([])
  useEffect(() => {
    request(setRegistros);
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
      <Text style={styles.text}>Inside</Text>


      <Text style={styles.title}>Usando API do Star Wars</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) =>
          <Text style={styles.item}>
            <Text style={styles.desc}>Nome: {item.name}{'\n'}</Text>
            <Text style={styles.desc}>Modelo: {item.model}{'\n'}</Text>
            <Text style={styles.desc}>fabricante: {item.manufacturer}</Text>
          </Text>
        }
      />
        </ImageBackground>
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
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 50,
    fontSize: 30,
    color: 'white'
  },
  item: {
    fontSize: 18,
    backgroundColor: "#00FFFF",
    padding: 10,
    margin: 8,
    borderRadius: 15
  }
});
