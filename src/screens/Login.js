import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const estilos = StyleSheet.create({
    conteinerTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        Texto: {
            color: 'white',
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 48,
        },
    },
    conteinerEntrar: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    conteinerOp: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 52,
    },
})

const Login = (props) => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

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
                <Icon style={{ paddingLeft: 16 }} name='emoticon-happy-outline' size={48} color='white' />
            </View>
            <View style={estilos.conteinerEntrar}>
                <View>
                    <Label value='E-mail' color='white' fontSize={16} />
                    <InputText value={email} placeholder='email@provedor.com' color='#3F92C5' width={512} height={32}
                        fontSize={12}
                        onChangeText={setEmail} keyboardType='email-address' />
                </View>
                <View>
                    <Label value='Senha' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={senha} placeholder='********' color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setSenha} keyboardType='visible-password' />
                    <Label value='E-mail e/ou senha inválidos.' color='#FD7979' fontSize={14} paddingBottom={8} />
                </View>
                <Button value='Entrar' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                    Execute={Entrar} />
            </View>
            <View style={estilos.conteinerOp}>
                <Button value='Criar minha conta' color='white' iconColor='white' backgroundColor='#419ED7' width={512} height={24} size={0}
                    fontSize={14} Execute={CriarMinhaConta} />
                <Button value='Esqueci minha senha' color='white' iconColor='white' backgroundColor='#B0CCDE' width={512} height={24} size={0}
                    fontSize={14} Execute={EsqueciMinhaSenha} />
            </View>
        </View>
    )
}

export default Login