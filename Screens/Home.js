import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Filmes</Text>
      <Text style={styles.texto}>
        Veja alguns filmes disponíveis em nosso catálogo.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.textoBotao}>Ver Filmes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => navigation.navigate('Diretores')}
      >
        <Text style={styles.textoBotao}>Ver Diretores</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f3ebfb',
  },

  titulo: {
    color: '#1f0d31',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  texto: {
    color: '#381e52',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 24,
  },

  botao: {
    backgroundColor: '#a88ec0',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  textoBotao: {
    color: '#1f0d31',
    fontSize: 17,
    fontWeight: 'bold',
  },
});