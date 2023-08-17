import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../Assets/theme/Colors';
function CartScreen() {
    return (
        
            <ScrollView style={styles.container}>
                <View style={styles.previousOrderButton}>
                    <TouchableOpacity style={styles.previousOrderButtonInner}>
                        <Text style={styles.previousOrderButtonText}>Previous Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageRow}>
                    <Image source={require('../Images/Group15.png')} />
                    <Image source={require('../Images/shoppingcart.png')} />
                </View>

                <View style={styles.cartItemContainer}>
                    <View style={styles.cartItemRow}>
                        <Image source={require('../Images/Rectangle43.png')} />
                        <View style={{flexDirection:'column',marginRight:30}}>
                        <Text style={styles.name}>Star Fish</Text>
                        <Text style={styles.name}>25 Feb 2022  20:30</Text>
                        </View>
                        <Image source={require('../Images/Group17.png')} />
                    </View>
                    <Image source={require('../Images/Group22.png')} />
                    <View style={styles.cartItemRow}>
                        <TouchableOpacity>
                        <Image source={require('../Images/Group20.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image source={require('../Images/Rate.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cartItemContainer}>
                    <View style={styles.cartItemRow}>
                        <Image source={require('../Images/Rectangle42.png')} />
                        <View style={{flexDirection:'column',marginRight:70}}>
                        <Text style={styles.name}>Boston </Text>
                        <Text style={styles.name}>Burgers </Text>
                        </View>
                        <Image source={require('../Images/Group18.png')} />
                    </View>
                    <Image source={require('../Images/Group23.png')} />
                    <View style={styles.cartItemRow}>
                        <TouchableOpacity>
                        <Image source={require('../Images/Group21.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image source={require('../Images/Rate.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
      
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    },
    previousOrderButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    previousOrderButtonInner: {
        backgroundColor:  Colors.primary,
        height: 35,
        width: 140,
        borderRadius: 20,
        marginVertical: 30,
        fontFamily: 'lora',
    },
    previousOrderButtonText: {
        textAlign: 'center',
        color: Colors.black,
        fontSize: 18,
        fontFamily: 'lora',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartItemContainer: {
        marginVertical: 20,
        borderRadius: 25,
        backgroundColor:  Colors.white,
        shadowColor: '#000',
        flex: 0.5,
        padding: 20,
        shadowOffset: {
            width: 5,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        elevation: 5,
    },
    cartItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name:
    {
        fontFamily:'lora',
        fontSize:13,
            }
});

export default CartScreen;
