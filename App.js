import { StatusBar } from "expo-status-bar";
import { Text, View, React, StatusBar } from "react-native";
import Header from "./components/header";
import Bouton from "./components/bouton";
import Produit from "./components/produit";
import styles from "./components/style.js";

export default class App extends React.Component() {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Bouton />
        <View>
          <Text style={styles.produitLabel}>Liste de produits</Text>
        </View>
        <Produit />
        <Produit />
        <Produit />
      </View>
    );
  }
}
