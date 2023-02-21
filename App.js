import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import Bouton from "./components/bouton";
import Produit from "./components/produit";

const grey = "#4C4C4C";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  produitLabel: {
    color: grey,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
});

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
