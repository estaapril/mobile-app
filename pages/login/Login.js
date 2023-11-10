import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import InputText from "../../components/shared/inputText/InputText";
const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  return (
    <View>
      <Text>Login</Text>
      <InputText onchange={handleUsername} />
    </View>
  );
};

export default Login;
