import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/profile/Home";
import NavBar from "./components/shared/navbar/NavBar"; // Import your NavBar component
import Notification from "./pages/profile/Notification";
import Notification2 from "./pages/profile/Notification2";
import interviewPanel from "./pages/interview/interviewPanel";
import SignupScreen from "./pages/registration/SignupScreen";
import Application from "./pages/application/Application";
import Profile from "./pages/profile/Profile";
import Signup1 from "./pages/registration/Signup1";
import Signup2 from "./pages/registration/Signup2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" lazy={true}>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "",
          tabBarIcon: makeIconRender("bell"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
        tabBarStyle
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: makeIconRender("home"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          tabBarIcon: makeIconRender("account"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
          ></Stack.Screen>
          <Stack.Screen name="Signup1" component={Signup1}></Stack.Screen>
          <Stack.Screen name="Signup2" component={Signup2}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Notification2" component={Notification2} />
          <Stack.Screen name="interviewPanel" component={interviewPanel} />
          <Stack.Screen name="Application" component={Application} />
          <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
