import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'
import Label from '../components/Label'
import { db } from '../database/Config'
import { collection, doc, updateDoc } from "firebase/firestore"
import { useSelector } from "react-redux"

const estilos = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
})

const Collect = (props) => {

    const { evento } = useSelector((state) => state.evento)
    let Votos = new Array(5).fill(0)

    const Votar = (classe) => {
        Votos[classe]++
        props.navigation.push('ThanksParticipation')
    }

    const Voltar = () => {

        const votacao = {
            'Péssimo': Votos[0],
            'Ruim': Votos[1],
            'Neutro': Votos[2],
            'Bom': Votos[3],
            'Excelente': Votos[4]
        }

        const new_data = {
            'votacao': JSON.stringify(votacao)
        }

        const eventos = collection(db, 'events')
        const id = JSON.parse(evento).id
        const eventData = JSON.parse(evento)
        console.log('ID: ', eventData.date)
        let seila = Date.parse(eventData.date)
        console.log('Data: ', seila.toLocaleString('pt-BR'))
        console.log('Tipo: ', typeof seila)

        updateDoc(doc(eventos, id), new_data)
            .then((docRef) => {
                console.log('Votação atualizada com sucesso: ' + docRef)
                props.navigation.pop()
            })
            .catch((error) => {
                console.log('Erro ao atualizar votação: ', error)
            })
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Button iconColor='white' backgroundColor='#372775' width={32} height={32} Execute={Voltar} />
            </View>
            <Label value='O que você achou do Carnaval 2024 ?' color='white' fontSize={32} numberOfLines={2} />
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

export default Collect