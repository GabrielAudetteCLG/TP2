import { StyleSheet, Platform } from "react-native";
const buttonGreen = "#2B9720";
const cancelButtonRed = "#FF333A";
const spacing = 20;
const grey = "#4C4C4C";

export default StyleSheet.create({
  bouton: {
    backgroundColor: buttonGreen,
    padding: 30,
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  boutonText: {
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
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
    backgroundColor: cancelButtonRed,
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
  header: {
    backgroundColor: grey,
    width: "100%",
    padding: Platform.OS === "ios" ? 45 : 30,
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
