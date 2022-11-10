import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import TodoList from '../screen/TodoList';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}