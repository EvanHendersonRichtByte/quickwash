// import { StatusBar } from "expo-status-bar";
import BlobTop from "./svg/BlobTop";
import BlobBottom from "./svg/BlobBottom";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blobTopContainer}>
        <BlobTop style={styles.blobTop} />
        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeader}>QuickWash</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Siap mengantarkan pakaian hingga ujung dunia
        </Text>
      </View>
      <View style={styles.blomBottomContainer}>
        <BlobBottom style={styles.blobBottom} />
        <View style={styles.footer}>
          <TouchableOpacity color="#11698E" style={styles.buttonSecondary}>
            <Text style={styles.buttonWhiteText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutlineSecondary}>
            <Text style={styles.buttonSecondaryText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageHeaderContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    height: 20,
    width: "100%",
    paddingLeft: 10,
    paddingTop: 70,
  },
  footer: {
    position: "absolute",
    padding: 50,
    bottom: 0,
    left: 0,
    width: "100%",
  },
  buttonSecondary: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#11698E",
  },
  buttonOutlineSecondary: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#11698E",
  },
  buttonWhiteText: { color: "#fff", textAlign: "center" },
  buttonSecondaryText: { color: "#11698E", textAlign: "center" },
  pageHeader: { fontSize: 20, textAlign: "left", color: "black" },
  blobTopContainer: { zIndex: -2, flex: 1 },
  blomBottomContainer: { zIndex: -2, flex: 1 },
  blobTop: { marginTop: -20 },
  blobBottom: { bottom: 0, right: -20 },
  textContainer: { flex: 1, justifyContent: "center", marginLeft: 20 },
  text: { fontSize: 20, width: "80%" },
});
