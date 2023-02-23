import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
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
    produits: [],
  };

  ajouterProduit = () => {
    const produitsExistant = this.state.produits;
    const nouveauProduitNom = this.state.nomProduit;
    const nouveauProduitPrix = this.state.prixProduit;
    const nouveauProduitImage = this.state.imageProduit;
    console.log(`Nom : ${nouveauProduitNom}`);
    console.log(`Prix : ${nouveauProduitPrix}`);
    console.log(`Image : ${nouveauProduitImage}`);
    // this.setState({ modalVisible: !modalVisible });
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
                placeholderTextColor="#000"
                value={this.state.nomProduit}
                onChangeText={(text) => {
                  this.setState({ nomProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Prix du produit"
                placeholderTextColor="#000"
                value={this.state.prixProduit}
                onChangeText={(text) => {
                  this.setState({ prixProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Image du produit"
                placeholderTextColor="#000"
                value={this.state.imageProduit}
                onChangeText={(text) => {
                  this.setState({ imageProduit: text });
                }}
              />
              <Pressable
                style={[styles.boutonClose, styles.bouton]}
                onPress={this.ajouterProduit()}
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
