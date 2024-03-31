import 'react-native-gesture-handler';
import { createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {Home} from '../screens/Home'
import {Welcome} from '../screens/Welcome'

const Stack = createStackNavigator();

type stackNavigation ={
    Home:undefined
    Welcome:undefined
}
export type stackTypes = StackNavigationProp<stackNavigation>
export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}