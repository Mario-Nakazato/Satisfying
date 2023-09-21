import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import BoxInput from '../components/BoxInput'
import Button from '../components/Button'
import Erro from '../components/Erro'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})

const NewAccount = (props) => {
    const Cadastrar = () => {
        props.navigation.pop()
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerCadastrar}>
                <BoxInput value='email@provedor.com' Text='E-mail' />
                <BoxInput value='****' Text='Senha' />
                <BoxInput value='****' Text='Repetir Senha' />
                <Erro Erro='O campo repetir senha difere da senha' />
            </View>
            <View style={estilos.conteiner}>
                <Button Text='CADASTRAR' Execute={Cadastrar} BackgroundColor='#37BD6D' FontSize={16} Width={512} Height={32} />
            </View>
        </View>
    )
}

export default NewAccount