import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../database/Config'

const estilos = StyleSheet.create({
    conteinerTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    const [corInvalido, setCorInvalido] = useState('transparent')

    const validateEmail = () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        setCorInvalido('#FD7979')
        return emailRegex.test(email)
    }

    const validateInputs = () => {
        if (!validateEmail()) {
            setCorInvalido('#FD7979')
            return false
        }
        setCorInvalido('transparent')
        return true
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("Login", user)
                props.navigation.push('Drawer')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log("Login", errorCode, errorMessage)
                setCorInvalido('#FD7979')
            })
    }

    const Entrar = () => {
        if (validateInputs())
            signIn()
        setEmail('')
        setSenha('')
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
                <Label value='Satisfying.you' color='white' fontSize={48} />
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
                    <Label value='E-mail e/ou senha inválidos.' color={corInvalido} fontSize={14} paddingBottom={8} />
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