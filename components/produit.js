import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import image from "../assets/tshirt.png";
const grey = "#4C4C4C";
const red = "#FF333A";

const styles = StyleSheet.create({
  produitLabel: {
    color: grey,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: "25px",
    fontWeight: "bold",
  },
  produitContainer: {
    backgroundColor: "#E3E3E3",
    borderRadius: "15px",
    width: "90%",
    paddingTop: "20px",
    paddingBottom: "20px",
    flexDirection: "row",
  },
  produitInfoContainer: {
    flexDirection: "row",
    // alignItems: "flex-end",
    justifyContent: "space-between",
    // width: "80%",
  },
  produitTextContainer: {
    height: "100%",
    justifyContent: "space-between",
    paddingLeft: "20px",
    fontSize: "20px",
  },
  produitTexte: {
    fontSize: "20px",
    fontWeight: "semibold",
  },
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #4C4C4C",
  },
  imgContainer: {
    paddingLeft: "20px",
  },
  buttonContainer: {
    flexDirection: "row",
    textAlign: "right",
    alignSelf: "center",
    width: "20px",
    height: "20px",
  },
});

export default class Produit extends React.Component {
  render() {
    return (
      <>
        <View>
          <Text style={styles.produitLabel}>Liste de produits</Text>
        </View>
        <View style={styles.produitContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={image} />
          </View>
          <View style={styles.produitInfoContainer}>
            <View style={styles.produitTextContainer}>
              <Text style={styles.produitTexte}>T Shirt</Text>
              <Text style={styles.produitTexte}>19.99$</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>X</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}
