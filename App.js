import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Settings from './pages/settings/Settings';
import Chat from './pages/chat/Chat';
import { Kcolors } from './components/Constants';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabScreens() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        headerStyle: { backgroundColor: Kcolors.orange2 },
        tabBarStyle: { backgroundColor: Kcolors.orange1 },
        tabBarActiveTintColor: Kcolors.white5,
      }}
    >
      <BottomTabs.Screen
        name={'Home'}
        component={Home}
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubbles-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name={'settings'}
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'ChatScreen'}
          component={Chat}
          options={{
            headerStyle: { backgroundColor: Kcolors.orange1 },
            headerTintColor: Kcolors.white,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'MyTabNavigator'}
          component={BottomTabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
