import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/shared/navbar/NavBar"; // Import your NavBar component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
