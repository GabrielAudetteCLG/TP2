import { StyleSheet, Platform } from "react-native";
const spacing = 20;
// Colors
const primaryColor = "#2a971f";
const secondaryColor = "#4c4c4c";
const tertiaryColor = "#fff";

export default StyleSheet.create({
  //Home Screen
  //Home Screen Add Product Modal Button
  bouton: {
    backgroundColor: primaryColor,
    padding: spacing,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  boutonModal: {
    backgroundColor: primaryColor,
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  boutonText: {
    fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: tertiaryColor,
    textAlign: "center",
    paddingBottom: spacing / 2,
  },
  boutonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  //Home Screen Background
  container: {
    flex: 1,
    backgroundColor: tertiaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  //Safe Area View
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'flex-end',
    height: "80%",
    marginTop: Platform.OS === "ios" ? "-115%" : "-100%",
    // marginBottom: '10%',
  },
  //Home Screen Product List
  produitLabel: {
    color: secondaryColor,
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "-5%",
    backgroundColor: "transparent",
    position: "relative",
  },
  produitContainer: {
    backgroundColor: secondaryColor,
    borderRadius: 15,
    width: "98%",
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
    borderRadius: 999,
    borderColor: tertiaryColor,
    borderWidth: 1,
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
    color: tertiaryColor,
    fontSize: 30,
  },
  //Header Screen
  header: {
    backgroundColor: secondaryColor,
    width: "100%",
    padding: Platform.OS === "ios" ? 45 : 30,
    alignItems: "center",
  },
  headerText: {
    fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
    fontSize: 32,
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

    // justifyContent: "center",
  },
  modalInput: {
    borderWidth: 1,
    height: 50,
    width: "100%",
    color: "#000",
    margin: spacing,
    backgroundColor: tertiaryColor,
    borderRadius: 15,
    textAlign: "center",
  },
  modalTextTitle: {
    color: tertiaryColor,
  },
  // Modal Button Add/Close
  boutonClose: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    color: secondaryColor,
  },
  boutonCloseText: {
    color: tertiaryColor,
    fontWeight: "bold",
  },
});
