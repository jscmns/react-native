import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
	return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{props.title}</Text>
      <Image source={props.image} />
      <Text>Score - {props.score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  textBox: {
    paddingVertical: 10,
  }
});

export default ImageDetail;
