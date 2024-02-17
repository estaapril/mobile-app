import React, { useState } from 'react';
import { View, Image, Button, Text, TouchableOpacity, TextInput } from 'react-native';
import { buttonContainer, logoContainer, styles } from '../registration/styles';
import brand from '../../assets/images/darkshotLogo2White.png';
import brand2 from '../../assets/images/darkshotLogoWhite.png';

const Signup1 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleStep1 = () => navigation.navigate('Signup1')
const handleStep2 = () => navigation.navigate('Signup2')
const handleDesign = () => navigation.navigate('')
const handleProceed = () => navigation.navigate('Signup2')

  const header = "profile";
  const header2 = 'skills';
  const subHeader2 = "(Choose at least 2 skills)";
  const title = "design & creative";
  const title2 = "sales and marketer";
  const title3 = "writing and translation";
  const proceed = "proceed to step 2";
  const list = [
    { name: "graphic designers" },
    { name: "logo designers" },
    { name: "video post editing specialists" },
    { name: "sound editors" },
    { name: "video producers" },
    { name: "motion graphics designers" },
    { name: "2d animators" },
    { name: "video editors" },
    { name: "voice-over artists" },
    { name: "illustrators" },
    { name: "brand identity & guideline freelancers" },
  ];

  const onChangeText = (newName) => {
    setName(newName); }
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  }
  const onChangeNumber = (newNumber) => {
    setNumber(newNumber);
  }
  const onChangeUsername = (newUsername) => {
    setUsername(newUsername);
  }
  const onChangePassword = (newPassword) => {
    setPassword(newPassword);
  }

  return (
    <View style={styles.container}>
      <View style={logoContainer.container}>
        <View style={logoContainer.subContainer}>
          <Image source={brand2} style={styles.brand2} />
            <Image source={brand} style={styles.brand} />
        </View>
        <View style={buttonContainer.buttonContainer}>
          <Button onPress={handleStep1} title="step 1" color='gray' />
          <Button onPress={handleStep2} title="step 2" color='gray'/>
        </View>
        <View style={logoContainer.miniContainer}>
          <Text style={styles.header}>{header}</Text>
          <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        </View>
        </View>
        <View style={logoContainer.miniContainer2}>
          <View style={styles.subProfile}>
            <Text style={styles.label}>applicant name</Text>
            <TextInput style={[styles.inputField, { color: 'white' }]}
              onChangeText={onChangeText}
              value={name}
              placeholder="John C. Doe"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.subProfile}>
            <Text style={styles.label}>email</Text>
              <TextInput style={[styles.inputField, { color: 'white' }]}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="johndoe@gmail.com"
              placeholderTextColor="gray"
              />
          </View>
          <View style={styles.subProfile}>
           <Text style={styles.label}>contact number</Text>
            <TextInput style={[styles.inputField, { color: 'white' }]}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="09**********"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.subProfile}>
            <Text style={styles.label}>username</Text>
              <TextInput style={[styles.inputField, { color: 'white' }]}
              onChangeText={onChangeUsername}
              value={username}
              placeholder="johncd"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.subProfile}>
            <Text style={styles.label}>password</Text>
              <TextInput style={[styles.inputField, { color: 'white' }]}
              onChangeText={onChangePassword}
              value={password}
              placeholder="**********"
              placeholderTextColor="gray"
            />
          </View>  
        </View>
        <View style={logoContainer.skillsContainer}>
          <Text style={styles.header}>{header2}</Text>
            <Text style={styles.subHeader2}>{subHeader2}</Text>
        </View>
        <View style={styles.lineContainer2}>
          <View style={styles.line} />
        </View>
        <View style={styles.titlemainContainer}>
          <TouchableOpacity onPress={handleDesign}>
            <View style={styles.titleContainer}>
              <Text style={styles.text}>{title}</Text>
          </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={handleDesign}>
              <Text style={styles.text}>{title2}</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={handleDesign}>
            <Text style={styles.text}>{title3}</Text>
            </TouchableOpacity>
          </View>
        <View style={buttonContainer.skillssubContainer}>
          {list.map((item, index) => (
          <TouchableOpacity key={index} style={buttonContainer.skillsList}>
            <Text style={styles.text2}>{item.name}</Text>
          </TouchableOpacity>
      ))} 
        <View style={buttonContainer.proceedContainer}>
          <TouchableOpacity onPress={handleProceed}>  
            <View style={buttonContainer.proceedButton}>
              <Text style={buttonContainer.proceedButtonText}>{proceed}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
  
};

export default Signup1;

