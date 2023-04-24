import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home';
const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Welcome' }}
				/>
				{/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
