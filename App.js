import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './Screens/Home';
import Lista from './Screens/Lista';
import Diretores from './Screens/Diretores';
import Detalhes from './Screens/Detalhes';
import Info from './Screens/Info';
import Tema from './Screens/Tema';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#673ab7' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#541db3',
        drawerInactiveTintColor: '#150335',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          drawerLabel: 'Início',
        }}
      />
      <Drawer.Screen
        name="Lista"
        component={Lista}
        options={{
          title: 'Filmes',
          drawerLabel: 'Filmes',
        }}
      />
      <Drawer.Screen
        name="Diretores"
        component={Diretores}
        options={{
          title: 'Diretores',
          drawerLabel: 'Diretores',
        }}
      />
      <Drawer.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: 'Detalhes do Filme',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home-outline',
              Info: 'information-circle-outline',
              Tema: 'color-palette-outline',
            };

            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#381e52',
          tabBarInactiveTintColor: '#a88ec0',
        })}
      >
        <Tab.Screen name="Home" component={HomeDrawer} />
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Tema" component={Tema} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}