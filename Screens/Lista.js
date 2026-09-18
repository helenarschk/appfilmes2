import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking, Button } from 'react-native';

const filmes = [
  {
    id: 1,
    nome: 'O Fabuloso Destino de Amélie Poulain',
    ano: 2001,
    genero: 'Romance',
    imagem: require('../assets/amelie.jpg'),
    link: 'https://letterboxd.com/film/amelie/',
    sinopse: 'O filme conta a história de Amélie, uma jovem garçonete que vê beleza em tudo e decide mudar a vida das pessoas ao seu redor para melhor, enquanto lida com sua própria solidão.',
  },
  {
    id: 2,
    nome: 'Before Sunrise',
    ano: 1995,
    genero: 'Romance',
    imagem: require('../assets/beforesunrise.jpeg'),
    link: 'https://letterboxd.com/film/before-sunrise/',
    sinopse: 'Dois estrangeiros se conhecem em um trem e decidem passar a noite juntos em Viena, compartilhando suas histórias e reflexões sobre a vida.',
  },
  {
    id: 3,
    nome: 'Twin Peaks: Fire Walk with Me',
    ano: 1992,
    genero: 'Terror psicológico/Suspense',
    imagem: require('../assets/twinpeaks.png'),
    link: 'https://letterboxd.com/film/twin-peaks-fire-walk-with-me/',
    sinopse: 'O longa funciona como uma prequela da série de TV Twin Peaks, mostrando a investigação do assassinato de Teresa Banks e os sete dias finais da vida de Laura Palmer.',
  },
  {
    id: 4,
    nome: 'Alice no País das Maravilhas',
    ano: 1951,
    genero: 'Animação/Fantasia',
    imagem: require('../assets/alice.jpg'),
    link: 'https://letterboxd.com/film/alice-in-wonderland-1951/',
    sinopse: 'A história de Alice e sua jornada através do País das Maravilhas, onde encontra personagens excêntricos e situações impossíveis.',
  },
  {
    id: 5,
    nome: 'O Homem que Copiava',
    ano: 2003,
    genero: 'Comédia/Drama',
    imagem: require('../assets/homemquecopiava.jpg'),
    link: 'https://letterboxd.com/film/the-man-who-copied/',
    sinopse: 'O filme segue a vida de André, um jovem que trabalha em uma copiadora e se envolve em uma série de eventos que o levam a cometer pequenos crimes para conquistar a mulher que ama.',
  },
  {
    id: 6,
    nome: 'Monty Python em Busca do Cálice Sagrado',
    ano: 1975,
    genero: 'Comédia',
    imagem: require('../assets/montypython.jpg'),
    link: 'https://letterboxd.com/film/monty-python-and-the-holy-grail/',
    sinopse: 'O filme acompanha o Rei Arthur em 932 d.C.. Junto com seus cavaleiros, ele parte em uma jornada surreal atrás do Santo Graal, enfrentando desafios absurdos e inimigos patéticos pelo caminho.',
  },
];

const falar = () => {
  Alert.alert('Texto em voz', 'Função de leitura em desenvolvimento.');
};

export default function Lista({ navigation }) {
  const criaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      onPress={() => navigation.navigate('Detalhes', { filme: item })}
    >
      <Image source={item.imagem} style={styles.listaImagem} />

      <View style={styles.listaDetalhes}>
        <Text style={styles.textoForte}>Cód: <Text style={styles.textoNormal}>{item.id}</Text></Text>
        <Text style={styles.textoForte}>Nome: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
        <Text style={styles.textoForte}>Ano: <Text style={styles.textoNormal}>{item.ano}</Text></Text>
        <Text style={styles.textoForte}>Gênero: <Text style={styles.textoNormal}>{item.genero}</Text></Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listaContainer}>
      <FlatList
        data={filmes}
        renderItem={criaItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.conteudoFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  conteudoFlatList: {
    paddingHorizontal: 15,
    alignItems: 'center',
    flexGrow: 0,
  },

  listaItem: {
    backgroundColor: '#e7dcf1',
    marginRight: 15,
    padding: 15,
    borderRadius: 15,
    width: 240,
    height: 360,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 3,
  },

  listaImagem: {
    width: 150,
    height: 220,
    borderRadius: 8,
    marginBottom: 15,
  },

  listaDetalhes: {
    width: '100%',
    alignItems: 'flex-start',
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