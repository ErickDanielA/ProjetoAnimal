import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading  from 'expo-app-loading';
import {useFonts, Lato_400Regular, Allan_700Bold, Ubuntu_700Bold} from '@expo-google-fonts/dev';

export default function App() {

  let [fontsLoaded] =useFonts({
    Lato_400Regular, Allan_700Bold, Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  else{ 
    return(
    <View style={style.container}>
      <Text style={style.titulo}> Ficha de animais </Text>

      <FlatList data={arrayAnimais} renderItem={({item})=> 
          <View style={style.container}>
          

          <Image style= {style.img}source={item.foto}/>
          <Text style={style.fala}>
              <Text style={style.subTitulo}>Nome:</Text> {item.nome}{'\n'}                  
              <Text style={style.subTitulo}>Classe: </Text> {item.classe}{'\n'}
              <Text style={style.subTitulo}>Espécie: </Text> {item.especie} {'\n'}
              <Text style={style.subTitulo}>Expectativa de vida: </Text> {item.vida}{'\n'}
              </Text>
          </View>
      }/>
    </View>
  );
}
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5D6875',
    padding: 8,
    alignItems:'center'
  },

  titulo:{
    fontSize: 35,
    color: 'yellow',
    fontFamily: 'Allan_700Bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign:'center',
    fontWeight: 'bold'
    },

  img:{
    borderRadius: 10,
    width: 200,
    height: 200,
    marginTop: 15
  },

  subTitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Ubuntu_700Bold'
  },

  fala:{
    fontSize: 16,
    color: 'white',
    fontFamily: 'Lato_400Regular',
  }
});


const arrayAnimais = [
  {nome:'Gato', classe:'Mamífero',especie:'Felino', vida: '18 anos', foto:require('./assets/gato.jpg')},
  {nome:'Golfinho', classe:'Mamífero',especie:'Cetacea', vida: '50 anos', foto:require('./assets/golfinho.jpg')},
  {nome:'Largatixa', classe:'Réptil',especie:'Hemidactylus mabouia', vida: '15 anos', foto:require('./assets/larga.jpg')},
  {nome:'Pardal', classe:'Ave',especie:'Passer domesticus', vida: '3 anos', foto:require('./assets/pardal.jpg')},
  {nome:'Raposa', classe:'Mamífero',especie:'Vulpes vulpes', vida: '4 anos', foto: require('./assets/raposa.jpg')},
  {nome:'Sapo', classe:'Réptil',especie:'Anura', vida: '12 anos', foto: require('./assets/sapo.jpg')}
]
