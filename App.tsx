import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';
import { GlobalStorage } from './src/context/GlobalContext';


export default function App() {

  return (
    <GlobalStorage >
      <NavigationContainer>
        <StatusBar backgroundColor="#000" style='light' translucent />
        <Routes />
      </NavigationContainer>
    </GlobalStorage>
  );
}


