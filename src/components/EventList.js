import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import EventItem from './EventItem'

const EventList = (props) => {
	const estilos = StyleSheet.create({
		contentContainerStyle: {
			alignItems: 'center',
			paddingHorizontal: '3%'
		},
	})

	return (
		<FlatList
			contentContainerStyle={estilos.contentContainerStyle}
			data={props.events}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={props.Execute}>
					<EventItem nome={item.nome} data={item.data} imagem={item.imagem} />
				</TouchableOpacity>
			)}
			keyExtractor={item => item.id}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		/>
	)
}

export default EventList
