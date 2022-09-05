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
			<Button onPress={() => navigation.navigate("Colors")} title="Color box creator" />
			<Button onPress={() => navigation.navigate("ColorPicker")} title="Color picker" />
			<Button onPress={() => navigation.navigate("TextInput")} title="Text input" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
