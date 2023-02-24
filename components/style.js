import { StyleSheet, Platform } from "react-native";
const spacing = 20;
// Colors
const primaryColor = "#e87a5d";
const secondaryColor = "#3b5ba5";
const tertiaryColor = "#f3b941";

export default StyleSheet.create({
  //Home Screen
  //Home Screen Add Product Modal Button
  bouton: {
    backgroundColor: primaryColor,
    padding: 30,
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  boutonText: {
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
    color: secondaryColor,
    textAlign: "center",
  },
  //Home Screen Background
  container: {
    flex: 1,
    backgroundColor: tertiaryColor,
    alignItems: "center",
  },
  //Home Screen Product List
  produitLabel: {
    color: secondaryColor,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
  produitContainer: {
    backgroundColor: secondaryColor,
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
    color: tertiaryColor,
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
  //Home Screen Button Delete Product
  buttonContainer: {
    backgroundColor: primaryColor,
    alignSelf: "center",
    width: 40,
    height: 40,
    borderRadius: 999,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: secondaryColor,
    fontSize: 30,
  },
  //Header Screen
  header: {
    backgroundColor: secondaryColor,
    width: "100%",
    padding: Platform.OS === "ios" ? 45 : 30,
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: "32px",
    fontWeight: "bold",
    color: tertiaryColor,
    textAlign: "center",
  },
  // Modal
  modal: {
    marginTop: "50%",
    margin: 20,
    backgroundColor: secondaryColor,
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalInput: {
    borderWidth: 1,
    height: 50,
    width: "100%",
    color: tertiaryColor,
    margin: spacing,
    backgroundColor: tertiaryColor,
    borderRadius: 15,
    textAlign: "center",
  },
  // Modal Button Add/Close
  boutonClose: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    color: secondaryColor,
  },
  boutonCloseText: {
    color: secondaryColor,
    fontWeight: "bold",
  },
  /*
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    width: "80%",
    height: "50%",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalInput: {
    width: "100%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  bouton: {
    backgroundColor: "#000",
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  boutonText: {
    color: "#fff",
    fontSize: 18,
  },
  boutonClose: {
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  boutonCloseText: {
    color: "#000",
    fontSize: 18,
  },
});
*/
});
