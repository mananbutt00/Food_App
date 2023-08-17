
// import React, { useState } from 'react';
// import { View, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import NewItemScreen from './TopTabNavigation/NewItemScreen';
// import Recomended from './TopTabNavigation/Recomended';
// import Special from './TopTabNavigation/Special';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Tab = createMaterialTopTabNavigator();

// function BurgerScreen({ route }) {
//   const { item } = route.params;
//   const [isPressed, setIsPressed] = useState(true);
//   const [count, setCount] = useState(0);
//   const [showImage3, setImage3] = useState(false);
//   const [showImage4, setImage4] = useState(false);
//   const [showImage5, setImage5] = useState(false);
//   const [showImage6, setImage6] = useState(false);
//   const [showImage2, setImage2] = useState(true);

//   const handelheart = () => {
//     setIsPressed(!isPressed);
//   };

//   const add = () => {
//     setCount(count + 1);
//   };

//   const minus = () => {
//     setCount(count - 1);
//   };

//   const handleImagePress = (setImageState) => {
//     setImage3(false);
//     setImage4(false);
//     setImage5(false);
//     setImage6(false);
//     setImage2(false);
//     setImageState(true);
//   };

//   const renderAllItemTab = () => {
//     return (
//       <View style={styles.container}>
//         <View style={styles.flex1}>
//           {showImage2 === true ? (<Image source={item.image2} style={styles.changeImages} />) : null}
//           {showImage3 === true ? (<Image source={item.image3} style={styles.changeImages} />) : null}
//           {showImage4 === true ? (<Image source={item.image4} style={styles.changeImages} />) : null}
//           {showImage5 === true ? (<Image source={item.image5} style={styles.changeImages} />) : null}
//           {showImage6 === true ? (<Image source={item.image6} style={styles.changeImages} />) : null}
//           <View style={styles.imageContainer}>
//             <TouchableOpacity onPress={() => handleImagePress(setImage3)}>
//               <Image source={item.image3} style={styles.image} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleImagePress(setImage4)}>

//               <Image source={item.image4} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleImagePress(setImage5)}>

//               <Image source={item.image5} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handleImagePress(setImage6)}>

//               <Image source={item.image6} />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.flex2}>
//           <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', padding: 10, fontFamily: 'merriblack' }}>{item.firstname}</Text>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, bottom: 15 }}>
//             <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', fontFamily: 'merriblack' }}>{item.lastname}</Text>
//             <TouchableOpacity onPress={handelheart}>
//               <Icon size={40} name={isPressed ? 'heart' : 'heart-o'} color={'red'} />
//             </TouchableOpacity>
//           </View>
//           <View style={{ bottom: 20, padding: 10, }}>
//             <Text style={{ fontSize: 12, fontFamily: 'merriblack' }}>{item.description}</Text>

//           </View>
//           <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, bottom: 15 }}>{item.price}</Text>
//         </View>
//         <View style={{ flexDirection: 'row' }}>
//           <View style={{ flexDirection: 'row', padding: 10, marginVertical: 10, bottom: 20, backgroundColor: '#D9D9D9', borderRadius: 10, height: 30, marginLeft: 10 }}>
//             <TouchableOpacity style={{ backgroundColor: '#D9D9D9', marginVertical: -10 }} onPress={add}>
//               <Icon size={30} name={'plus-square-o'} color={'black'} />
//             </TouchableOpacity>
//             <Text style={{ fontSize: 20, marginHorizontal: 5, backgroundColor: '#D9D9D9', marginVertical: -10 }}>{count}</Text>
//             <TouchableOpacity style={{ backgroundColor: '#D9D9D9', marginVertical: -10 }} onPress={minus}>
//               <Icon size={30} name={'minus-square-o'} color={'black'} />
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity>
//             <Image source={require('../Images/CartButton.png')} style={{ marginHorizontal: 70, bottom: 20 }} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   const renderNewItemTab = () => {
//     return (
//       <View style={styles.container}>
//         <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

//         </View>
//       </View>
//     );
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: { fontSize: 10 },
//         tabBarItemStyle: { width: 100 },
//         tabBarActiveTintColor: 'red',
//         tabBarInactiveTintColor: 'black',
//       }}
//       tabBarOptions={{
//         indicatorStyle: {
//           backgroundColor: 'red',
//           height: 1,
//         },
//         tabBarIndicatorStyle: {
//           borderBottomColor: 'black',
//           padding: 50,
//         },
//       }}
//     >
//       <Tab.Screen name="All Item" component={renderAllItemTab} />
//       <Tab.Screen name="New Item" component={renderNewItemTab} />
//       <Tab.Screen name="Recomended" component={Recomended} />
//       <Tab.Screen name="Special" component={Special} />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'white',
//   },
//   flex1: {
//     flex: 0.6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginVertical: 10,
//   },
//   flex2: {
//     flex: 0.5,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   changeImages: {
//     height: 200,
//     width: 200,
//   },
//   imageContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   image: {
//     backgroundColor: 'white',
//   },
// });

// export default BurgerScreen;

import React, { useState } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewItemScreen from './TopTabNavigation/NewItemScreen';
import Recomended from './TopTabNavigation/Recomended';
import Special from './TopTabNavigation/Special';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Assets/theme/Colors';
const Tab = createMaterialTopTabNavigator();
function BurgerScreen({ route }) {
  const { item } = route.params;
  const [isPressed, setIsPressed] = useState(true);
  const [count, setCount] = useState(0);
  const [showImage3, setImage3] = useState(false);
  const [showImage4, setImage4] = useState(false);
  const [showImage5, setImage5] = useState(false);
  const [showImage6, setImage6] = useState(false);
  const [showImage2, setImage2] = useState(true);

  const handelheart = () => {
    setIsPressed(!isPressed);
  };

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const handleImagePress = (setImageState) => {
    setImage3(false);
    setImage4(false);
    setImage5(false);
    setImage6(false);
    setImage2(false);
    setImageState(true);
  };

  const RenderAllItemTab = () => {
    return (
      <View style={styles.container}>
        <View style={styles.flex1}>
          {showImage2 === true ? (<Image source={item.image2} style={styles.changeImages} />) : null}
          {showImage3 === true ? (<Image source={item.image3} style={styles.changeImages} />) : null}
          {showImage4 === true ? (<Image source={item.image4} style={styles.changeImages} />) : null}
          {showImage5 === true ? (<Image source={item.image5} style={styles.changeImages} />) : null}
          {showImage6 === true ? (<Image source={item.image6} style={styles.changeImages} />) : null}
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(setImage3)}>
              <Image source={item.image3} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress(setImage4)}>
              <Image source={item.image4} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress(setImage5)}>
              <Image source={item.image5} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImagePress(setImage6)}>
              <Image source={item.image6} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.titleText1}>{item.firstname}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.titleText}>{item.lastname}</Text>
            <TouchableOpacity onPress={handelheart}>
              <Icon size={40} name={isPressed ? 'heart' : 'heart-o'} color={'red'} />
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <View style={styles.cartContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={add}>
              <Icon size={30} name={'plus-square-o'} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity style={styles.iconContainer} onPress={minus}>
              <Icon size={30} name={'minus-square-o'} color={'black'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={require('../Images/CartButton.png')} style={styles.cartImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const RenderNewItemTab = () => {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {/* Content for New Item tab */}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: { width: 100 },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarScrollEnabled: true,
        tabBarStyle: {
         
        }

      }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: 'red',
          height: 1,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'black',
          padding: 50,
        },

      }}
    >
      <Tab.Screen name="All Item" component={RenderAllItemTab} />
      <Tab.Screen name="New Item" component={RenderNewItemTab} />
      <Tab.Screen name="Recomended" component={Recomended} />
      <Tab.Screen name="Special" component={Special} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  flex1: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
  },
  flex2: {
    flex: 0.5,
    backgroundColor: Colors.white,
    padding: 10,
  },
  changeImages: {
    height: 200,
    width: 200,
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: Colors.white,
  },
  titleText1:
  {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold',
   paddingLeft:15,
    fontFamily: 'merriblack',
  },
  titleText: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    fontFamily: 'merriblack',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    bottom: 15,
  },
  descriptionContainer: {
    bottom: 20,
    padding: 10,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: 'merriblack',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    bottom: 15,
  },
  cartContainer: {
    flexDirection: 'row',
    padding:10
  },
  iconContainer: {
    backgroundColor: Colors.white,
    marginVertical: -10,
  },
  countText: {
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor:Colors.white,
    marginVertical: -10,
  },
  cartImage: {
    marginHorizontal: 70,
    bottom: 20,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
});

export default BurgerScreen;
