import { useState, useEffect } from 'react'
import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import EventList from '../components/EventList'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'
import { db } from '../database/Config'
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { useSelector } from "react-redux"

const Home = (props) => {
	const { usuario } = useSelector((state) => state.usuario)
	const [buscar, setBuscar] = useState('')
	const [eventos, setEventos] = useState('')

	const events = collection(db, 'events')

	useEffect(() => {
		const q = query(events, where('user', '==', usuario.email))
		onSnapshot(q, (snapshot) => {
			const evento = []
			snapshot.forEach((doc) => {
				evento.push({
					id: doc.id,
					...doc.data()
				})
			})
			setEventos(evento)
		})
	}, [])

	const NovaPesquisa = () => {
		props.navigation.push('NewSearch')
	}
	const Card = () => {
		props.navigation.push('SearchActions')
	}
	const Buscar = () => {
		if (buscar !== '') {
			const q = query(events, where('user', '==', usuario.email), where('name', '==', buscar))
			onSnapshot(q, (snapshot) => {
				const evento = []
				snapshot.forEach((doc) => {
					evento.push({
						id: doc.id,
						...doc.data()
					})
				})
				setEventos(evento)
			})
		} else {
			const q = query(events, where('user', '==', usuario.email))
			onSnapshot(q, (snapshot) => {
				const evento = []
				snapshot.forEach((doc) => {
					evento.push({
						id: doc.id,
						...doc.data()
					})
				})
				setEventos(evento)
			})
		}
	}
	return (
		<View style={ScreensSS.conteiner}>
			<InputTextPaper placeholder='Insira o termo de busca...' value={buscar} onChangeText={setBuscar}
				onSubmitEditing={Buscar} textColor='black' placeholderTextColor='#8B8B8B'
				left={<TextInput.Icon style={{ right: 12 }} icon='magnify' color='#8B8B8B' />}
				contentStyle={{ right: 20, fontFamily: 'AveriaLibre-Regular' }} backgroundColor='white' width={'90%'} height={24} fontSize={12} />
			<View style={{ height: 144 }}>
				<EventList events={eventos} Execute={Card} />
			</View>
			<Button value='NOVA PESQUISA' color='white' iconColor='white' backgroundColor='#37BD6D' width={'90%'} height={32}
				size={0} fontSize={16} Execute={NovaPesquisa} />
		</View>
	)
}

export default Home