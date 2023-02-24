import React from "react";
import { Text, TextInput, Modal, Pressable, View, Alert } from "react-native";
import styles from "./style";
import listeProduit from "../Data/listeProduit";
import Produit from "../components/produit";

// Todo :
// - Vérifier si on recois des données valables dans les textInput (juste du text, pas d'emojis / prix, s'assurer qu'on recois juste un nombre
// - Render la data (listeProduit) qu'on passe dans la function ajouterProduit en tant qu'items dans
export default class Bouton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nomProduit: "",
      prixProduit: "",
      imageProduit: "",
      listeProduit: listeProduit,
    };
  }

  ajouterProduit = () => {
    function id() {
      return Math.random().toString(30).substring(5, 15);
    }
    fetch(this.state.imageProduit)
      .then((response) => {
        if (response.ok) {
          // Si l'image est valide
          if (
            this.state.nomProduit !== "" &&
            this.state.prixProduit !== "" &&
            this.state.imageProduit !== ""
          ) {
            let produit = {
              id: id(),
              nomProduit: this.state.nomProduit,
              prixProduit: this.state.prixProduit,
              imageProduit: this.state.imageProduit,
            };
            listeProduit.push(produit);
            this.setState({
              nomProduit: "",
              prixProduit: "",
              imageProduit: "",
              listeProduit: listeProduit,
            });
            console.log(JSON.stringify(listeProduit));
            this.setState({ modalVisible: !this.state.modalVisible });
          } else {
            Alert.alert("Les champs ne peuvent pas être vide");
          }
        } else {
          // Si l'image n'est pas valide avec le fetch
          Alert.alert("L'URL de l'image n'est pas valide'");
        }
      })
      .catch((err) => {
        // Si l'image n'est pas valide avec le fetch, catch l'erreur
        Alert.alert("L'URL de l'image n'est pas valide'");
      });
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
                keyboardType="default"
                value={this.state.nomProduit}
                onChangeText={(text) => {
                  this.setState({ nomProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Prix du produit"
                placeholderTextColor="#000"
                keyboardType="numeric"
                returnKeyType="done"
                value={this.state.prixProduit}
                onChangeText={(text) => {
                  this.setState({ prixProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Image du produit"
                placeholderTextColor="#000"
                // keyboardType "url" for ios and "default" for android
                keyboardType={Platform.OS === "ios" ? "url" : "default"}
                value={this.state.imageProduit}
                onChangeText={(text) => {
                  this.setState({ imageProduit: text });
                }}
              />
              <Pressable
                style={[styles.boutonClose, styles.bouton]}
                onPress={this.ajouterProduit}
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
        <Produit listeProduit={this.state.listeProduit} />
      </>
    );
  }
}
