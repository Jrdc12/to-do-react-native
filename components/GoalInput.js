import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from 'react-native'
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
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
				<TextInput
					style={styles.textInput}
					placeholder='Your goals'
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='ADD GOAL' onPress={addGoalHandler} color='#b180f0' />
					</View>
					<View style={styles.button}>
						<Button title='CANCEL' onPress={props.onCancel} color='#f31282' />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b'
	},

	image: {
		width: 100,
		height: 100,
		margin: 20,
	},

	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},

	button: {
		width: '30%',
		marginHorizontal: 8,
	},

	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
})
