import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import brand from "../../assets/images/darkshotLogo2.png";
import { styles } from "./styles";

const interviewPanel = () => {
  const header = "interview panel";
  const message =
    "The Zoom room is now open. Please get ready with your Zoom application.";
  const title = "join zoom meeting";
  const link =
    "https://us05web.zoom.us/j/85822574845?pwd=ZT5eCbif7Ykh700nFXmuQGlvuabORV.1";
  const title2 = "Meeting ID:";
  const subTitle = "858 2257 4845";
  const title3 = "Passcode:";
  const subTitle2 = "5gKXn5";
  const backButton = "back";

  const interviewLink = () => {
    Linking.openURL(link);
  };
  const back = () => navigation.navigate("Home");
  return (
    <View style={styles.container}>
      <Image source={brand} style={styles.brand} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{header}</Text>
      </View>
      <View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.message2}>{title}</Text>
          <TouchableOpacity onPress={interviewLink}>
            <Text style={styles.message3}>{link}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.meetingContainer}>
          <Text style={styles.title2}>{title2} </Text>
          <Text style={styles.subTitle}>{subTitle} </Text>
        </View>
        <View style={styles.passcodeContainer}>
          <Text style={styles.title2}>{title3}</Text>
          <Text style={styles.subTitle}>{subTitle2}</Text>
        </View>

        <View style={styles.backButton}>
          <TouchableOpacity onPress={back}>
            <View style={styles.backContainer}>
              <Text style={styles.backButton}>{backButton}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default interviewPanel;
