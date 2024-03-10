import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NoteView from "../components/NoteView";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.Title}>Notes</Text>
        </View>
        <TouchableOpacity
          style={styles.NoteAddBtn}
          onPress={() => {
            navigation.navigate("NoteAddPage");
          }}
        >
          <Text style={styles.btnText}>Add Note</Text>
        </TouchableOpacity>
        <NoteView />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornsilk",
  },
  titleView: {
    alignItems: "center",
    padding: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: "600",
  },
  NoteAddBtn: {
    backgroundColor: "lightsalmon",
    width: "25%",
    height: 40,
    padding: 8,
    marginLeft: "auto",
    marginRight: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
});
