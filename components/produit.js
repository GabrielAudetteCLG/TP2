import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import image from "../assets/tshirt.png";
const red = "#FF333A";
const spacing = 20;

const styles = StyleSheet.create({
  produitContainer: {
    backgroundColor: "#E3E3E3",
    borderRadius: 15,
    width: "90%",
    paddingTop: spacing,
    paddingBottom: spacing,
    marginBottom: spacing,
    flexDirection: "row",
  },
  produitInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  produitTextContainer: {
    height: 100,
    width: "50%",
    justifyContent: "space-between",
    paddingLeft: spacing,
    fontSize: spacing,
  },
  produitTexte: {
    fontSize: spacing,
    fontWeight: "semibold",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "1px solid #4C4C4C",
  },
  imgContainer: {
    paddingLeft: spacing,
  },
  buttonContainer: {
    backgroundColor: red,
    alignSelf: "center",
    width: 40,
    height: 40,
    borderRadius: 999,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
});

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
