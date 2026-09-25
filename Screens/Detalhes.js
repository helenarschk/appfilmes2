import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={filme.imagem} style={styles.imagem} />

        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.informacao}>Ano: {filme.ano}</Text>
        <Text style={styles.informacao}>Gênero: {filme.genero}</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>

        <TouchableOpacity style={styles.botao} onPress={lerDetalhes}>
          <Text style={styles.textoBotao}>Ler Detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => Speech.stop()}>
          <Text style={styles.textoBotao}>Parar Leitura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(filme.link)}>
          <Text style={styles.textoBotao}>Ver no Letterboxd</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Lista')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#f3ebfb',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f3ebfb',
  },

  imagem: {
    width: 200,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d7c3eb',
  },

  titulo: {
    color: '#1f0d31',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  informacao: {
    color: '#381e52',
    fontSize: 17,
    marginBottom: 5,
  },

  sinopse: {
    color: '#381e52',
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 15,
    marginBottom: 25,
    lineHeight: 24,
  },

  botao: {
    backgroundColor: '#a88ec0',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  textoBotao: {
    color: '#1f0d31',
    fontWeight: 'bold',
    fontSize: 16,
  },
});