import { View, Text, StyleSheet } from 'react-native'
import BoxInput from '../components/BoxInput'
import Button from '../components/Button'
import Erro from '../components/Erro'
import ScreensSS from '../styles/ScreensSS'
import Icon from 'react-native-vector-icons/MaterialIcons'

const estilos = StyleSheet.create({
    conteinerTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 512,
        Texto: {
            color: 'white',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 48,
        },
    },
    conteinerEntrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    conteinerOp: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
    },
})

const Login = (props) => {
    const Entrar = () => {
        props.navigation.push('Drawer')
    }
    const CriarMinhaConta = () => {
        props.navigation.push('NewAccount')
    }
    const EsqueciMinhaSenha = () => {
        props.navigation.push('RecoverPassword')
    }
    
    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerTitulo}>
                <Text style={estilos.conteinerTitulo.Texto}>Satisfying.you</Text>
                <Icon name='sentiment-satisfied' size={64} color='white' />
            </View>
            <View style={estilos.conteinerEntrar}>
                <BoxInput value='email@provedor.com' Text='E-mail' />
                <BoxInput value='********' Text='Senha' />
                <Erro Erro='E-mail e/ou senha inválidos.' />
                <Button Text='Entrar' Execute={Entrar} BackgroundColor='#37BD6D' FontSize={16} Width={512} Height={32} />
            </View>
            <View style={estilos.conteinerOp}>
                <Button Text='Criar minha conta' Execute={CriarMinhaConta} BackgroundColor='#419ED7' FontSize={14} Width={512} Height={24} />
                <Button Text='Esqueci minha senha' Execute={EsqueciMinhaSenha} BackgroundColor='#B0CCDE' FontSize={14} Width={512} Height={24} />
            </View>
        </View>
    )
}

export default Login