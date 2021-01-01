import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const GoalItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 40,
		backgroundColor: '#ccc',
		borderWidth: 1,
		margin: 10,
	},
});

export default GoalItem;
