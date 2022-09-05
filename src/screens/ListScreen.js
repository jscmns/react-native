import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const data = [
	{ name: "Joe Saward", age: "70", key: "1" },
	{ name: "Donna Summer", age: "86", key: "2" },
	{ name: "Steve Miller", age: "69", key: "3" },
	{ name: "Laura Branigan", age: "74", key: "4" },
	{ name: "John Lennon", age: "Deceased", key: "5" },
	{ name: "Christina Aguilera", age: "45", key: "6" },
	{ name: "Peter Griffin", age: "48", key: "7" },
	{ name: "Jennifer Aniston", age: "57", key: "8" }
];

const ListScreen = () => {
	return (
		<FlatList
			keyExtractor={person => person.key}
			data={data}
			renderItem={e => <Text style={styles.textStyle}>{e.item.name} - {e.item.age}</Text>}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;
