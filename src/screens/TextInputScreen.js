import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const CounterScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	
	return (
		<View>
			<Text style={styles.text}>Text Input</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={newVal => setName(newVal)}
			/>
			<Text>My name is {name}</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={newVal => setPassword(newVal)}
			/>
			<Text>My password is {password}</Text>
			{password.length < 5 && <Text>Invalid password</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	},
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1
	}
});

export default CounterScreen;
