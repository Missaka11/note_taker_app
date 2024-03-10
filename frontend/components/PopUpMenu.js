import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import { Delete } from "./PopUpMenuOptions";
import { StyleSheet, Text, View } from "react-native";

const PopUpMenu = (item) => {
  return (
    <MenuProvider>
      <Menu>
        <MenuTrigger
          customStyles={{
            triggerWrapper: {
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            },
          }}
        >
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </MenuTrigger>

        <MenuOptions
        //   key={item._id}
          customStyles={{
            optionsContainer: {
              borderRadius: 10,
            },
          }}
        >
          <Delete text="Delete" value="Delete" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

// const styles = StyleSheet.create({
//   dotView: {
//     borderRadius: 40,
//   },
// });

export default PopUpMenu;
