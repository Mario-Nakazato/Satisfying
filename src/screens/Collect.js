import { View, Text, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Emoticon from '../components/Button'

const estilos = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
    },
    emoticon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
})

const Collect = (props) => {
    const Voltar = () => {
        props.navigation.push('SearchActions')
    }
    const Votar = () => {
        props.navigation.push('ThanksParticipation')
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Emoticon iconColor='white' backgroundColor='#372775' width={32} height={32} Execute={Voltar} />
            </View>
            <Text style={estilos.text}>O que você achou do Carnaval 2024 ?</Text>
            <View style={estilos.emoticon}>
                <Emoticon name='emoticon-angry-outline' color='white' iconColor='#D71616' value='Péssimo' size={96} fontSize={32} Execute={Votar} />
                <Emoticon name='emoticon-sad-outline' color='white' iconColor='#FF360A' value='Ruim' size={96} fontSize={32} Execute={Votar} />
                <Emoticon name='emoticon-neutral-outline' color='white' iconColor='#FFC632' value='Neutro' size={96} fontSize={32} Execute={Votar} />
                <Emoticon name='emoticon-happy-outline' color='white' iconColor='#37BD6D' value='Bom' size={96} fontSize={32} Execute={Votar} />
                <Emoticon name='emoticon-excited-outline' color='white' iconColor='#25BC22' value='Excelente' size={96} fontSize={32} Execute={Votar} />
            </View>
        </View>
    )
}

export default Collect