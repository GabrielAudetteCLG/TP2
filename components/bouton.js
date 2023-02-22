import React from "react";
import { Text, TouchableOpacity, Modal } from "react-native";
import styles from "./style";

export default class Bouton extends React.Component {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.boutonText}>Ajouter un produit</Text>
        </TouchableOpacity>
      </>
    );
  }
}
