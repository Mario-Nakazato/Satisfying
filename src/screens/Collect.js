import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'
import Label from '../components/Label'
import { useSelector } from "react-redux"
import { db } from '../database/Config'
import { doc, updateDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux/es/exports'
import { reducerSetEvento } from '../redux/EventSlice'

const Collect = (props) => {
    const { evento } = useSelector((state) => state.evento)
    
    const dispatch = useDispatch()
    let votos = evento.votes.slice()
    
    const Voltar = () => {
        props.navigation.pop()
    }
    const Votar = (op) => {
        votos[op]++
        const eventRef = doc(db, "events", evento.id)
        updateDoc(eventRef, {
            votes: votos,
        })
            .then((docRef) => {
                let e = Object.assign({}, evento)
                e.votes = votos
                dispatch(reducerSetEvento({ evento: JSON.stringify(e) }))
                props.navigation.push('ThanksParticipation')
            })
            .catch((error) => {
                console.log('Erro ao atualizar voto: ', error)
            })
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Button iconColor='white' backgroundColor='#372775' width={32} height={32} Execute={Voltar} />
            </View>
            <Label value={'O que você achou do ' + evento.name + ' ?'} color='white' fontSize={32} numberOfLines={2} />
            <View style={estilos.button}>
                <Button name='emoticon-angry-outline' color='white' iconColor='#D71616' value='Péssimo' size={96} fontSize={32} Execute={() => Votar(0)} />
                <Button name='emoticon-sad-outline' color='white' iconColor='#FF360A' value='Ruim' size={96} fontSize={32} Execute={() => Votar(1)} />
                <Button name='emoticon-neutral-outline' color='white' iconColor='#FFC632' value='Neutro' size={96} fontSize={32} Execute={() => Votar(2)} />
                <Button name='emoticon-happy-outline' color='white' iconColor='#37BD6D' value='Bom' size={96} fontSize={32} Execute={() => Votar(3)} />
                <Button name='emoticon-excited-outline' color='white' iconColor='#25BC22' value='Excelente' size={96} fontSize={32} Execute={() => Votar(4)} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
})

export default Collect