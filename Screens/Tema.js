import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Tema({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tema do App</Text>

      <Text style={styles.texto}>
        Este app busca disseminar o cinema, permitindo que os usuários possam explorar uma ampla seleção de filmes,
        bem como visualizar detalhes e informações sobre cada um deles.
      </Text>

      <View style={styles.areaBotoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home', { screen: 'Lista' })}
        >
          <Text style={styles.textoBotao}>Ver Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home', { screen: 'Diretores' })}
        >
          <Text style={styles.textoBotao}>Ver Diretores</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 16,
    textAlign: 'center',
  },

  texto: {
    color: '#381e52',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 24,
  },

  areaBotoes: {
    width: '100%',
    gap: 12,
  },

  botao: {
    backgroundColor: '#a88ec0',
    paddingHorizontal: 28,
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