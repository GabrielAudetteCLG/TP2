import React from "react";
import { View, Text } from "react-native";
import styles from "./style.js";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>Travail Pratique 2</Text>
        </View>
      </>
    );
  }
}
