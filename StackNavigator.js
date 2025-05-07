import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import LoginScreen from "./screens/login";
import OnboardingScreen from "./screens/onboarding";
import SignupScreen from "./screens/signup";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
      <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="screens/HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
