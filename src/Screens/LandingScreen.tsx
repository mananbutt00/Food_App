
import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView,ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import BurgerScreen from './BurgerScreen';

import { color } from '@rneui/base';
import Colors from '../Assets/theme/Colors';
SplashScreen.preventAutoHideAsync();

function LandingScreen() {
    const navigation: any = useNavigation(); 

    const [isLoaded] = useFonts({
        "merriblack": require("../../assets/fonts/Merriweather-BlackItalic.ttf"),
        "borel": require("../../assets/fonts/Borel-Regular.ttf"),
    });

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    const data = [
        {
            id: '1',
            image: require('../Images/Rectangle22.png'),
            image2: require("../Images/Rectangle1.png"),
            image3: require("../Images/Rectangle8.png"),
            image4: require("../Images/Rectangle9.png"),
            image5: require("../Images/Rectangle7.png"),
            image6: require("../Images/Rectangle10.png"),
            description: "Ham, Cheddar ,Cheese , Onion ,Cornichon , Salad , Tomato",
            price: "$8.99",
            firstname: "Chese Burger ",
            lastname: "Whopper",
            name:"Burger"
        },

        {
            id: '2',
            image: require('../Images/Rectangle23.png'),
            image2: require("../Images/BigPizza1.png"),
            image3: require("../Images/pizza3.png"),
            image4: require("../Images/pizza1.png"),
            image5: require("../Images/pizza2.png"),
            image6: require("../Images/pizza4.png"),
            description: "Bread, Peporoni ,Cheese , Parsil",
            price: "$12.99",
            firstname: "Margarita Pepperoni",
            lastname: "Pizza",name:"Pizza"
        },
        { id: '3', image: require('../Images/Rectangle24.png'),
        name:"Pasta"
    
    },



    ];
    const data2 = [
        { id: '4', image: require('../Images/Rectangle25.png'),name:"Sandwich" },
        { id: '5', image: require('../Images/Rectangle26.png'),name:"Fries" },
        { id: '6', image: require('../Images/Rectangle27.png'),name:"Kebab" },



    ];

    const data3 = [
        { id: '7', image: require('../Images/Ellipse2.png'),name:"Vegan"  },
        { id: '8', image: require('../Images/Ellipse3.png'),name:"SeaFood"  },
        { id: '9', image: require('../Images/Ellipse4.png'),name:"FastFood"  },
        { id: '10', image: require('../Images/Ellipse5.png'),name:"Kebab" },


    ];

    const data4 = [
        { id: '11', image: require('../Images/Ellipse6.png'),name:"Salad"  },
        { id: '12', image: require('../Images/Ellipse7.png'),name:"Desert"  },
        { id: '13', image: require('../Images/Ellipse8.png'),name:"Cake"  },
        { id: '14', image: require('../Images/Ellipse9.png'),name:"Coffee"  },


    ];


    const renderListItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Burgers", { item })}>
            <ImageBackground source={item.image} style={styles.flatListImage} >
                <Text style={styles.name}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    const renderListItem2 = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Burgers', { item })}>
            <ImageBackground source={item.image} style={styles.flatListImage2} >
            <Text style={styles.name2}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container1}>
            <View style={styles.container} onLayout={handleOnLayout}>
                <View style={styles.flex1}>
                    <View style={styles.foodOfferContainer}>
                        <Image
                            source={require('../Images/FoodOffer.png')}
                            style={styles.foodOfferImage}
                        />
                    </View>

                    <View style={styles.topBarContainer}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require('../Images/Vector.png')}
                                style={styles.vectorImage}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../Images/Group3.png')}
                            style={styles.group3Image}
                        />
                        <Image
                            source={require('../Images/profilephoto.png')}
                        />
                    </View>

                    <View style={styles.deliciousFoodTextContainer}>
                        <Text style={styles.deliciousFoodText}>Delicious Food?</Text>
                        <Text style={styles.deliciousFoodText}>Go Ahead...</Text>
                    </View>

                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder='Search for your Favourite Food'
                        />
                    </View>
                </View>

                <View style={styles.flex2}>
                    <View style={styles.discountBanner}>
                        <Text style={styles.discountBannerText}>30% Off On Your First Purchase</Text>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data2}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem}
                    />
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreText}>See More...</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.flex3}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data3}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem2}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data4}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem2}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container1:
    {
        backgroundColor: Colors.white,

    },
    container: {
        flex: 1,
        backgroundColor:Colors.white,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 5,
        marginVertical: 30,
    },
    flex1: {
        flex: 0.28,
    },
    flex2: {
        flex: 0.52,
    },
    flex3: {
        flex: 0.15,
    },
    foodOfferContainer: {
        flexDirection: 'column',
        left: 120,
        justifyContent: 'space-between',
    },
    foodOfferImage: {
        bottom: 10,
        
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vectorImage: {
        left: 10,
    },
    group3Image: {
        height: 15,
    },
    deliciousFoodTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        top: 20,
    },
    deliciousFoodText: {
        fontSize: 15,
        color: 'black',
        left: 10,
        fontFamily: 'merriblack',
    },
    searchContainer: {
        flexDirection: 'row',
    },
    searchInput: {
        borderRadius: 15,
        borderWidth: 2,
        left: 20,
        top: 30,
        height: 33,
        paddingHorizontal: 60,
        backgroundColor: '#E6E6E6',
        borderColor: '#E6E6E6',
    },
    discountBanner: {
        borderRadius: 15,
        borderWidth: 2,
        top: 10,
        height: 28,
        left: 40,
        paddingHorizontal: 15,
        marginRight: 90,
        backgroundColor:Colors.secondary,
        borderColor: '#E6E6E6',
        marginVertical: 25,
    },
    discountBannerText: {
        color:Colors.white,
        fontSize: 12,
        fontFamily: 'merriblack',
        textAlign: 'center',
    },
    seeMoreButton: {
        borderBottomWidth: 1.5,
        marginLeft: 120,
        marginRight: 120,
        borderColor: 'blue',
    },
    seeMoreText: {
        color: 'blue',
        textAlign: 'center',
    },
    flatListImage: {
        width: 120,
        height: 220,
        marginHorizontal: 5,
        marginVertical:10
    },
    name:
    {
        padding:15,
        fontFamily: 'lora',
        
    },
    flatListImage2:
    {
height:100,
width:100,
marginVertical:9
    },
    name2:
    {
        padding:20,
        top:60,
        fontFamily: 'lora',
        left:5
        // fontFamily: 'lora',
        // marginVertical:45,
        // top:20,
    }
});

export default LandingScreen;
