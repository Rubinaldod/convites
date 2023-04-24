import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styles from './style';
export default function Home() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Homeaaee</Text>
			</View>
		</SafeAreaView>
	);
}
