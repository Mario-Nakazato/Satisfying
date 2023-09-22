import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'
import Label from '../components/Label'

const estilos = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
})

const Collect = (props) => {
    const Voltar = () => {
        props.navigation.pop()
    }
    const Votar = () => {
        props.navigation.push('ThanksParticipation')
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Button iconColor='white' backgroundColor='#372775' width={32} height={32} Execute={Voltar} />
            </View>
            <Label value='O que você achou do Carnaval 2024 ?' color='white' fontSize={32} numberOfLines={2} />
            <View style={estilos.button}>
                <Button name='emoticon-angry-outline' color='white' iconColor='#D71616' value='Péssimo' size={96} fontSize={32} Execute={Votar} />
                <Button name='emoticon-sad-outline' color='white' iconColor='#FF360A' value='Ruim' size={96} fontSize={32} Execute={Votar} />
                <Button name='emoticon-neutral-outline' color='white' iconColor='#FFC632' value='Neutro' size={96} fontSize={32} Execute={Votar} />
                <Button name='emoticon-happy-outline' color='white' iconColor='#37BD6D' value='Bom' size={96} fontSize={32} Execute={Votar} />
                <Button name='emoticon-excited-outline' color='white' iconColor='#25BC22' value='Excelente' size={96} fontSize={32} Execute={Votar} />
            </View>
        </View>
    )
}

export default Collect