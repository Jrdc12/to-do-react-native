import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState('')

	// THIS IS THE NEW STANDARD
	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText)
	}

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal)
		setEnteredGoal('')
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='Your goals'
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button title='ADD GOAL' onPress={addGoalHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},

	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
})
