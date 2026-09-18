import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function Detalhes({ route, navigation }) {
  const { filme } = route.params;

  const lerDetalhes = () => { 

    const texto = `
    ${filme.nome}.
    Ano: ${filme.ano}.
    Gênero: ${filme.genero}.
    Sinopse: ${filme.sinopse}.
  `;

    Speech.speak(texto, {
      language: 'pt-BR',
      pitch: 0.9,
      rate: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={filme.imagem} style={styles.imagem} />

      <Text style={styles.titulo}>{filme.nome}</Text>
      <Text style={styles.informacao}>Ano: {filme.ano}</Text>
      <Text style={styles.informacao}>Gênero: {filme.genero}</Text>
      <Text style={styles.sinopse}>{filme.sinopse}</Text>

      <TouchableOpacity 
        style={styles.areaBotao} 
        onPress={lerDetalhes}>

        <Text style={styles.textoBotao}>
          Ler Detalhes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.areaBotao}
        onPress={() => Speech.stop()}
      >
        <Text style={styles.textoBotao}>
          Parar Leitura
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(filme.link)}>
        <Text style={styles.textoBotao}>Ver no Letterboxd</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {

    flex: 1,

    alignItems: 'center',

    padding: 25,

    backgroundColor: '#e7dcf1'

  },


  imagem: {

    width: 200,

    height: 300,

    borderRadius: 10,

    marginBottom: 20

  },


  titulo: {

    color: '#1f0d31',

    fontSize: 26,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10

  },


  informacao: {

    color: '#381e52',

    fontSize: 17,

    marginBottom: 5

  },


  sinopse: {

    color: '#381e52',

    fontSize: 16,

    textAlign: 'justify',

    marginTop: 15,

    marginBottom: 25

  },


  botao: {

    backgroundColor: '#a88ec0',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

    marginBottom: 10

  },


  botaoVoltar: {

    backgroundColor: '#a88ec0',

    width: '100%',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center'

  },


  textoBotao: {

    color: '#381e52',

    fontWeight: 'bold',

    fontSize: 16

  },

  areaBotao: {
    backgroundColor: '#ad98dc',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4c0d80',
    marginBottom: 15,
  },

});