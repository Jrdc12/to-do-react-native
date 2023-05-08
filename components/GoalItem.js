import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#5e0acc' }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	goalItem: {
		borderRadius: 6,
		borderWidth: 1,
		backgroundColor: '#5e0acc',
		margin: 8,
	},

	pressedItem: {
		opacity: 0.5,
	},

	goalText: {
		color: 'white',
		padding: 8,
	},
})
