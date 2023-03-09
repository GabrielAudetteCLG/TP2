import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./style.js";
let updatedListeProduit;
export default class Produit extends React.Component {
  deleteItem = (id) => {
    updatedListeProduit = this.props.listeProduit.filter(
      (item) => item.id !== id
    );
    this.props.suppressionProduit([...updatedListeProduit]);
    listeProduit = [...updatedListeProduit];
  };
  render() {
    const { listeProduit } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <Text style={styles.produitLabel}>Liste de produits</Text>
        </View>
        <FlatList
          data={listeProduit}
          renderItem={({ item }) => (
            <View style={styles.produitContainer} key={item.id}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: item.imageProduit }} />
              </View>
              <View style={styles.produitInfoContainer}>
                <View style={styles.produitTextContainer}>
                  <Text style={styles.produitTexte}>{item.nomProduit}</Text>
                  <Text style={styles.produitTexte}>{item.prixProduit}$</Text>
                </View>
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => {
                    this.deleteItem(item.id);
                  }}
                >
                  <Text style={styles.buttonText}>X</Text>
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}
