import React from "react";
import BlobTop from "../svg/BlobTop";
import { View, Text, StyleSheet } from "react-native";
import CInput from "../components/CInput";
import CButton from "../components/CButton";
import CSeparator from "../components/CSeparator";
import UserOptional from "../svg/UserOptional";
import Mail from "../svg/Mail";
import Lock from "../svg/Lock";
export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.blobContainer}>
        <BlobTop />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buat Akun</Text>
      </View>
      <View style={styles.content}>
        <CInput marginTop={10} placeholder="Nama" icon={<UserOptional />} />
        <CInput marginTop={10} placeholder="Email" icon={<Mail />} />
        <CInput marginTop={10} placeholder="Password" icon={<Lock />} />
        <View style={styles.adjustContent}>
          <CButton title="Daftar" color="#C5FFC3" textColor="#3E3E3E" />
        </View>
        <View>
          <CSeparator
            style={styles.separator}
            marginVertical={30}
            text="atau"
          />
        </View>
        <View>
          <CButton
            onPress={() => navigation.navigate("Login")}
            title="Login"
            type="outline"
            color="#0AFF6C"
            textColor="#3E3E3E"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: { top: 120, left: 50, position: "absolute" },
  header: { fontSize: 40, width: "60%" },
  blobContainer: { flex: 1 },
  topButton: { marginTop: 20 },
  content: { flex: 1, paddingHorizontal: 60 },
  adjustContent: { marginTop: 30 },
});
