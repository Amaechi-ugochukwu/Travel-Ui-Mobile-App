import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardScreen from "./src/screen/OnBoardScreen"
import HomeScreen from "./src/screen/HomeScreen";
import DetailsScreen from "./src/screen/DetailsScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions = {{headerShown:false}} >
     
        <Stack.Screen name ="OnBoardScreen" component ={OnBoardScreen}/>
        <Stack.Screen  name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
       

      </Stack.Navigator>

    </NavigationContainer>
  )
}

