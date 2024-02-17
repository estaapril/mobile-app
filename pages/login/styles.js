import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBlock: 16,
        backgroundColor: "black",
        marginLeft: 8,
        marginRight: 1,
    },
    headerContainer: {
        marginRight: 80,
        marginLeft: 70,
        marginTop: 40,
        backgroundColor: "black",
        height: 180,
    },
    mainBrand: {
        marginTop: 50,
        height: 75,
        width: 150,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 50, 
        alignSelf: 'center',
        tintColor: 'white',
      },
    brand: { 
        height: 75,
        width: "100%",
        resizeMode: "contain", 
        alignItems: "center",
        justifyContent: "center",
        tintColor: 'white',
    },
    brand2: { 
        height: 75,
        width: "100%",
        resizeMode: "contain", 
        alignItems: "center",
        justifyContent: "center",
        tintColor: 'white',
        marginTop: 120,
    },
    label: {        //login label (username and password) 
        fontSize: 10.5,
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 30,
        alignItems: 'stretch', 
        color: 'white',
      },
      centerInput: {
        width: '65%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1.5,
        marginBottom: 4,
        paddingHorizontal: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
      },
      normalText: {
        fontSize: 10,
        fontWeight: '100',
        marginBottom: 10,
        textAlign: 'left',
        justifyContent: 'left',
        alignSelf: 'center',
        marginTop: 10,
        color: 'gray',
      },
      activeLink: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'right',
        justifyContent: 'right',
        marginTop: 10,
        color: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    topTitle: {
        fontSize: 26,
        marginBottom: 80,
        color: 'white',
        textAlign: 'left',
      },
});
export const signupContainer = StyleSheet.create({
    container: {
        flexDirection:"row", 
        justifyContent: 'center',
    },
});
export const buttonContainer = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 50,
        color: "black",
        width: '65%',
        alignSelf: 'center',
    }
})
