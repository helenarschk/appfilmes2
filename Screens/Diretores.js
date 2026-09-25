import { FlatList, StyleSheet, Text, View } from 'react-native'

const diretores = [
    { 
        id: '1',
        nome: 'David Lynch',
        filmes: 'Twin Peaks, Veludo Azul, Cidade dos Sonhos'
    },
    {
        id: '2',
        nome: 'Wes Anderson',
        filmes: 'O Grande Hotel Budapeste, Moonrise Kingdom, Os Excêntricos Tenenbaums'
    },
    {
        id: '3',
        nome: 'Wong Kar Wai',
        filmes: 'Amor à Flor da Pele, 2046, Amores Expressos'
    },
    {
        id: '4',
        nome: 'Jorge Furtado',
        filmes: 'Ilha das Flores, O Homem que Copiava, Saneamento Básico'
    },
    {
        id: '5',
        nome: 'Agnes Varda',
        filmes: 'Cléo das 5 às 7, As Praias de Agnès, Varda por Agnès'
    }
]

export default function Diretores() {
  const criaItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.nome}>
        <Text style={styles.textoForte}>Cód: <Text style={styles.textoNormal}>{item.id}</Text></Text>
        <Text style={styles.textoForte}>Nome: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
        <Text style={styles.textoForte}>Filmes: <Text style={styles.textoNormal}>{item.filmes}</Text></Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Diretores</Text>
      <Text style={styles.subtitulo}>Alguns dos meus diretores favoritos :)</Text>
      <FlatList
        data={diretores}
        renderItem={criaItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3ebfb',
  },

  titulo: {
    color: '#1f0d31',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitulo: {
    color: '#381e52',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#f9f5ff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d8c8eb',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  textoForte: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1f0d31',
    marginBottom: 2,
  },

  textoNormal: {
    fontWeight: 'normal',
    color: '#381e52',
  },
});