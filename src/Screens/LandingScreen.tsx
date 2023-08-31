
import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import BurgerScreen from './BurgerScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Assets/theme/Colors';
import Splash from './Splash';

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
            firstname: "Cheese Burger ",
            lastname: "Whopper",
            name: "Burger"
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
            lastname: "Pizza", name: "Pizza"
        },
        {
            id: '3', image: require('../Images/Rectangle24.png'),

            image2: require("../Images/bigpasta.png"),
            image3: require("../Images/pasta1.png"),
            image4: require("../Images/pasta2.png"),
            image5: require("../Images/pasta3.png"),
            image6: require("../Images/pasta4.png"),
            description: "Bread, Peporoni ,Cheese , Parsil",
            price: "$12.99",
            firstname: "Beef Straganof Pasta",
            lastname: "",
            name: "pasta"
        },



    ];
    const data2 = [
        {
            id: '4', image: require('../Images/Rectangle25.png'), name: "Sandwich",
            image2: require("../Images/bigsandwich.png"),
            image3: require("../Images/sandwich1.png"),
            image4: require("../Images/sandwich2.png"),
            image5: require("../Images/sandwich3.png"),
            image6: require("../Images/sandwich4.png"),
            description: "Bread, Peporoni ,Cheese , Parsil",
            price: "$8.99",
            firstname: "Bacon Sandwich with",
            lastname: "Toast",



        },
        {
            id: '5', image: require('../Images/Rectangle26.png'), name: "Fries",
            image2: require("../Images/bigfries.png"),
            image3: require("../Images/fries1.png"),
            image4: require("../Images/fries2.png"),
            image5: require("../Images/fries3.png"),
            image6: require("../Images/fries4.png"),
            description: "Bread, Peporoni ,Cheese , Parsil",
            price: "$5.99",
            firstname: "French Fries with",
            lastname: "Parsil",
        },
        {
            id: '6', image: require('../Images/Rectangle27.png'), name: "Kebab",

            image2: require("../Images/Bigkebeb.png"),
            image3: require("../Images/kebeb1.png"),
            image4: require("../Images/kebeb2.png"),
            image5: require("../Images/kebeb3.png"),
            image6: require("../Images/kebeb4.png"),
            description: "Bread, Peporoni ,Cheese , Parsil",
            price: "$17.99",
            firstname: "Mix of Beef,Chicken,",
            lastname: "Ribs , Potato",




        },



    ];

    const data3 = [
        { id: '7', image: require('../Images/Ellipse2.png'), name: "Vegan" },
        { id: '8', image: require('../Images/Ellipse3.png'), name: "SeaFood" },
        { id: '9', image: require('../Images/Ellipse4.png'), name: "FastFood" },
        { id: '10', image: require('../Images/Ellipse5.png'), name: "Kebab" },


    ];

    const data4 = [
        { id: '11', image: require('../Images/Ellipse6.png'), name: "Salad" },
        { id: '12', image: require('../Images/Ellipse7.png'), name: "Desert" },
        { id: '13', image: require('../Images/Ellipse8.png'), name: "Cake" },
        { id: '14', image: require('../Images/Ellipse9.png'), name: "Coffee" },


    ];


    const renderListItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Burgers", { item })}>
            <ImageBackground source={item.image} style={styles.flatListImage} >
                <Text style={styles.name}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    const renderListItem2 = ({ item }) => (
        <TouchableOpacity >
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
                        {/* <Image
                            source={require('../Images/Group3.png')}
                            style={styles.group3Image}
                        /> */}
                        <View style={{ flexDirection: 'row', }}>
                            <Icon name="map-marker" size={20} color="red" />
                            <Text style={styles.locationtext}>Paris,France</Text>
                            <Icon name="angle-down" size={20} color="red" />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                source={require('../Images/profilephoto.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.deliciousFoodTextContainer}>
                        <Text style={styles.deliciousFoodText}>Delicious Food?</Text>
                        <Text style={styles.deliciousFoodText}>Go Ahead...</Text>
                    </View>

                    <View style={styles.searchContainer}>
                        <Icon name="search" size={15} color="#777" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder={"search for your favourite food "}
                        />
                        <Icon name="filter" size={15} color="#777" style={styles.filterIcon} />
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
                <View style={{bottom:30}}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data3}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem2}
                    />
                   </View>
                    <View style={{bottom:70}}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data4}
                        keyExtractor={item => item.id}
                        renderItem={renderListItem2}
                    />
                     </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container1:
    {
        backgroundColor: Colors.white,
        padding: 15,
       
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 5,
        marginVertical: -10,
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
        left: 100,
        justifyContent: 'space-between',
        marginTop: 20, bottom: 10
    },
    foodOfferImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40, width: 150,
        right: 10


    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vectorImage: {
        left: 10,
    },
    group3Image: {
        height: 23,
        width: 120
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
    // searchContainer: {
    //     flexDirection: 'row',
    // },
    // searchInput: {
    //     borderRadius: 15,
    //     borderWidth: 2,
    //     left: 20,
    //     top: 30,
    //     height: 33,
    //     paddingHorizontal: 60,
    //     backgroundColor: '#E6E6E6',
    //     borderColor: '#E6E6E6',
    // },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',



        paddingVertical: 8,

        borderRadius: 15,
        borderWidth: 2,
        left: 20,
        top: 30,
        height: 35,
        paddingHorizontal: 30,
        backgroundColor: '#E6E6E6',
        borderColor: '#E6E6E6',
        marginRight: 20,
        marginLeft: -10

    },
    searchIcon: {
        marginRight: 20,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,

    },
    filterIcon:
    {
        marginLeft: 20
    },
    discountBanner: {
        borderRadius: 15,
        borderWidth: 2,
        top: 10,
        height: 30,
        width:250,
        left: 40,
        paddingHorizontal: 15,
        marginRight: 90,
        backgroundColor: Colors.secondary,
        borderColor: '#E6E6E6',
        marginVertical: 25,
    },
    discountBannerText: {
        color: Colors.white,
        fontSize: 14,
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
        marginVertical: 10
    },
    name:
    {
        padding: 15,
        fontFamily: 'lora',

    },
    flatListImage2:
    {
        height: 100,
        width: 100,
        marginVertical: 10
    },
    name2:
    {
        padding: 20,
        top: 60,
        fontFamily: 'lora',
        left: 5
        // fontFamily: 'lora',
        // marginVertical:45,
        // top:20,
    },
    locationtext:
    {
        fontFamily: 'lora',
    }
});

export default LandingScreen;
