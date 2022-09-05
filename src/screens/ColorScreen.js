import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const randomRgbColValue = () => {
	return `${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)}`;
};

const randomRgb = () => {
	return `rgb(${randomRgbColValue()})`;
};

const ColorScreen = () => {
	const [rgbColors, setRgbColors] = useState([]);

	return (
		<View>
			<Button title="Add a color" onPress={() => setRgbColors([...rgbColors, randomRgb()])} />
			<FlatList
				keyExtractor={item => {
					item;
				}}
				data={rgbColors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorScreen;
