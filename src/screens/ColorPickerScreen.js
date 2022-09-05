import React, { useState, useEffect, useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const reducer = (state, action) => {
	if (action.reset) return { red: 0, green: 0, blue: 0 };
	if (action.payload === 0) return;

	if (action.type === "change_red") {
		return state.red + action.payload > 255 || state.red + action.payload < 0
			? { ...state, alert: true }
			: { ...state, red: state.red + action.payload, alert: false };
	}

	if (action.type === "change_green") {
		return state.green + action.payload > 255 || state.green + action.payload < 0
			? { ...state, alert: true }
			: { ...state, green: state.green + action.payload, alert: false };
	}
	
	if (action.type === "change_blue") {
		return state.blue + action.payload > 255 || state.blue + action.payload < 0
			? { ...state, alert: true }
			: { ...state, blue: state.blue + action.payload, alert: false };
	}

	return state;
};

const ColorPickerScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0, alert: false });

	const [rgbString, setRgbString] = useState(`rgb(${state.red},${state.green},${state.blue})`);

	const [step, setStep] = useState(1);

	useEffect(() => {
		setRgbString(`rgb(${state.red},${state.green},${state.blue})`);
	}, [state]);

	return (
		<View>
			<Button title="Reset RGB" onPress={() => dispatch({ reset: true })} />
			<Button title="Reset step" onPress={() => setStep(1)} />
			<Button title="Increase step" onPress={() => step !== 255 && setStep(step + 1)} />
			<Button title="Decrease step" onPress={() => step !== 1 && setStep(step - 1)} />
			<Text style={styles.text}>Step:</Text>
			<Text>{step}</Text>
			<Text style={styles.text}>Current RGB Value:</Text>
			<Text>{rgbString}</Text>
			{state.alert && <Text>Step too large! Please modify to proceed with operation!</Text>}
			<Button title="More red" onPress={() => dispatch({ type: "change_red", payload: step })} />
			<Button title="Less red" onPress={() => dispatch({ type: "change_red", payload: -step })} />
			<Button
				title="More green"
				onPress={() => dispatch({ type: "change_green", payload: step })}
			/>
			<Button
				title="Less green"
				onPress={() => dispatch({ type: "change_green", payload: -step })}
			/>
			<Button title="More blue" onPress={() => dispatch({ type: "change_blue", payload: step })} />
			<Button
				title="Less blue"
				onPress={() => dispatch({ type: "change_blue", payload: -step })}
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: rgbString
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ColorPickerScreen;
