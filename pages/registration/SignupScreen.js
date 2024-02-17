import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { buttonContainer, signupContainer, styles } from '../login/styles';
import brand from '../../assets/images/darkshotLogo2White.png';

  const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");

  const userName = "Username";
  const passWord = "Password";
  const confirm = "Re-enter your password";
  const btnSignup = "SIGN UP";

  // const handleLogin = () => navigation.navigate('Home')
  const handleSignup = () => navigation.navigate('Signup1')
  const handleSignin = () => navigation.navigate('Login')

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    return setPassword = (e.target.value);
  };
  const handleConfirm = (e) => {
    return setConfirmpw(e.target.value);
  };
  return (
       <View style={styles.container}>
       <View style={styles.headerContainer}><Text style={styles.topTitle}>Looking for Jobs?{'\n'}
       Want to provide services?{'\n'}
       {'\n'}Join us</Text></View>

          <Image source={brand} style={styles.mainBrand}/>

              <Text style={styles.label}>{userName}</Text>
              <TextInput
                style={styles.centerInput}
                onChangeText={(text) => setUsername(text)}
              />

            <Text style={styles.label}>{passWord}</Text>
            <TextInput
                 style={styles.centerInput}
                        secureTextEntry={true}/>
               
            <Text style={styles.label}>{confirm}</Text>
            <TextInput
                 style={styles.centerInput}
                        secureTextEntry={true}/>
     
            <View style={buttonContainer.container}>
            <Button onPress={handleSignup} title={btnSignup} color='gray'/>
      
            <View style={signupContainer.container}>
              <Text style={styles.normalText}>Already have an account? </Text>
              <Text style={styles.activeLink} onPress={handleSignin}>Sign in</Text>
            </View>
            </View>
</View>

  );
}
export default SignupScreen;
