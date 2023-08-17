//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Drawer = createDrawerNavigator();
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './Settings';
import PaymentMethod from './PaymentMethod';
const DrawerNavigation = () => {
    return (
         <Drawer.Navigator>
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="PaymentMethod" component={PaymentMethod} />
          </Drawer.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default DrawerNavigation;
