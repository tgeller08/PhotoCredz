import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, Alert, Modal, TextInput, Pressable} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';


import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import CreditPrompter from "./components/CreditPrompter";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import CreditSticker from './components/CreditSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState('');
  const [pickedCredit, setPickedCredit] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreditModalVisible, setIsCreditModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setPickedCredit(null)
    setPickedEmoji(null)
    setShowAppOptions(false);
    console.log("Hi Tammy!");
  };

  const onAddCredit = () => {
    setIsCreditModalVisible(true);
    console.log("You clicked add credit!");
    // Alert.prompt(
    //   'Who took the photo?',
    //   'Please enter the name:',
    //   (text) => setPickedCredit(text),
    //   undefined,
      // 'default'
  };

  const handleInputValueChange = (value) => {
    setPickedCredit(value);
  };



  const onCreditModalClose = () => {
    setIsCreditModalVisible(false);
    console.log("You closed the credit!");
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };


  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    //setIsModalVisible(false);
    if (Platform.OS !== 'web') {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
    }  else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });
  
        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (status === null) {
    requestPermission();
  }

  return (
    <GestureHandlerRootView style={styles.container}>
       <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
       <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
        {pickedCredit !== null ? <CreditSticker imageSize={40} creditSource={pickedCredit} /> : null}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <IconButton icon="brush" label="Add Sticker" onPress={onAddSticker} />
          <IconButton icon="edit" label="Add Credit" onPress={onAddCredit} />
          {/* <CircleButton onPress={onAddSticker} /> */}
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <Modal animationType="slide" transparent={true} visible={isCreditModalVisible} onRequestClose={onCreditModalClose}>
        <View style={styles.modalContent}>
          <TextInput 
            style={styles.input}
            placeholder="Insert Name Here"
            value={pickedCredit}
            onChangeText={handleInputValueChange} />
          <Button theme="exit" label="Save" onPress={onCreditModalClose}/>
        </View>
      </Modal>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#e1dfdb',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 0, 
    padding: 10,
    backgroundColor: '#eee',
    borderColor: 'gray',
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    padding: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
    textDecorationLine: 'none',
    textTransform: 'none',
  },
});