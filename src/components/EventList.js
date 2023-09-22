import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import EventItem from './EventItem'

const EventList = props => {
	return (
		<View style={styles.container}>
			<FlatList
				data={props.events}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={props.Execute}>
						<EventItem nome={item.nome} data={item.data} imagem={item.imagem} />
					</TouchableOpacity>
				)}
				keyExtractor={item => item.id}
				horizontal={true}></FlatList>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 180,
	},
})

export default EventList
