import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./components/header";
import Bouton from "./components/bouton";
import Produit from "./components/produit";
import styles from "./components/style.js";

export default function App() {
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
