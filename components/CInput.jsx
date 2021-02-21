import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function CInput({ icon, placeholder, marginTop }) {
  marginTop = marginTop || 0;

  const styles = StyleSheet.create({
    inputGroup: {
      marginTop: marginTop,
      height: 40,
      flexDirection: "row",
      flexWrap: "wrap",
      borderBottomWidth: 1,
      paddingVertical: 10,
    },
    inputIcon: { flex: 1, flexBasis: 20, flexShrink: 1 },
    inputText: { flex: 11 },
  });

  return (
    <View style={styles.inputGroup}>
      <View style={styles.inputIcon}>{icon}</View>
      <View style={styles.inputText}>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
}
