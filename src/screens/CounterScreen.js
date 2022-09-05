import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = ({ navigation }) => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Text style={styles.text}>Counter</Text>
			<Button onPress={() => setCounter(counter + 1)} title="Increase count" />
			<Button onPress={() => setCounter(counter - 1)} title="Decrease count" />
			<Text style={styles.text}>{counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default CounterScreen;
