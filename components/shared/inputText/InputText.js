import { View, Text, TextInput } from "react-native";
import React from "react";

const InputText = ({ onchange }) => {
  return <TextInput onChangeText={onchange} />;
};

export default InputText;
