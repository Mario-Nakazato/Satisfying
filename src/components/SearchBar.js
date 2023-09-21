import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchBar = () => {
	return (
		<View style={styles.container}>
			<Icon name="search" size={20} color="gray" style={styles.icon} />
			<TextInput
				style={styles.input}
				placeholder="Insira um termo de busca..."
				placeholderTextColor="gray"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		height: 30,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 15,
		color: 'black',
		paddingVertical: 0,
	},
})

export default SearchBar
