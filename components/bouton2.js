import React, { useState } from "react";
import { Text, TextInput, Modal, Pressable, View } from "react-native";
import styles from "./style";
import listeProduit from "../Data/listeProduit"

// export default class Bouton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         modalVisible: false,
//     };
// }

//   ajouterProduit = () => {
//     const [nomProduit, setNomProduit] = useState("");
// const [prixProduit, setPrix] = useState("");
// const [imageProduit, setImage] = useState("");
//   };
//   sendData = () => {
//     function id() {
//         return Math.random().toString(30).substring(5, 15);
//     }
//     let produit = {
//       id: id(),
//       nomProduit: setNomProduit,
//       prixProduit: setPrix,
//       imageProduit: setImage,
//     }
//     data.push(produit);
//     setNomProduit("")
//     setPrix("")
//     setImage("")
//   }
//   render() {
//     const { modalVisible } = this.state;

//     return (
//       <>
//         <View style={styles.modalContainer}>
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             // style={styles.modalContainer}
//             onRequestClose={() => {
//               Alert.alert("Modal has been closed.");
//               this.setState({ modalVisible: !modalVisible });
//             }}
//           >
//             <View style={styles.modal}>
//               <TextInput
//                 style={styles.modalInput}
//                 placeholder="Nom du produit"
//                 placeholderTextColor="#000"
//                 keyboardType="default"
//                 value={this.state.nomProduit}
//                 onChangeText={(text) => {
//                   this.setState({ nomProduit: text });
//                 }}
//               />
//               <TextInput
//                 style={styles.modalInput}
//                 placeholder="Prix du produit"
//                 placeholderTextColor="#000"
//                 keyboardType="numeric"
//                 value={this.state.prixProduit}
//                 onChangeText={(text) => {
//                   this.setState({ prixProduit: text });
//                 }}
//               />
//               <TextInput
//                 style={styles.modalInput}
//                 placeholder="Image du produit"
//                 placeholderTextColor="#000"
//                 // keyboardType "url" for ios and "default" for android
//                 keyboardType={Platform.OS === "ios" ? "url" : "default"}
//                 value={this.state.imageProduit}
//                 onChangeText={(text) => {
//                   this.setState({ imageProduit: text });
//                 }}
//               />
//               <Pressable
//                 style={[styles.boutonClose, styles.bouton]}
//                 onPress={[
//                   this.ajouterProduit(), push(nomProduit, nomProduit, nomProduit)
//                 ]
//                 }
//                 onPressOut={() =>
//                   this.setState({ modalVisible: !modalVisible })
//                 }
//               >
//                 <Text style={styles.boutonCloseText}>Ajouter le produit</Text>
//               </Pressable>
//             </View>
//           </Modal>
//           <Pressable
//             style={styles.bouton}
//             onPress={() => this.setState({ modalVisible: !modalVisible })}
//           >
//             <Text style={styles.boutonText}>Ajouter un produit</Text>
//           </Pressable>
//         </View>
//       </>
//     );
//   }
// }
export default class Bouton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
        nomProduit: "",
        prixProduit: "",
        imageProduit: ""
    };
}

  ajouterProduit = () => {
    function id() {
        return Math.random().toString(30).substring(5, 15);
    }
    let produit = {
      id: id(),
      nomProduit: this.state.nomProduit,
      prixProduit: this.state.prixProduit,
      imageProduit: this.state.imageProduit,
    }
    data.push(produit);
    this.setState({
        nomProduit: "",
        prixProduit: "",
        imageProduit: ""
    });
    this.setState({ modalVisible: !this.state.modalVisible });
  }
  render() {
    const { modalVisible } = this.state;

    return (
      <>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // style={styles.modalContainer}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setState({ modalVisible: !modalVisible });
            }}
          >
            <View style={styles.modal}>
              <TextInput
                style={styles.modalInput}
                placeholder="Nom du produit"
                placeholderTextColor="#000"
                keyboardType="default"
                value={this.state.nomProduit}
                onChangeText={(text) => {
                  this.setState({ nomProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Prix du produit"
                placeholderTextColor="#000"
                keyboardType="numeric"
                value={this.state.prixProduit}
                onChangeText={(text) => {
                  this.setState({ prixProduit: text });
                }}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Image du produit"
                placeholderTextColor="#000"
                // keyboardType "url" for ios and "default" for android
                keyboardType={Platform.OS === "ios" ? "url" : "default"}
                value={this.state.imageProduit}
                onChangeText={(text) => {
                  this.setState({ imageProduit: text });
                }}
              />
              <Pressable
                style={[styles.boutonClose, styles.bouton]}
                onPress={this.ajouterProduit}
              >
                <Text style={styles.boutonCloseText}>Ajouter le produit</Text>
              </Pressable>
            </View>
          </Modal>
          <Pressable
            style={styles.bouton}
            onPress={() => this.setState({ modalVisible: !modalVisible })}
          >
            <Text style={styles.boutonText}>Ajouter un produit</Text>
          </Pressable>
        </View>
      </>
    );
  }
}
