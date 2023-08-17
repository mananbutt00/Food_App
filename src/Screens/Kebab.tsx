import React from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import ItemScreen from './TopTabNavigation/ItemScreen';
import NewItemScreen from './TopTabNavigation/NewItemScreen';
import Recomended from './TopTabNavigation/Recomended';
import Special from './TopTabNavigation/Special';
import Pizzaallitem from './TopTabNavigation/PizzaScreen/Pizzaallitem';
import Kebaballitem from './TopTabNavigation/KebabScreen/Kebaballitem';

function Kebab() {
    return (


 
    <Tab.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: 10 },
      tabBarItemStyle: { width: 100 },
    
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'black'
     
    }}
    tabBarOptions={{
      indicatorStyle: {
        backgroundColor: 'red', 
        height: 1, 
      },
    }}>
      <Tab.Screen name="All Items" component={Kebaballitem} />
      <Tab.Screen name="New Item" component={NewItemScreen} />
      <Tab.Screen name="Recomended" component={Recomended} />
      <Tab.Screen name="Special" component={Special} />
    </Tab.Navigator>





    );
}


const styles = StyleSheet.create({

    

});
export default Kebab;