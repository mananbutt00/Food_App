import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Assets/theme/Colors';
const ProfileScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  function renderModal() {
    return (
      <Modal visible={openModal} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setOpenModal(false)}>
              <Image source={require('../Images/cross.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.text}>Username</Text>
            <TextInput placeholder="" style={styles.input2} />
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="" style={styles.input2} />
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="" style={styles.input2} secureTextEntry />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.submitButton}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => setOpenModal2(true)}><Text style={styles.buttonText}>Delete account</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  function renderModal2() {
    return (
      <Modal visible={openModal2} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setOpenModal2(false)}>
              <Image source={require('../Images/cross.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.text}>UserName</Text>
            <TextInput placeholder="" style={styles.input2} />
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="" style={styles.input2} secureTextEntry />
            <View style={styles.modalButtons}>
              <View style={styles.acceptCheckbox}>
                <TouchableOpacity>
                  <Icon size={30} name={'square-o'} color={'black'} />
                </TouchableOpacity>
                <Text>I accept that this can't be undone</Text>
              </View>
              <TouchableOpacity style={styles.deleteButton} onPress={() => setOpenModal2(false)}><Text style={styles.buttonText}>Delete account</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.flex1}>
        <View style={styles.profilePictureContainer}>
          <Image source={require('../Images/profilepicture.png')} style={styles.profilePicture} />
          <Text style={styles.uploadText}>Upload Profile Picture</Text>
        </View>
      </View>

      <View style={styles.flex2}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>User Name</Text>
          <TextInput placeholder="Enter your username" style={styles.input} />

          <Text style={styles.text}>Email</Text>
          <TextInput placeholder="Enter your email" style={styles.input} />

          <Text style={styles.text}>Password</Text>
          <TextInput placeholder="Enter your password" style={styles.input} secureTextEntry />

          <Text style={styles.text}>Mobile Number</Text>
          <TextInput placeholder="Enter your mobile number" style={styles.input} />
        </View>
      </View>

      <View style={styles.flex3}>
        <TouchableOpacity style={styles.button} onPress={() => setOpenModal(true)}>
          <Image source={require('../Images/editprofilebutton.png')} />
        </TouchableOpacity>
        {renderModal()}
        {renderModal2()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  flex1: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePictureContainer: {
    backgroundColor:Colors.primary,
    borderBottomEndRadius: 170,
    borderBottomLeftRadius: 170,
    width: 400,
    height: 140,
    alignItems: 'center',
  },
  profilePicture: {
    marginVertical: 30,
  },
  uploadText: {
    bottom: 20,
    fontFamily: 'lora',
  },
  flex2: {
    flex: 0.5,
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: 'blue',
    padding: 20,
    marginVertical: 80,
  },
  flex3: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 6,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    elevation: 5,
  },
  text: {
    marginLeft: 10,
    fontFamily: 'lora',
  },
  button: {
    bottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 25,
    width: 300,
    borderRadius: 10,
    height: 50,
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeIcon: {
    height: 40,
    width: 40,
  },
  input2: {
    marginVertical: 4,
    padding: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 9,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.62,
    elevation: 15,
  },
  modalButtons: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#E4E4E4',
    height: 25,
    width: 60,
    borderRadius: 5,
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: '#FF8282',
    height: 25,
    width: 120,
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  acceptCheckbox: {
    flexDirection: 'row',
  },
});

export default ProfileScreen;
