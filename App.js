import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [goals, setGoals] = useState([])

	function addGoalHandler(enteredGoal) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoal, key: Math.random().toString() },
		])
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />
					}}
					alwaysBounceHorizontal={false}
				/>
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

	goalsContainer: {
		flex: 5,
	},
})
