import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [goals, setGoals] = useState([])

	const startAddGoalHandler = () => {
		setModalIsVisible(true)
	}

	const endAddGoalHandler = () => {
		setModalIsVisible(false)
	}

	const addGoalHandler = (enteredGoal) => {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoal, id: Math.random().toString() },
		])
		endAddGoalHandler()
	}

	const deleteGoalHandler = (id) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== id)
		})
	}

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='#a065ec'
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							)
						}}
						alwaysBounceHorizontal={false}
					/>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 55,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
})
