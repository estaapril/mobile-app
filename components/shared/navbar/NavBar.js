import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { useRoute } from "@react-navigation/native";
import Button from "../button/Button";

const NavBar = () => {
  const navigationLinks = [
    { name: "Profile", url: "Profile" },
    { name: "Meeting", url: "Meeting" },
    { name: "Chat", url: "Chat" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        {navigationLinks.map((links) => {
          return <Button label={links.name} />;
        })}
      </View>
    </View>
  );
};

const styles = {
  container: { height: "100%" },
  navContainer: {
    flexDirection: "row", // Display buttons horizontally
    justifyContent: "center",
    alignItems: "center",
  },
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
export default NavBar;
