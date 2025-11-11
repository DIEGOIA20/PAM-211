import { StyleSheet, View, Text, Button, Modal  } from "react-native";
import React, {useState} from 'react'

export default function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <View style={styles.container}>
      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} color="#841584" >
        Picame
      </Button>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        >
        <View style={styles.modalcontainer}>
            <View style={styles.modalcontent}>
                <Text style={styles.textomodal}>Soy un Modal</Text>
                <Button title="Ocultar Modal" onPress={() => setModalVisible(false)} color="#841584" />
            </View>
        </View>
        </Modal>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    modalcontainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(1, 77, 255, 0.95)",
    },
    modalcontent: {
      padding: 25,
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
    },
    textomodal: {
      marginBottom: 20,
      color: "Black",
      fontSize:22,
      fontWeight: "Bold",
    },
  });