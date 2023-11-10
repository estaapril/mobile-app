import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.linkText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  linkText: {
    color: "white",
    fontWeight: "bold",
  },
};
export default Button;
