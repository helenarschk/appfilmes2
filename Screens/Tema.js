import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tema do App
      </Text>
      <Text style={styles.texto}>
       Este app busca disseminar o cinema, permitindo que os usuários possam explorar uma ampla seleção de filmes, bem como visualizar detalhes e informações sobre cada um deles.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home', { screen: 'Lista' })}
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