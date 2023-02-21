import React from "react";
import { View, Text, StyleSheet } from "react-native";
const grey = "#4C4C4C";

const styles = StyleSheet.create({
  header: {
    backgroundColor: grey,
    width: "100%",
    padding: Platform.OS === "ios" ? 45 : 30,
    // padding: 30,
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>Liste de produits</Text>
        </View>
      </>
    );
  }
}
