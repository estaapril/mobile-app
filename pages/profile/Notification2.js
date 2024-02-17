import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles, notif2, jobs } from './styles';
import brand from '../../assets/images/darkshotLogo2.png';

import logo from '../../assets/images/darkshotLogo.png';
const Notification2 = () => {
    const header = "notification";
    const backButton = "back";
    const greetings = "Good Day! This is Trizzia from Darkshot.";
    const message = "Your application has been shortlisted for this position. Here are the details of your interview. September 30, 2023, between 3:00 p.m and 6:00 p.m. MNL time.";
    const id = "Zoom id: 23mxcknx";
    const pin = "Zoom pin: 124232";
    const link = "Zoom link: https://zoom.us";
    const note = "Note: Please be ready 10 minutes before the scheduled time.";
    const click = "Click on your response to this email.";
    const buttonYes = "Yes, I am available";
    const buttonNo = "No, I am not available";
    const buttonSubmit = "submit response";

    const back = () => navigation.navigate('Notification');
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={brand} style={styles.brand}/>
        <View style={styles.titleContainer}>
          <Text style={jobs.title}>{header}</Text>
          </View>
          <View style={styles.lineContainer}>
                  <View style={styles.line} />
                  </View>
                  
          <View style={notif2.mainContainer}>
            <View style={notif2.logoContainer}>
            <Image source={logo} style={notif2.logo}></Image>
            </View>

            <View style={notif2.messageContainer}>
            <Text style={notif2.greetingTitle}>{greetings}</Text>
            <Text style={notif2.message}>{message}</Text>
            <Text style={notif2.id}>{id}</Text>
            <Text style={notif2.pin}>{pin}</Text>
            <Text style={notif2.link}>{link}</Text>
            <Text style={notif2.message}>{note}</Text>
          </View>
          </View>
            <Text style={notif2.click}>{click}</Text>


    <View style={notif2.mainContainer3}>
        <View style={notif2.column}>
          <TouchableOpacity style={notif2.button}>{buttonYes}
          </TouchableOpacity>
          <TouchableOpacity style={notif2.button2}>{buttonNo}
          </TouchableOpacity>
          </View>

          <TouchableOpacity style={notif2.button3}>{buttonSubmit}
          </TouchableOpacity>
          <View style={notif2.button3}>
          </View>
        
          <TouchableOpacity onPress={back}>
            <Text style={notif2.backButton}>{backButton}</Text>
          </TouchableOpacity>
        

    </View>
    </View>
    </ScrollView>
  )
}

export default Notification2;