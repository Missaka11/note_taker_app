import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import NoteAddPage from "./pages/NoteAddPage";
import NoteUpdatePage from "./pages/NoteUpdatePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NoteAddPage" component={NoteAddPage} />
        <Stack.Screen name="NoteUpdatePage" component={NoteUpdatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
