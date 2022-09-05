import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Image Screen</Text>
			<ImageDetail image={require("../../assets/beach.jpg")} title="Beach" score="9"/>
			<ImageDetail image={require("../../assets/forest.jpg")} title="Forest" score="6"/>
			<ImageDetail image={require("../../assets/mountain.jpg")} title="Mountain" score="4"/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ImageScreen;
