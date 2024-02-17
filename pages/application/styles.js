import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
      },
      scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
      },
      lineContainer: {
        position: 'relevant',
        top: 5,
        left: 12,
        marginRight: 348,
      },
      line: {
        height: 5,
        backgroundColor: 'black',
      },
      container2: { //button container
        marginBottom: 50,
        bottom: -180,
      },
      brand: {
        // top: 50,
        // height: 100,
        // width: 'auto',
        // resizeMode: "contain", 
        // alignItems: "center",
        // justifyContent: "center",
        top: 50,
        height: 100,
        width: 'auto',
        resizeMode: "contain", 
        alignItems: "center",
        justifyContent: "center",
    },
    header: { // graphic designers
    top: 52,
    fontSize: 20,
    color: "#000",
    textTransform: "capitalize",
    fontWeight: "bold",
      },
      subHeader: {  // hybrid
        fontSize: 13,
        color: "#000",
        textTransform: "uppercase",
        top: 50,
      },
      mainHeader: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      mainsubHeader: {
        fontSize: 10,
      },
      listTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: "1rem",
      },
      list: {
        marginLeft: "1rem",
        fontSize: 10,
        marginBottom: -8,
      },
      listTitle2: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    backButton: {
      fontSize: 17,
      color: 'black',
      textTransform: 'uppercase',
      fontWeight: "bold",
      position: 'absolute',
      left: 19,
      top: -1168,
    },
      backContainer: {
      borderColor: 'black',
      borderWidth: 5,
    },
    contentContainer: { // for title1 and description1
      backgroundColor: '#fff',
      top: 80,
      paddingHorizontal: 10,
    },
    contentContainer2: {  // for title2 and description2
      backgroundColor: '#fff',
      top: 80,
      paddingHorizontal: 10,
    },
    contentContainer3: {  // for title3
      backgroundColor: '#fff',
      top: 80,
      paddingLeft: 30,
      paddingRight: 10,
    },
    contentContainer4: {  // for title4
      backgroundColor: '#fff',
      top: 120,
      paddingHorizontal: 10,
    },
    contentContainer5: {  // for title5
      backgroundColor: '#fff',
      top: 160,
      paddingHorizontal: 10,
    },
    contentContainer6: {  // for title5
      backgroundColor: '#fff',
      top: 210,
      paddingHorizontal: 10,
    },
    listContainer: {  // for typical responsibilities
      backgroundColor: '#fff',
      top: 20,
      left: 10,
      marginRight: 10,
    },
    listContainer2: {  // for requirement and skills
      backgroundColor: '#fff',
      top: 20,
      left: 10,
      marginRight: 10,
    },
    titleFont: {  // ex why become a darkshot graphic designer?
      fontSize: 16,
      fontWeight: 'bold',
    },
    descriptionFont: {
      fontSize: 14,
      top: -5,
      paddingVertical: 20,
    },
    listFont: { // for title3
      fontSize: 15,
      fontWeight: 'bold',
    },
    lastContainer: {  // for the description under benefits
      backgroundColor: '#fff',
      top: 20,
      paddingHorizontal: 10,
      rowGap: 10,
    },
    lastContainer2: {  // for the description under hiring process
      backgroundColor: '#fff',
      top: 20,
      paddingHorizontal: 10,
      rowGap: 10,
    },
    lastFont: { // // for the description under benefits and hiring process
      fontSize: 15,
    },
    applyButton: {
      fontSize: 16,
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: '600',
      backgroundColor: 'black',
      textAlign: 'center',
      paddingVertical: 10,
      bottom: -40,
      right: -90,
    },
    buttonContainer: {
        bottom: -200,
        paddingHorizontal: 120,
        height: 120,
        alignContent: 'flex-end',
        marginTop: 60,
    }
})
