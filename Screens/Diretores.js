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
            <Text style={styles.nome}>
                {item.nome}
            </Text>
            <Text style={styles.filme}>
                {item.filmes}
            </Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Diretores
            </Text>
            <Text style={styles.subtitulo}>
                alguns dos meus diretores favoritos c:
            </Text>
            <FlatList
                data={diretores}
                renderItem={criaItem}
                keyExtractor={item => item.id.toString()}
                showsverticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        padding: 20,

        backgroundColor: '#f5f5f5'

    },


    titulo: {

        fontSize: 28,

        fontWeight: 'bold',

        textAlign: 'center',

        marginBottom: 5

    },


    subtitulo: {

        fontSize: 16,

        textAlign: 'center',

        color: '#555',

        marginBottom: 20

    },


    item: {

        backgroundColor: '#d8e4ed',

        padding: 20,

        marginBottom: 12,

        borderRadius: 10,

        elevation: 2

    },


    nome: {

        fontSize: 19,

        fontWeight: 'bold',

        marginBottom: 5

    },


    filme: {

        fontSize: 15,

        color: '#444'

    }

});