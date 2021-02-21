import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function CSeparator({ text, color, marginVertical }) {
  color = color || "#3E3E3E";
  marginVertical = marginVertical || 0;
  const styles = StyleSheet.create({
    separator: {
      marginVertical: marginVertical,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    separatorLine: { height: 1, width: "40%", backgroundColor: color },
    separatorText: { flex: 1, textAlign: "center", color: color },
  });

  return (
    <View style={styles.separator}>
      <Text style={styles.separatorLine}>-</Text>
      <Text style={styles.separatorText}>{text}</Text>
      <Text style={styles.separatorLine}>-</Text>
    </View>
  );
}
