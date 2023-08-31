
import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './src/Screens/LandingScreen';
import { View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView, Button, ImageBackground } from 'react-native';
import BurgerScreen from './src/Screens/BurgerScreen';
import ItemScreen from './src/Screens/TopTabNavigation/ItemScreen';
import { useFonts } from 'expo-font';
import NewItemScreen from './src/Screens/TopTabNavigation/NewItemScreen';
import Recomended from './src/Screens/TopTabNavigation/Recomended';
import Special from './src/Screens/TopTabNavigation/Special';
import Pizza from './src/Screens/Pizza';
import Pizzaallitem from './src/Screens/DrawerScreens/LogoutScreen';
import Kebab from './src/Screens/Kebab';
import Kebaballitem from './src/Screens/TopTabNavigation/KebabScreen/Kebaballitem';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './src/Screens/DrawerScreens/Settings';
import FoodFestival from './src/Screens/DrawerScreens/FoodFestival';
import Statistics from './src/Screens/DrawerScreens/Statistics';
import PaymentMethod from './src/Screens/DrawerScreens/PaymentMethod';
import Language from './src/Screens/DrawerScreens/Language';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import LogoutScreen from './src/Screens/DrawerScreens/LogoutScreen';
import { useCallback,useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import BottomTab from './src/Screens/Components/BottomTab';
import Splash from './src/Screens/Splash';
import LottieView from 'lottie-react-native';
import {

  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CartScreen from './src/Screens/CartScreen';
function CustomDrawerContent(props) {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={require("./src/Images/cross.png")}
            style={{ width: 40, height: 40, borderRadius: 35, borderWidth: 2, marginHorizontal: 170, }}
          />
        </TouchableOpacity>
        <DrawerItemList {...props} />

      </DrawerContentScrollView>
    </View>
  );
}
export default function App() {
const [isLoading,setIsLoading]=useState(false);
  const [isLoaded] = useFonts({
    "merriblack": require("./assets/fonts/Merriweather-BlackItalic.ttf"),
    "borel": require("./assets/fonts/Borel-Regular.ttf"),
    "lora": require("./assets/fonts/Lora-VariableFont_wght.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
     
    }
  }, [isLoaded]);

  if (!isLoaded) {
   
    return null;
  }

  return (
     
    <NavigationContainer >

      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}

        initialRouteName="Home"

        screenOptions={{
          drawerStyle: {
            paddingTop: 50,
            backgroundColor: 'white',
            width: 220,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,


          },
          drawerItemStyle: {
            marginVertical: 10,



          },
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'red'
        }}

      >
        <Drawer.Screen name="Home" component={MainStack} options={{
          drawerIcon: ({ }) =>
          (
            <Icon name={"home"} size={30} />
          ),
          headerShown: false
        }} />

        <Drawer.Screen name="Statistics" component={Statistics}
          options={{
            drawerIcon: ({ }) =>
            (
              <Image
                source={require('./src/Images/chart1.png')}
              />

            ), headerShown: true

          }}

        />
        <Drawer.Screen name="FoodFestival" component={FoodFestival}
          options={{
            drawerIcon: ({ }) =>
            (
              <Image
                source={require('./src/Images/crown1.png')}
              />

            ), headerShown: true

          }}

        />

        <Drawer.Screen name="PaymentMethod" component={PaymentMethod}
          options={{
            drawerIcon: ({ }) =>
            (
              <Image
                source={require('./src/Images/emptywallet.png')}
              />

            ), headerShown: true

          }}

        />

        <Drawer.Screen name="Language" component={Language}
          options={{
            drawerIcon: ({ }) =>
            (
              <Image
                source={require('./src/Images/languagesquare.png')}
              />

            ), headerShown: true

          }}

        />
        <Drawer.Screen name="Settings" component={Settings} options={{
          drawerIcon: ({ }) =>
          (
            <Image
              source={require('./src/Images/setting2.png')}
            />

          ), headerShown: true

        }} />
        <Drawer.Screen name="LogoutScreen" component={LogoutScreen} options={{
          drawerIcon: ({ }) =>
          (

            <Image
              source={require('./src/Images/logout.png')}
              style={{}}
            />


          ), headerShown: true

        }}


        />

      </Drawer.Navigator>

    </NavigationContainer>
  );


}


const MainStack = () => (
 
  <Stack.Navigator initialRouteName="BottomTab"  screenOptions={{ headerShown: false, }}   >

    <Stack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{
        headerShown: false,

        headerTitle: () => (
          <Image
            source={require('./src/Images/home.png')}
            style={{ marginLeft: 10 }}
          />
        ),
      }}

    />
    <Stack.Screen
      name="Burgers"
      component={BurgerScreen}
      options={{
        headerShown: true,
        headerRight: () => (
          <Image
            source={require('./src/Images/shoppingcart.png')}
            style={{ marginLeft: 10 }}
          />
        ),
      }}

    />
    <Stack.Screen name="All Item" component={ItemScreen} options={{ headerShown: true }} />
    <Stack.Screen name="New Item" component={NewItemScreen} options={{ headerShown: true }} />
    <Stack.Screen name="Special" component={Special} options={{ headerShown: true }} />
    <Stack.Screen name="Recomended" component={Recomended} options={{ headerShown: true }} />
    <Stack.Screen name="Pizza" component={Pizza} options={{
      headerShown: true, headerRight: () => (
        <Image
          source={require('./src/Images/shoppingcart.png')}
          style={{ marginLeft: 10 }}
        />
      ),
    }} />
    <Stack.Screen name="AllItem" component={Pizzaallitem} options={{ headerShown: true }} />
    <Stack.Screen name="All Items" component={Kebaballitem} options={{ headerShown: true }} />
    <Stack.Screen name="Kebab" component={Kebab} options={{
      headerShown: true, headerRight: () => (
        <Image
          source={require('./src/Images/shoppingcart.png')}
          style={{ marginLeft: 10 }}
        />
      ),
    }} />
    <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}


    />
    <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />

    <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

  </Stack.Navigator>
  
);
  


// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       headerShown: false,
//       tabBarActiveTintColor: 'red',
//     }}
//     initialRouteName="LandingScreen"
//   >
//     <Tab.Screen
//       name="LandingScreen"
//       component={LandingScreen}
//       options={{
//         tabBarLabel: '',
//         tabBarActiveTintColor: 'red',
//         tabBarIcon: () => (
//           <Image
//             source={require('./src/Images/home.png')}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="FavouriteScreen"
//       component={FavouriteScreen}
//       options={{
//         tabBarLabel: '',
//         tabBarActiveTintColor: 'red',
//         tabBarIcon: () => (
//           <Image
//             source={require('./src/Images/like.png')}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="CartScreen"
//       component={CartScreen}
//       options={{
//         tabBarLabel: '',
//         tabBarActiveTintColor: 'red',
//         tabBarIcon: () => (
//           <Image
//             source={require('./src/Images/CartIcon.png')}
//             style={{ height: 60, bottom: 20 }}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="NotificationScreen"
//       component={NotificationScreen}
//       options={{
//         tabBarLabel: '',
//         tabBarActiveTintColor: 'red',
//         tabBarIcon: () => (
//           <Image
//             source={require('./src/Images/notificatIcon.png')}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="ProfileScreen"
//       component={ProfileScreen}
//       options={{
//         tabBarLabel: '',
//         tabBarActiveTintColor: 'red',
//         tabBarIcon: () => (
//           <Image
//             source={require('./src/Images/profilecircle.png')}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );