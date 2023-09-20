import { View, Text, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'

const estilos = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
    },
})

const ThanksParticipation = (props) => {
    return (
        <View style={ScreensSS.conteiner}>
            <Text style={estilos.text}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.text}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

export default ThanksParticipation