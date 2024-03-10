import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function NoteAddPage() {
  const navigation = useNavigation();
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleSubmit = () => {
    axios
      .post("http://172.28.3.174:8000/notes", {
        title: note.title,
        text: note.text,
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e, input) => {
    setNote((prev) => ({ ...prev, [input]: e }));
  };

  const pressFunction = async () => {
    await handleSubmit();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        name="title"
        id="title"
        style={styles.NoteTitle}
        multiline={true}
        onChangeText={(e) => handleOnChange(e, "title")}
        value={setNote.title}
        placeholder={"Title"}
      />
      <View style={styles.NoteTextView}>
        <TextInput
          name="text"
          id="text"
          style={styles.NoteText}
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={(e) => handleOnChange(e, "text")}
          value={setNote.text}
          placeholder={"Note"}
        />
      </View>
      <View style={styles.NoteAddBtnView}>
        <TouchableOpacity
          style={styles.NoteAddBtn}
          onPress={() => pressFunction()}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornsilk",
  },
  NoteTitle: {
    backgroundColor: "ivory",
    height: "auto",
    borderRadius: 6,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    padding: 6,
  },
  NoteText: {
    height: "90%",
    backgroundColor: "ivory",
    borderRadius: 6,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    padding: 6,
  },
  NoteAddBtnView: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 23,
    height: "auto",
  },
  NoteAddBtn: {
    backgroundColor: "lightsalmon",
    width: "80%",
    height: 40,
    padding: 8,
    marginTop: 10,
    marginRight: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    // position:"absolute"
  },
});
