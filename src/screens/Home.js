import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import EventList from '../components/EventList'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'

const linkImagem =
	'https://boo-prod.b-cdn.net/questions/6503684e231cffaf85bde63f/16947221287341967f15b1de81112cca71f27fcb18f8e.jpg?d=400x400'

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
		<View style={ScreensSS.conteiner}>
			<InputTextPaper placeholder='Insira o termo de busca...'
				textColor='black' placeholderTextColor='#8B8B8B'
				left={<TextInput.Icon style={{ right: 12 }} icon='magnify' color='#8B8B8B' />}
				contentStyle={{ right: 20, fontFamily: 'AveriaLibre-Regular' }} backgroundColor='white' width={768} height={24} fontSize={12} />
			<EventList events={eventos} Execute={Card} />
			<Button value='NOVA PESQUISA' color='white' iconColor='white' backgroundColor='#37BD6D' width={768} height={32}
				size={0} fontSize={16} Execute={NovaPesquisa} />
		</View>
	)
}

export default Home