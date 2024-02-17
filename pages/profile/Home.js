import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { jobs, styles } from "./styles"; 

import brand from "../../assets/images/darkshotLogo2.png";

const Home = () => {
  const header = "current openings";
  const subHeader = "(home based, hybrid)";
  const jobFilters = [
    { name: "all" },
    { name: "design & creative" },
    { name: "sales & marketers" },
    { name: "writing & translation" },
  ];
  const title = "design & creative";
  const list = [
    { name: "graphic designers"},
    { name: "logo designers"},
    { name: "video post editing specialists"},
    { name: "sound editors"},
    { name: "video producers"},
    { name: "motion graphics designers"},
    { name: "2D animators"},
    { name: "video editors"},
    { name: "voice over artists"},
    { name: "illustrators"},
    { name: "brand identity & guideline\nfreelancers"},
  ]
  const moreButton = [];

  for (let i = 0; i < 11; i++) {
    moreButton.push({ name: "learn more" });
  }
  const title2 = "sales and marketers";
  const list2 = [
    { name: "social media marketers"},
    { name: "seo expert"},
    { name: "social media managers"},
    { name: "internet marketers"},
    { name: "marketing strategists"},
    { name: "campaign manager"},
    { name: "influencer marketers"},
  ]
  const moreButton2 = [];

  for (let i = 0; i < 7; i++) {
    moreButton2.push({ name: "learn more" });
  }

  const title3 = "writing and translation";
  const list3 = [
    { name: "article writers"},
    { name: "content writers"},
    { name: "english specialists"},
    { name: "writers"},
    { name: "researchers"},
    { name: "social media content freelancers"},
  ]
  const moreButton3 = [];

  for (let i = 0; i < 6; i++) {
    moreButton3.push({ name: "learn more" });
  }
  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Image source={brand} style={styles.brand} />
        <View style={styles.titleContainer2}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.subHeader}>{subHeader}</Text>
        </View>
      <View style={styles.lineContainer2}>
        <View style={styles.line} />
      </View>
      <View style={styles.jobFilterContainer}>
        {jobFilters.map((job) => {
          return (
            <TouchableOpacity style={styles.jobFilterButton}>
              {job.name}
            </TouchableOpacity>
          );
        })}
     
      </View>
      <View style={styles.titleContainer3}>
        <Text style={jobs.title}>{title}</Text>
          <View style={jobs.columnContainer}>
          <View style={jobs.list}>
          {list.map((list) => (
          <Text style={jobs.list}>
          {list.name}
          </Text> 
        ))}
        <View style={styles.titleContainer4}>
        <Text style={jobs.title}>{title2}</Text>
        </View>
      <View style={jobs.columnContainer2}>
        <View style={jobs.list}>
          {list2.map((list2) => (
            <Text style={jobs.list}>
              {list2.name}
            </Text>
          ))}
          <View style={styles.titleContainer4}>
        <Text style={jobs.title}>{title3}</Text>
        </View>
      <View style={jobs.columnContainer3}>
        <View style={jobs.list}>
          {list3.map((list3) => (
            <Text style={jobs.list}>
              {list3.name}
            </Text>
          ))}
</View>
          
      </View>
      </View>  
      </View>
      </View>


        <View style={jobs.column}>
          {moreButton.map((moreButton) => (
          <TouchableOpacity style={jobs.moreButton}>
            {moreButton.name}
          </TouchableOpacity>
        ))}
        <View style={jobs.column2}>
          {moreButton2.map((moreButton) => (
          <TouchableOpacity style={jobs.moreButton}>
            {moreButton.name}
          </TouchableOpacity>
        ))}
        <View style={jobs.column3}>
          {moreButton3.map((moreButton) => (
          <TouchableOpacity style={jobs.moreButton}>
            {moreButton.name}
          </TouchableOpacity>
        ))}
</View>
          </View>
          </View>
          </View>
      
       
     

</View>
</View>
</ScrollView>
  )}
export default Home;
