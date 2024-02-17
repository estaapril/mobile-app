import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { buttonContainer, signupContainer, styles } from '../login/styles';
import brand from '../../assets/images/darkshotLogo2White.png';
import brand2 from '../../assets/images/darkshotLogoWhite.png';

  const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userName = "Username";
  const passWord = "Password";
  const login = "LOGIN";

  const handleLogin = () => navigation.navigate('Home');
  const handleSignup = () => navigation.navigate('SignupScreen');

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return setPassword = (e.target.value);
  };
  return (
      <View style={styles.container}>
          <Image source={brand2} style={styles.brand2} />
          <Image source={brand} style={styles.brand} />
              
          <Text style={styles.label}>{userName}</Text>
          <TextInput style={styles.centerInput} onChangeText={(text) => setUsername(text)}/>

          <Text style={styles.label}>{passWord}</Text>
          <TextInput style={styles.centerInput} secureTextEntry={true}
     
     />
    
      <View style={buttonContainer.container}>
          <Button onPress={handleLogin} title={login} color="gray" />

      <View style={signupContainer.container}>
          <Text style={styles.normalText}>Don't have an account? </Text>
          <Text style={styles.activeLink} onPress={handleSignup}>Sign up here</Text>
      </View>
      </View>
 
</View>
  );
}
export default Login;
