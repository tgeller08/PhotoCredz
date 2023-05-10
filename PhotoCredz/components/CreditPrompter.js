import { Modal, View, Text, Pressable, StyleSheet, TextInput, Button} from 'react-native';
import { useState, useRef } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CreditPrompter({ isVisible, onClose, creditText, setCreditText }) {

    const [inputText, setInputText] = useState('');


  return (
    // <Modal animationType="slide" transparent={true}  visible={isVisible}>
    //   <View style={styles.modalContent}>
    //   <Text style={styles.title}>Add A Credit</Text>
    //   <TextInput
    //     style={{
    //         height: 40,
    //         borderColor: 'gray',
    //         borderWidth: 1,
    //         paddingLeft: 10,
    //         paddingRight: 10,
    //         borderRadius: 5,
    //         backgroundColor: 'white',
    //         color: 'black',
    //         fontSize: 16,
    //         fontWeight: 'bold',
    //       }}
    //     onChangeText={text => setInputText(text)}
    //     value={inputText}
    //     placeholder="Enter text here"
    //     />
    //     <Button title="Save" onPress={onClose} />
    //   </View>
    // </Modal>

    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View> */}
        <Text style={styles.title}>Hello</Text>
        <TextInput style={styles.title} value={creditText} onChangeText= {(value) => setCreditText(value)}></TextInput>
        {/* <h2>Enter a value:</h2>
        <input value={creditText} onChange={(e) => setPickedCredit(e.target.value)} />
        <button onClick={onCreditModalClose}>OK</button> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
      alignItems: 'center',
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });
  