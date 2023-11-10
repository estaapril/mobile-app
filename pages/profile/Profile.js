import { View, Image, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import NavBar from "../../components/shared/navbar/NavBar";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./styles"; // Import styles as a default import

import brand from "../../assets/images/brand-dark.png";

const Profile = () => {
  const header = "current openings";
  const subHeader = "(home,based,hybrid)";
  const jobFilters = [
    { name: "all" },
    { name: "design & creative" },
    { name: "sales & marketers" },
    { name: "writing & translation" },
  ];
  return (
    <View style={styles.container}>
      {/* Apply styles.container here */}
      <Image source={brand} style={styles.brand} />
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.subHeader}>{subHeader}</Text>
      <View style={styles.jobFilterContainer}>
        {jobFilters.map((job) => {
          return (
            <TouchableOpacity style={styles.jobFilterButton}>
              {job.name}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Profile;
