import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import image from "../assets/tshirt.png";
import styles from "./style.js";
export default class Produit extends React.Component {
  render() {
    return (
      <>
        <View style={styles.produitContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={image} />
          </View>
          <View style={styles.produitInfoContainer}>
            <View style={styles.produitTextContainer}>
              <Text style={styles.produitTexte}>T Shirt</Text>
              <Text style={styles.produitTexte}>19.99$</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
