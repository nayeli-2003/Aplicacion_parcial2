import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ExampleEvents from "../screens/ExampleEvents";
import Counter from "../screens/Counter";
import AboutMeScreen from "../screens/AboutMeScreen";
import FoodFavScreen from "../screens/FoodFavScreen";
import MoviesFavScreen from "../screens/MoviesFavScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />

      <Stack.Screen
        name="ExampleEvent"
        component={ExampleEvents}
        options={{ title: "Eventos" }}
      />

      <Stack.Screen
        name="Counter"
        component={Counter}
        options={{ title: "Contador" }}
      />

      <Stack.Screen
        name="AboutMe"
        component={AboutMeScreen}
        options={{ title: "Sobre Mí" }}
      />

      <Stack.Screen
        name="FoodFavScreen"
        component={FoodFavScreen}
        options={{ title: "Comidas Favoritas" }}
      />

      <Stack.Screen
        name="MoviesFavScreen"
        component={MoviesFavScreen}
        options={{ title: "Películas Favoritas" }}
      />

    </Stack.Navigator>
  );
}