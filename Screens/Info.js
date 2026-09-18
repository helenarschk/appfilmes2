import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Apresentação da Disciplina e Perfil do Aluno
      </Text>

      <Image
        source={require('../assets/helena.jpeg')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        {'Helena Reischak Pereira\n20241BG.INF_I0014'}
      </Text>

      <Text style={styles.texto}>
        A disciplina de Desenvolvimento de Dispositivos Móveis tem como objetivo capacitar os alunos a projetar,
        desenvolver e implementar aplicativos móveis para diferentes plataformas, utilizando as melhores práticas de
        desenvolvimento e as tecnologias mais recentes. O aluno aprenderá a criar interfaces de usuário intuitivas,
        gerenciar dados e integrar serviços externos, além de compreender os desafios e oportunidades do
        desenvolvimento móvel.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.textoBotao}>Ver Filmes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#e7dcf1'

  },


  titulo: {

    color: '#1f0d31',
    
    fontSize: 30,

    fontWeight: 'bold',

    marginBottom: 15

  },


  texto: {

    color: '#381e52',

    fontSize: 16,

    textAlign: 'center',

    marginBottom: 30

  },

  imagem: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },


  botao: {

    backgroundColor: '#a88ec0',

    paddingHorizontal: 30,

    paddingVertical: 15,

    borderRadius: 10

  },


  textoBotao: {

    color: '#381e52',

    fontSize: 18,

    fontWeight: 'bold'

  }

});