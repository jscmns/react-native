import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Home</Text>
			<Button onPress={() => navigation.navigate("Components")} title="Components screen" />
			<Button onPress={() => navigation.navigate("List")} title="List" />
			<Button onPress={() => navigation.navigate("Images")} title="Images" />
			<Button onPress={() => navigation.navigate("Counter")} title="Counter" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
