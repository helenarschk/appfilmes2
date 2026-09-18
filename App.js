import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import Lista from './Screens/Lista';
import Detalhes from './Screens/Detalhes';
import Diretores from './Screens/Diretores';  
import Info from './Screens/Info';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#afa0bd',
        },
        headerTintColor: '#877597',
        drawerActiveTintColor: '#6e5286',
        drawerInactiveTintColor: '#877597',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ 
          title: 'Início',
          drawerLabel: 'Início' 
        }}
      />
      <Drawer.Screen
        name="Lista"
        component={Lista}
        options={{ 
          title: 'Lista',
          drawerLabel: 'Lista'
        }}
      />
      <Drawer.Screen
        name="Detalhes"
        component={Detalhes}
        options={{ 
          title: 'Detalhes',
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />
      <Drawer.Screen
        name="Diretores"
        component={Diretores}
        options={{ 
          title: 'Diretores',
          drawerLabel: 'Diretores' 
        }}
      />
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{ 
          title: 'Informações',
          drawerLabel: 'Informações' 
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
)}