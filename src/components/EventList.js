import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import EventItem from './EventItem'
import { useDispatch } from 'react-redux/es/exports'
import { reducerSetEvento } from '../redux/EventSlice'

const EventList = (props) => {
	const dispatch = useDispatch()

	const OnPress = (item) => {
		dispatch(reducerSetEvento({ evento: JSON.stringify(item) }))
		props.Execute()
	}
	return (
		<FlatList
			contentContainerStyle={estilos.contentContainerStyle}
			data={props.events}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => OnPress(item)}>
					<EventItem nome={item.name} data={item.date} imagem={item.image} />
				</TouchableOpacity>
			)}
			keyExtractor={item => item.id}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		/>
	)
}

const estilos = StyleSheet.create({
	contentContainerStyle: {
		alignItems: 'center',
		paddingHorizontal: '3%'
	},
})

export default EventList