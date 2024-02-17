import { View, Image, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles, notif, jobs } from './styles';
import brand from "../../assets/images/darkshotLogo2.png";

const Notification = () => {
  const header = "notification";
  const name = "Employer name*";
  const position = "Hiring Manager";
  const button1 = "read invite";
  const button2 = "view email";
  const button3 = "view job";

  const description1 = "Sent you a job interview invitation";
  const description3 = "Congratulations for passing the initial interview. Wait for the invitation link for your final interview.";
  const description4 = "We would like to formally invite you for a Zoom job interview to get to know you a bit better.";
  const description5 = "Congratulations! You passed the final interview. We will notify you within 2 working days of your next process.";

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
            <View style={notif.mainContainer}>
                  <View style={notif.circle}>
                  </View>

            <View style={notif.infoContainer}>
                  <Text style={notif.nameStyle}>{name}</Text>
                        <View style={notif.position}>{position}</View>
                              <Text style={notif.description}>{description1}</Text>
                              <View style={notif.fitToText}>
                              <TouchableOpacity style={notif.button}>{button1}
                              </TouchableOpacity>
                              </View>
                        </View>
            </View>

            <View style={notif.mainContainer}>
                  <View style={notif.circle}></View>
                        <View style={notif.infoContainer}>
                              <Text style={notif.nameStyle}>{name}</Text>
                              <View style={notif.position}>{position}</View>
                              <Text style={notif.description}>Sent you a <Text style={notif.bold}>Graphics Designers</Text> Job {'\n'}Interview invitation</Text>
    
                              <View style={notif.fitToText}>
                              <TouchableOpacity style={notif.button2}>{button2}
                              </TouchableOpacity>
                        </View>
                  </View>
            </View>

            <View style={notif.mainContainer}>
                  <View style={notif.circle}></View>
                  <View style={notif.infoContainer}>
                        <Text style={notif.nameStyle}>{name}</Text>
                        <View style={notif.position}>{position}</View>
                              <Text style={notif.description}>{description3}</Text>
                                    <View style={notif.fitToText}>
                                    <TouchableOpacity style={notif.button3}>{button3}
                                    </TouchableOpacity>
                                    </View>
                        </View>
                  </View>
                  <View style={notif.mainContainer}>
                        <View style={notif.circle}></View>
                              <View style={notif.infoContainer}>
                                    <Text style={notif.nameStyle}>{name}</Text>
                              <View style={notif.position}>{position}</View>
                                    <Text style={notif.description}>{description4}</Text>
                              <View style={notif.fitToText}>
                              <TouchableOpacity style={notif.button3}>{button3}
                              </TouchableOpacity>
                              </View>
                        </View>
                  </View>
            <View style={notif.mainContainer}>
                  <View style={notif.circle}></View>
                        <View style={notif.infoContainer}>
                              <Text style={notif.nameStyle}>{name}</Text>
                                    <View style={notif.position}>{position}</View>
                                          <Text style={notif.description}>{description5}</Text>
                                     <View style={notif.fitToText}>
                                          <TouchableOpacity style={notif.button4}>{button2}
                                          </TouchableOpacity>
                                    </View>
                        </View>
            </View>
            </View>

    </ScrollView>
)
}
export default Notification;