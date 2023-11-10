import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingInline: "1rem",
    paddingBlock: "2rem",
  },
  header: {
    fontSize: 14,
    color: "#000",
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingTop: 20,
  },
  subHeader: {
    fontSize: 11,
    color: "#000",
    textTransform: "capitalize",
  },
  brand: {
    height: 52,
    width: "100%",
    resizeMode: "contain", // This is equivalent to objectFit: cover
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
  jobFilterContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 2,
    overflow: "scroll",
  },
  jobFilterButton: {
    textTransform: "capitalize",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1, // Add this if you want a border
    padding: 8, // Adjust as needed for your desired padding
    marginVertical: 8, // Adjust as needed
    borderRadius: 4,
    color: "black", // Add text color
  },
});

export const jobs = StyleSheet.create({
  title: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#000",
  },
});
