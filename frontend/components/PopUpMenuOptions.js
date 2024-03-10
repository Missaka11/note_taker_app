import { Text } from "react-native";
import React from "react";
import { MenuOptions } from "react-native-popup-menu";

export const Delete = ({ text, value }) => (
  <MenuOptions
    onSelect={() => alert(`You clicked ${value}`)}
    customStyles={{
      optionWrapper: {
        alignItems: "center",
        justifyContent: "space-between",
      },
    }}
  >
    <Text>{text}</Text>
  </MenuOptions>
);

export default Delete;
