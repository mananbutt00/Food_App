import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  LogBox,
  Image,
  Dimensions
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from '../LandingScreen';
import NotificationScreen from '../NotificationScreen';
import CartScreen from '../CartScreen';
import ProfileScreen from '../ProfileScreen';
import FavouriteScreen from '../FavouriteScreen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get("window")
export default function BottomTab() {
  const navigation: any = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Favourite':
        icon = 'heart'
        break;
        case 'Notification':
        icon = 'bell-o';
        break;
        case 'Profile':
        icon = 'user-o';
        break;
       
    }

    return (
      <Icon
        name={icon}
        size={30}
        color={routeName === selectedTab ? 'red' : 'gray'}
      />
   
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{
      width,
      height,
      marginVertical:30
  }}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={50}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
      
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true, }}
       
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CartScreen")}
            >
            <Image
          source={require('../../Images/CartIcon.png')}
          style={{height:60,width:60,top:10}}
            />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          component={LandingScreen}
          options={{ headerShown: false }} 
        
        />
        <CurvedBottomBarExpo.Screen
          name="Favourite"
          component={FavouriteScreen}
          position="LEFT"
          options={{ headerShown: false }} 
        />
        <CurvedBottomBarExpo.Screen
          name="Notification"
          component={NotificationScreen}
          position="RIGHT"
          options={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name="Profile"
          component={ProfileScreen}
          position="RIGHT"
          options={{ headerShown: false ,tabBarHideOnKeyboard: true,  keyboardHidesTabBar: true,}} 
          
        />
      
      </CurvedBottomBarExpo.Navigator>
   </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 10,
    height: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    bottom: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
