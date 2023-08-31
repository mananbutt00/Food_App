//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../Assets/theme/Colors';
import LottieView from 'lottie-react-native';
import assets from '../../../assets';
const Language = () => {
    return (
        <View style={styles.header} >      
        <LottieView
          loop
          source={assets.lottieFiles.planePath}
          colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    header: {
        height: 80,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'stretch',
        justifyContent: 'center',
        zIndex: 1,
      },
});

//make this component available to the app
export default Language;
