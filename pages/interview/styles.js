import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      header: {   // Interview Panel
        fontSize: 14,
        color: "#000",
        textTransform: "capitalize",
        fontWeight: "bold",
        paddingTop: 20,
      },
      brand: {
        top: 50,
        height: 100,
        width: 'auto',
        resizeMode: "contain", 
        alignItems: "center",
        justifyContent: "center",
      },
   titleContainer: {   // for the Interview Panel
      marginHorizontal: 20,
      top: 50,
   },
   title: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#000",
    fontWeight: "bold",
  },
  lineContainer: {
    position: 'relevant',
    top: 20,
    left: 20,
    marginRight: 370,
  },
  line: {
    height: 5,
    backgroundColor: 'black',
  },
  messageContainer: {
    flex: 1,
    top: 40,
    paddingHorizontal: 50,
  },
  message: {
    fontSize: 18,
    top: 45,
  },
  message2: { // Join Zoom Meeting
    fontSize: 20,
    fontWeight: 'bold',
    top: 80,
    left: 10,
    textTransform: 'capitalize',
  },
  message3: { // for the link
    fontSize: 18,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    top: 80,
    left: 10,
  },
  title2: { // for the meeting ID and passcode
    fontSize: 20,
    fontWeight: 'bold',
    top: 70,
    textTransform: 'capitalize',
  },
  meetingContainer: {
    flex: 1,
    top: 145,
    paddingHorizontal: 50,
    flexDirection: 'row',
    left: 10,
    },
    passcodeContainer: {
      flex: 1,
      top: 65,
      left: 10,
      paddingHorizontal: 50,
      flexDirection: 'row',
      columnGap: 5,
    },
  subTitle: { // for the meeting id info
    fontSize: 20,
    marginBottom: 50,
    top: 70,
  },
  backButton: {
    fontSize: 17,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: "bold",
    position: 'absolute',
    left: 15,
    top: -50,
  },
  backContainer: {
  }
    })
    