import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Info from './Info';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
    return(
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
            tabBarActiveTintColor: '#673ab7',
            tabBarInactiveTintColor: '#555',
            headerStyle:{
              backgroundColor: '#673ab7',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
              title: 'Início',
              tabBarLabel: 'Início',
          }}
          />
          <Tab.Screen
              name="Info"
              component={Info}
              options={{
              title: 'Informações',
              tabBarLabel: 'Informações',
          }}
        />
          </Tab.Navigator>
        </NavigationContainer>

export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Catálogo de Filmes
            </Text>
            <Text style={styles.texto}>
                Veja alguns filmes disponíveis em nosso catálogo.
            </Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Lista')}
            >
                <Text style={styles.textoBotao}>
                    Ver Filmes
                </Text>
            </TouchableOpacity>
        </View>
    )
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