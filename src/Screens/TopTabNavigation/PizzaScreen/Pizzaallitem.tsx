
import { View, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';

function Pizzaallitem() {
    const [isPressed, setIsPressed] = useState(true);
    const [count, setCount] = useState(0);
    const handelheart = () => {
        setIsPressed(!isPressed);

    }
    const add = () => {
        setCount(count + 1);
    };
    const minus = () => {
        setCount(count - 1);
    };

    return (


        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>


            <View style={styles.flex1}>
                <Image
                    source={require('../../../Images/BigPizza1.png')}
                />

                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../../../Images/pizza3.png')}
                    />
                    <Image
                        source={require('../../../Images/pizza1.png')}
                        style={{ backgroundColor: 'white' }}
                    />
                    <Image
                        source={require('../../../Images/pizza2.png')}
                    />


                    <Image
                        source={require('../../../Images/pizza4.png')}
                    />
                </View>
            </View>

            <View style={styles.flex2}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', padding: 10,fontFamily:'merriblack' }}>Margarita Pepperoni </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, bottom: 15 }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold',fontFamily:'merriblack' }}>Pizza</Text>
                    <TouchableOpacity onPress={handelheart}>
                        <Icon size={40} name={isPressed ? 'heart' : 'heart-o'} color={'red'} />
                    </TouchableOpacity>

                </View>
                <View style={{ bottom: 20, padding: 10, }}>
                    <Text style={{ fontSize: 12,fontFamily:'merriblack', }}>Bread, Peporoni ,Cheese , Parsil  </Text>
                </View>

                <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, bottom: 15 }}>$12.99</Text>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <View style={{ flexDirection: 'row', padding: 10, marginVertical: 10, bottom: 20, backgroundColor: '#D9D9D9', borderRadius: 10, height: 30, marginLeft: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#D9D9D9', marginVertical: -10 }} onPress={add}>
                        <Icon size={30} name={'plus-square-o'} color={'black'} backgroundColor={''} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, marginHorizontal: 5, backgroundColor: '#D9D9D9', marginVertical: -10 }}>{count}</Text>

                    <TouchableOpacity style={{ backgroundColor: '#D9D9D9', marginVertical: -10 }} onPress={minus}>
                        <Icon size={30} name={'minus-square-o'} color={'black'} backgroundColor={''} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image
                        source={require('../../../Images/CartButton.png')}
                        style={{ marginHorizontal: 70, bottom: 20 }}
                    />
                </TouchableOpacity>
            </View>

        </View>


    );
}


const styles = StyleSheet.create({
    flex1:
    {
        flex: 0.6,

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
    },
    flex2:
    {
        flex: 0.5,
        backgroundColor: 'white',
        padding: 10,
    }


});
export default Pizzaallitem;