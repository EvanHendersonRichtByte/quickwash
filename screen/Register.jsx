import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
        <Text>Registration Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
