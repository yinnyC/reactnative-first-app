import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoalItem = (props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={props.onDelete.bind(this, props.id)}
		>
			<View style={styles.listItem} on>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
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
