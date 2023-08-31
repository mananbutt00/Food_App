import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Image
          source={require('../Images/Group10.png')}
        />
      </View>

      <View style={styles.flex2}>
        <View style={styles.itemRow}>
          <Image source={require('../Images/Rectangle37.png')} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Pizza Italiano</Text>
            <Image source={require('../Images/Group11.png')} style={styles.itemImage} />
          </View>
        </View>
        <Image source={require('../Images/Line3.png')} />

        <View style={styles.itemRow}>
          <Image source={require('../Images/Rectangle41.png')} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Traditional Kebab</Text>
            <Image source={require('../Images/Group12.png')} style={styles.itemImage} />
          </View>
        </View>
        <Image source={require('../Images/Line3.png')} />

        <View style={styles.itemRow}>
          <Image source={require('../Images/Rectangle44.png')} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Star Fish</Text>
            <Image source={require('../Images/Group13.png')} style={styles.itemImage} />
          </View>
        </View>
        <Image source={require('../Images/Line3.png')} />

        <View style={styles.itemRow}>
          <Image source={require('../Images/Rectangle45.png')} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}>Boston Burger</Text>
            <Image source={require('../Images/Group14.png')} style={styles.itemImage} />
          </View>
        </View>
        <Image source={require('../Images/Line3.png')} />
      </View>

      <View style={styles.flex3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  flex1: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex2: {
    flex: 0.6,
    alignItems: 'flex-start',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    justifyContent: 'space-between',
  },
  flex3: {
    flex: 0.1,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginVertical: 10,
   left:10,
    fontFamily: 'lora',
    flex: 1,
    marginBottom:40,
    flexDirection:'row'
  },
  itemImage: {
    marginHorizontal: 50,
    marginVertical: 30,
    marginRight:100,
    top:20
  },
});

export default FavouriteScreen;
