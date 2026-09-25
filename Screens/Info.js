import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Info({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Apresentação da Disciplina</Text>

      <Image source={require('../assets/helena.jpeg')} style={styles.imagem} />

      <Text style={styles.texto}>{'Helena Reischak Pereira\n20241BG.INF_I0014'}</Text>

      <Text style={styles.textoResumo}>
        A disciplina de Desenvolvimento de Dispositivos Móveis aborda projeto,
        desenvolvimento e implementação de apps.
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#f3ebfb',
  },

  titulo: {
    color: '#1f0d31',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  texto: {
    color: '#381e52',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },

  textoResumo: {
    color: '#381e52',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 21,
    paddingHorizontal: 6,
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#c7afd9',
  },

  areaBotoes: {
    width: '100%',
    gap: 10,
  },

  botao: {
    backgroundColor: '#a88ec0',
    paddingHorizontal: 28,
    paddingVertical: 13,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});