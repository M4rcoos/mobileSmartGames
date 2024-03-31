import { StatusBar } from 'expo-status-bar';
import{NavigationContainer}from "@react-navigation/native"
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';


export default function App() {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor ="#000"  style='light' translucent  />
    <Routes/>
  </NavigationContainer>
  );
}


