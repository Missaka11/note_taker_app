import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Menu, Provider, Button } from "react-native-paper";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import PopUpMenu from "./PopUpMenu";

export default function NoteView() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [noteData, setNoteData] = useState([]);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    axios
      .get("http://192.168.1.2:8000/notes") //Use computer ip address for backend url, insted of localhost
      .then((res) => {
        setNoteData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const dotPressHandler = () => {
    console.log(`Pressed`);
    return (
      <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show menu</Button>}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
          </Menu>
        </View>
      </Provider>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        noteData.map((item) => {
          return (
            <View style={styles.noteViewStyle} key={item._id}>
              <View style={styles.cardTextView}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("NoteUpdatePage", {
                      id: item._id,
                      title: item.title,
                      text: item.text,
                    });
                  }}
                >
                  <Text style={styles.heading}>{item.title}</Text>
                  <View style={styles.noteText}>
                    <Text>{item.text}</Text>
                  </View>
                </Pressable>
              </View>
              {/* <View style={styles.pressabeleDotView}>
                <Pressable onPress={() => dotPressHandler()}>
                  <Entypo
                    name="dots-three-vertical"
                    size={18}
                    style={styles.threeDots}
                  />
                </Pressable>
              </View> */}
              <PopUpMenu item={item._id} />
            </View>
          );
        })
      )}
    </>
  );
}

const styles = StyleSheet.create({
  noteViewStyle: {
    backgroundColor: "burlywood",
    marginBottom: 6,
    marginLeft: 4,
    marginRight: 6,
    padding: 6,
    borderRadius: 8,
    flexDirection: "row",
  },
  cardTextView: {
    width: "88%",

    backgroundColor: "gold",
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
  },
  noteText: {
    marginTop: 6,
  },
  pressabeleDotView: {
    backgroundColor: "darkcyan",
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  threeDots: {
    marginLeft: "auto",
  },
});
