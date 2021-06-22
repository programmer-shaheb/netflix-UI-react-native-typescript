import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e239",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  downloadButtonText: {
    fontWeight: "bold"
  },
});

export default styles;
