import { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
} from 'react-native'

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('')
	const [goals, setGoals] = useState([])

	function goalInputHandler(enteredText) {
		setEnteredGoal(enteredText)
	}

	function addGoalHandler() {
		setGoals((currentGoals) => [...currentGoals, enteredGoal])
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your goals'
					onChangeText={goalInputHandler}
				/>
				<Button title='ADD GOAL' onPress={addGoalHandler} />
			</View>

			<View style={styles.goalsContainer}>
				<ScrollView>
					<Text>List of goals</Text>

					{goals.map((goal, index) => (
						<View style={styles.goalItem} key={index}>
							<Text style={styles.goalText}>{goal}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 55,
		paddingHorizontal: 16,
	},

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

	goalsContainer: {
		flex: 5,
	},

	goalItem: {
		padding: 8,
		borderRadius: 6,
		borderWidth: 1,
		backgroundColor: '#5e0acc',
		margin: 8,
	},

	goalText: {
		color: 'white',
	},
})
