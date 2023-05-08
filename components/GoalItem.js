import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem(props) {
	return (
		<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
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
