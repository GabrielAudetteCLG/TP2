import React from "react";
import { View, Text, Image, Pressable, FlatList, SafeAreaView } from "react-native";
import styles from "./style.js";
import listeProduit from "../Data/listeProduit";
let updatedListeProduit;
export default class Produit extends React.Component {
  deleteItem = (id) => {
    console.log(`fonctionne`);
    const listeProduit = this.props.listeProduit;
    const updatedListeProduit = listeProduit.filter((item) => item.id !== id);
    this.setState({ listeProduit: updatedListeProduit });
    console.log(listeProduit);
    console.log(`updated ${updatedListeProduit}`);
  };
render() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
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
                this.setState({ listeProduit: updatedListeProduit });
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