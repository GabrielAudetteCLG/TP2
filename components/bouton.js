import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
const green = "#2B9720";

const styles = StyleSheet.create({
  bouton: {
    backgroundColor: green,
    padding: 30,
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  boutonText: {
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

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
