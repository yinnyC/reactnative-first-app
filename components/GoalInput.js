import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState('');
	const goalInputHandler = (enteredGoal) => {
		setEnteredGoal(enteredGoal);
	};
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
			</View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		borderBottomColor: 'grey',
		borderBottomWidth: 2,
		margin: 10,
	},
});
export default GoalInput;
