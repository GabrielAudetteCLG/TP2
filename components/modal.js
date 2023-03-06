import React from 'react';
import {
  Text,
  TextInput,
  Modal,
  Pressable,
  View,
  Alert,
  Platform,
} from 'react-native';
import styles from './style';
import listeProduitImporte from '../Data/listeProduit';
import Produit from '../components/produit';

export default class ModalBoite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      nomProduit: '',
      prixProduit: '',
      imageProduit: '',
      listeProduit: listeProduitImporte,
    };
  }

  ajouterProduit = () => {
    // Changement de la valeur recue dans le textInput pour un Number
    const prixProduit = parseFloat(this.state.prixProduit);
    function id() {
      return Math.random().toString(30).substring(5, 15);
    }
    if (
      typeof this.state.nomProduit === 'string' &&
      typeof prixProduit === 'number' &&
      this.state.nomProduit !== '' &&
      this.state.prixProduit !== '' &&
      this.state.imageProduit !== ''
    ) {
      let produit = {
        id: id(),
        nomProduit: this.state.nomProduit,
        prixProduit: this.state.prixProduit,
        imageProduit: this.state.imageProduit,
      };
      const listeProduit = this.state.listeProduit;
      listeProduit.push(produit);
      this.setState({
        nomProduit: '',
        prixProduit: '',
        imageProduit: '',
        listeProduit: listeProduit,
      });
      this.setState({ modalVisible: !this.state.modalVisible });
    } else {
      Alert.alert('Les champs ne peuvent pas être vide ou ne sont pas valides');
    }
  };

  suppressionProduit = (updatedListeProduit) => {
    this.setState({ listeProduit: updatedListeProduit });
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
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                this.setState({ modalVisible: !modalVisible });
              }}>
              <View style={styles.modal}>
                <Text style={styles.modalTextTitle}>Nom</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Nom"
                  placeholderTextColor="#000"
                  keyboardType="default"
                  value={this.state.nomProduit}
                  onChangeText={(text) => {
                    this.setState({ nomProduit: text });
                  }}
                />
                <Text style={styles.modalTextTitle}>Prix</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Prix"
                  placeholderTextColor="#000"
                  keyboardType="numeric"
                  returnKeyType="done"
                  value={this.state.prixProduit}
                  onChangeText={(text) => {
                    this.setState({ prixProduit: text });
                  }}
                />
                <Text style={styles.modalTextTitle}>Url</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Image"
                  placeholderTextColor="#000"
                  keyboardType={Platform.OS === 'ios' ? 'url' : 'default'}
                  value={this.state.imageProduit}
                  onChangeText={(text) => {
                    this.setState({ imageProduit: text });
                  }}
                />
                <View style={styles.boutonContainer}>
                <Pressable
                  style={[styles.boutonClose, styles.boutonModal]}
                  onPress={() =>
                    this.setState({
                      modalVisible: !modalVisible,
                      nomProduit: '',
                      prixProduit: '',
                      imageProduit: '',
                    })
                  }>
                  <Text style={styles.boutonCloseText}>Annuler</Text>
                </Pressable>
                <Pressable
                  style={[styles.boutonClose, styles.boutonModal]}
                  onPress={this.ajouterProduit}>
                  <Text style={styles.boutonCloseText}>Valider</Text>
                </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={styles.bouton}
              onPress={() => this.setState({ modalVisible: !modalVisible })}>
              <Text style={styles.boutonText}>Ajouter un produit</Text>
            </Pressable>
          </View>
        <Produit
          suppressionProduit={this.suppressionProduit}
          listeProduit={this.state.listeProduit}
        />
      </>
    );
  }
}
