import React from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FavouriteScreen from '../Screens/FavouriteScreen';
import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';

function BottomTab() {
    const Tab = createBottomTabNavigator();
    return (

<NavigationContainer>
      <Tab.Navigator>

      <Tab.Screen name="LandingScreen" component={LandingScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image

              source={require('../Images/home.png')}
            />
          ),
        }} />
        <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image

              source={require('../Images/like.png')}
            />
          ),
        }} />
        <Tab.Screen name="CartScreen" component={CartScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image

              source={require('../Images/CartIcon.png')}
            />
          ),
        }} />
        <Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image

              source={require('../Images/notificatIcon.png')}
            />
          ),
        }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image

              source={require('../Images/profilecircle.png')}
            />
          ),
        }} />
      </Tab.Navigator>
      </NavigationContainer>


    );
}


const styles = StyleSheet.create({
  
    

});
export default BottomTab;