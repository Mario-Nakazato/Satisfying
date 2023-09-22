import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import { TextInput } from 'react-native-paper' // Escolher entre a versão SearchBar ou Paper
import EventList from '../components/EventList'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import Emoticon from '../components/Button'

const linkImagem =
	'https://boo-prod.b-cdn.net/questions/6503684e231cffaf85bde63f/16947221287341967f15b1de81112cca71f27fcb18f8e.jpg?d=400x400';

const eventos = [
	{
		id: '001',
		nome: 'Evento 1',
		data: '01/01/2021',
		imagem: linkImagem,
	},
	{
		id: '002',
		nome: 'Evento 2',
		data: '02/01/2021',
		imagem: linkImagem,
	},
	{
		id: '003',
		nome: 'Evento 3',
		data: '03/01/2021',
		imagem: linkImagem,
	},
	{
		id: '004',
		nome: 'Evento 4',
		data: '03/01/2021',
		imagem: linkImagem,
	},
]

const estilos = StyleSheet.create({
	searchBarContainer: {
		width: '100%',
		padding: 20,
	},
})

const Home = (props) => {
	const NovaPesquisa = () => {
		props.navigation.push('NewSearch')
	}
	const Card = () => {
		props.navigation.push('SearchActions')
	}
	return (
		<SafeAreaView style={ScreensSS.conteiner}>
			{/* <TextInput style={{ color: 'red' }} label="Insira o termo de busca..." left={<TextInput.Icon icon='magnify' />} /> */}
			<View style={estilos.searchBarContainer}>
				<SearchBar />
			</View>
			<EventList events={eventos} Execute={Card} />
			<Emoticon value='NOVA PESQUISA' color='white' iconColor='white' backgroundColor='#37BD6D' width={768} height={32}
                size={0} fontSize={16} Execute={NovaPesquisa} />
		</SafeAreaView>
	)
}

export default Home