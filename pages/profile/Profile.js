import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import brand from '../../assets/images/darkshotLogo2.png';
import { profileContainer, styles } from '../profile/styles';
import emptyImage from '../../assets/images/emptyImage.png';

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);

    const handleFilePick = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        setSelectedFile(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('');
        } else {
          console.log(err);
        }
      }
    };
    const handleFilePick2 = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        setSelectedFile2(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('');
        } else {
          console.log(err);
        }
      }
    };
    
    const header = "profile";
    const header2 = "skills";
    const header3 = "uploaded files";
    const resume = "resume";
    const upload = "upload your previous works here";
    const name = "renz lagustan";
    const role = "applicant";
    const email = "renzylagustan@yahoo.com";
    const number = "+639123456789";
    const buttons = "choose file";
    const editButton = "edit profile";
    const list = [
      { name: "graphic designers"},
      { name: "logo designers"},
      { name: "video post editing specialists"},
      { name: "sound editors"},
      { name: "video producers"},
      { name: "motion graphics designers"},
      { name: "2D animators"},
      { name: "video editors"},
      { name: "voice-over artists"},
      { name: "illustrators"},
      { name: "brand identity & guideline freelancers"},
    ]
  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
        <Image source={brand} style={styles.brand}></Image>
          <View style={profileContainer.headerContainer}>
            <Text style={profileContainer.header}>{header}</Text>
            <View style={styles.lineContainer3}>
        <View style={styles.line}>
          </View>
        </View>
     
        <View style={profileContainer.applicantMain}>
            <Image source={emptyImage} style={profileContainer.imageContainer}></Image>
            <View style={profileContainer.applicantdetails}>
              <Text style={profileContainer.applicantName}>{name}</Text>
              <Text style={profileContainer.applicantRole}>{role}</Text>
              <Text style={profileContainer.applicantContacts}>{email}</Text>
              <Text style={profileContainer.applicantContacts}>{number}</Text>
            </View>
            </View>

            <View style={styles.lineContainer4}>
              <View style={styles.line}></View>
            </View>
            <View style={profileContainer.headerContainer2}>
              <Text style={profileContainer.header}>{header2}</Text>
              </View>

              <View style={profileContainer.skillsContainer}>
                {list.map((item, index) => (
                  <TouchableOpacity key={index} style={profileContainer.skillsList}>
                    <Text style={profileContainer.text}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.lineContainer5}>
              <View style={styles.line}></View>
            </View>
            <View style={profileContainer.headerContainer3}>
              <Text style={profileContainer.header}>{header3}</Text>
            </View>
      </View>
        <View style={profileContainer.resumeContainer}>
        <Text style={profileContainer.fileText}>{resume}</Text>
</View>
      <View style={profileContainer.choosefileContainer}>
            <TouchableOpacity style={profileContainer.fileInputButton} onPress={handleFilePick}>
              <Text style={profileContainer.buttonStyle}>{buttons}</Text>
            </TouchableOpacity>
            <Text style={profileContainer.fileNamePlaceholder}>{selectedFile ? selectedFile.name : 'my_resume_lastname.docx'}</Text>
          </View>
      <View style={profileContainer.uploadContainer}>
        <Text style={profileContainer.fileText}>{upload}</Text>
      </View>
      <View style={profileContainer.choosefileContainer2}>
        <TouchableOpacity style={profileContainer.fileInputButton} onPress={handleFilePick2}>
          <Text style={profileContainer.buttonStyle}>{buttons}</Text>
        </TouchableOpacity>
        <Text style={profileContainer.fileNamePlaceholder}>{selectedFile2 ? selectedFile2.name : 'portfolio_1.jpg'}</Text>
        </View>

         <View style={profileContainer.imageContainer2}> 
          <Image source={emptyImage} style={profileContainer.imageStyle}></Image>
        </View>
          
          <TouchableOpacity style={profileContainer.buttonContainer} onPress={() => navigation.navigate('')}>
            <Text style={profileContainer.buttonStyle2}>{editButton}</Text>
          </TouchableOpacity>
   
</View>
    </ScrollView>
  )
}

export default Profile;