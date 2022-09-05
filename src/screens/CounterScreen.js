import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
	if (action.type === "increase") {
		return { count: state.count + 1 };
	}
	if (action.type === "decrease") {
		return { count: state.count - 1 };
	}
};

const CounterScreen = ({ navigation }) => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<View>
			<Text style={styles.text}>Counter</Text>
			<Button
				onPress={() => dispatch({ type: "increase", payload: state.count })}
				title="Increase count"
			/>
			<Button
				onPress={() => dispatch({ type: "decrease", payload: state.count })}
				title="Decrease count"
			/>
			<Text style={styles.text}>{state.count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default CounterScreen;
