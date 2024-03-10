import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function NoteUpdatePage() {
  const navigation = useNavigation();
  const route = useRoute();
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const ID = route.params.id;

  // for get the old data
  useEffect(() => {
    setNote(() => ({
      title: route.params.title,
      text: route.params.text,
    }));
  }, []);

  // for update and navigate
  const handleSubmitData = async () => {
    try {
      const res = await axios.put(`http://192.168.1.2:8000/notes/note/${ID}`, {
        title: note.title,
        text: note.text,
      });
      console.log(res.data);
    } catch {
      (error) => console.log(error);
    }
  };

  // for get changing data to state
  const updatingValues = (key, value) => {
    setNote({
      ...note,
      [key]: value,
    });
  };

  const pressFunction = async () => {
    await handleSubmitData();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.NoteTitle}
        multiline={true}
        onChangeText={(text) => updatingValues("title", text)}
        value={note.title}
        placeholder={"Title"}
      />
      <View style={styles.NoteTextView}>
        <TextInput
          style={styles.NoteText}
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={(text) => updatingValues("text", text)}
          value={note.text}
          placeholder={"Note"}
        />
      </View>

      <View style={styles.NoteUpdateBtnView}>
        <TouchableOpacity
          title="Submit"
          style={styles.NoteUpdateBtn}
          onPress={() => pressFunction()}
        >
          <Text>Update</Text>
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
  NoteUpdateBtnView: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 23,
    height: "auto",
  },
  NoteUpdateBtn: {
    backgroundColor: "lightsalmon",
    width: "80%",
    height: 40,
    padding: 8,
    marginTop: 10,
    marginRight: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
