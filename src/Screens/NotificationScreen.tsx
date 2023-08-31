import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Colors from '../Assets/theme/Colors';
function NotificationScreen() {
        return (
                <ScrollView>
                        <View style={styles.container}>
                                
                                <View style={styles.flex1}>

                                        <View style={styles.offerContainer}>
                                                <Text style={styles.text}>30% Off on your first purchase</Text>
                                        </View>
                                        <View style={styles.offerContainer2}>
                                                <Text style={styles.text}>50% Off on invitations</Text>
                                        </View>


                                </View>

                                <View style={styles.flex2}>
                                        <View style={styles.flex2Inner}>
                                                <Image source={require('../Images/star.png')} />
                                                <Text style={styles.text2}>
                                                        Daily Offers are Proposed{"\n"}
                                                        Proposed Everyday with{"\n"}
                                                        special prices ti pick!
                                                </Text>
                                        </View>
                                </View>

                                <View style={styles.flex3}>
                                        <View style={styles.notificationBox}>
                                                <View style={styles.notificationRow}>
                                                        <Image source={require('../Images/Group31.png')} />
                                                        <Image source={require('../Images/Group27.png')} />
                                                </View>

                                                <View style={styles.notificationRow}>
                                                        <Image source={require('../Images/Group28.png')} />
                                                        <Image source={require('../Images/Group30.png')} />
                                                </View>

                                                <View style={styles.notificationRow}>
                                                        <Image source={require('../Images/Group29.png')} />
                                                </View>
                                        </View>
                                </View>
                                
                        </View>
                        </ScrollView>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                flexDirection: 'column',
                padding: 30,
                backgroundColor:  Colors.white,
        },
        flex1: {
                flex: 0.2,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
        },
        flex2: {
                flex: 0.3,
                justifyContent: 'center',
        },
        flex2Inner: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
        },
        flex3: {
                flex: 0.53,
                justifyContent: 'center',
        },
        notificationBox: {
                backgroundColor:Colors.container,
                width: 300,
                height: 400,
                borderRadius: 30,
                padding: 5,
                marginVertical:20
        },
        notificationRow: {
                flexDirection: 'row',
                alignItems: 'center'
        },
        offerContainer: {
                width: 300,
                height: 50,
                backgroundColor: Colors.secondary,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
        },
        offerContainer2: {
                width: 300,
                height: 35,
                backgroundColor: Colors.primary,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
        },
        text:
        {
                fontFamily: 'lora',
                color: 'white'
        },
        text2:
        {
                color:'black',
                fontFamily:'lora',
                fontSize:12
        }
});

export default NotificationScreen;
