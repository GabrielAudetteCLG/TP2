import React from "react";
import {
  Text,
  TextInput,
  Modal,
  Pressable,
  View,
} from "react-native";
import styles from "./style";

export default class Bouton extends React.Component {
  state = {
    modalVisible: false,
    nomProduit: "",
    prixProduit: "",
    imageProduit: "",
  };
  render() {
    const { modalVisible } = this.state;

    return (
      <>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // style={styles.modalContainer}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setState({ modalVisible: !modalVisible });
            }}
          >
            <View style={styles.modal}>
              <TextInput
                
                style={styles.modalInput}
                placeholder="Nom du produit"
                placeholderTextColor= "#000"
                keyboardType="default"
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Prix du produit"
                placeholderTextColor="#000"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Image du produit"
                placeholderTextColor="#000"
                // keyboardType "url" for ios and "default" for android
                keyboardType= { Platform.OS === "ios" ? "url" : "default" }        
                
              />
              <Pressable
                style={[styles.boutonClose, styles.bouton]}
                onPress={() => this.setState({ modalVisible: !modalVisible })}
              >
                <Text style={styles.boutonCloseText}>Ajouter le produit</Text>
              </Pressable>
            </View>
          </Modal>
          <Pressable
            style={styles.bouton}
            onPress={() => this.setState({ modalVisible: !modalVisible })}
          >
            <Text style={styles.boutonText}>Ajouter un produit</Text>
          </Pressable>
        </View>
      </>
    );
  }
}
