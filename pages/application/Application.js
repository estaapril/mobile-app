import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import brand from '../../assets/images/darkshotLogo2.png';
import { styles } from '../application/styles';

const Application = () => {
    const header = "graphic designers";
    const subHeader = "(hybrid)";
    const back = "BACK";
    const apply = "apply now";
    const title1 = "Why become a Darkshot Graphic Designer?";
    const title2 = "What does the role require?";
    const title3 = "Typical responsibilities include:";
    const title4 = "Requirements and Skills";
    const title5= "Benefits:";
    const title6 = "Our Hiring Process";
    const description5 = "Pay: PHP 20,000 to PHP 30,000 (depending on experience)";
    const description6 = "Schedule: Monday to Friday, 8h/day";
    const description7 = "Initial Interview";
    const description8 = "Final Interview";
    const description1 = "We are a media production company specializing in event management and digital marketing. Our team of professionals brings a wealth of expertise and dedication to every project, ensuring that every detail is taken care of. With a focus on delivering seamless event planning and execution and high-quality digital marketing services, we are committed to exceeding our clients' expectations.";
    const description2 = "Graphic design skills usually include the use of software such as Adobe Photoshop, Illustrator, and InDesign, but many can also draw and design by hand and use these skills to create rough sketches and mockups.";
    const description3 = [
      { list: "* Liaising with clients to determine their requirements, timescale, and budget" },
      { list: "* Managing client proposals from typesetting through to graphic design, print, and production"},
      { list: "* Working with clients' ideas and managing their expectations"},
      { list: "* Developing concepts, graphics, and layouts, including making decisions about fonts, images, readability, and readers' needs" },
      { list: "* Determining size and arrangement of copy and illustrative material, as well as font style and size."},
      { list: "* Preparing rough drafts of material based on an agreed-upon brief" },
      { list: "* Keeping clients up to date, listening to and acting on feedback, and explaining the rationale behind graphic design decisions" },
      { list: "* Reviewing final layouts and suggesting improvements if required" },
      { list: "* Keeping up to date with the design and software trends" },
    ]
    const description4 = [
      { list: "* Proven graphic design experience" },
      { list: "* A strong portfolio of illustrations or other graphics" },
      { list: "* Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, and Photoshop)" },
      { list: "* A keen eye for aesthetics and details" },
      { list: "* Excellent communication skills" },
      { list: "* Ability to work methodically and meet deadlines" },
      { list: "* A degree in Design, Fine Arts, or a related field is a plus" },
    ]
    const backButton = () => navigation.navigate('Home');
    const applyNow = () => navigation.navigate('');
  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>

      <View style={styles.container}>
        <Image source={brand} style={styles.brand} />
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.subHeader}>{subHeader}</Text>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleFont}>{title1}</Text>
        <Text style={styles.descriptionFont}>{description1}</Text>
      </View>

      <View style={styles.contentContainer2}>
        <Text style={styles.titleFont}>{title2}</Text>
        <Text style={styles.descriptionFont}>{description2}</Text>
      </View>
      <View style={styles.contentContainer3}>
        <Text style={styles.listFont}>{title3}</Text>
        {description3.map((item, index) => (
          <Text key={index} style={styles.listContainer}>{item.list}</Text>
        ))}
        </View>

    <View style={styles.contentContainer4}>
      <Text style={styles.titleFont}>{title4}</Text>
      {description4.map((item, index) => (
        <Text key={index} style={styles.listContainer2}>{item.list}</Text>
      ))}
</View>
      <View style={styles.contentContainer5}>
        <Text style={styles.titleFont}>{title5}</Text>
        <View style={styles.lastContainer}>
          <Text style={styles.lastFont}>{description5}</Text>
          <Text style={styles.lastFont}>{description6}</Text>
        </View>
      </View>

      <View style={styles.contentContainer6}>
        <Text style={styles.titleFont}>{title6}</Text>
        <View style={styles.lastContainer2}>
          <Text style={styles.lastFont}>{description7}</Text>
          <Text style={styles.lastFont}>{description8}</Text>
        </View>
      </View>

        <TouchableOpacity onPress={backButton}>
            <Text style={styles.backButton}>{back}</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={applyNow}>
          <Text style={styles.applyButton}>{apply}</Text>
        </TouchableOpacity>
        </View>
      </View>

</ScrollView>

);

};


export default Application;
