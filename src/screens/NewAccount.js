import { useState } from 'react'
import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../database/Config'

const NewAccount = (props) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetirSenha, setRepetirSenha] = useState()
    const [corInvalido, setCorInvalido] = useState('transparent')
    const [erro, setErro] = useState('')

    const validateEmail = () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        setCorInvalido('#FD7979')
        return emailRegex.test(email)
    }

    const validateInputs = () => {
        if (!validateEmail()) {
            setErro('E-mail parece ser inválido')
            return false
        }

        if (senha !== repetirSenha || !senha.trim() || !repetirSenha.trim()) {
            setErro('O campo repetir senha difere da senha')
            setCorInvalido('#FD7979')
            return false
        }

        setErro('')

        return true
    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("NewAccount erro: ", error)
                setErro('Credencial parece ser inválido')
            })
    }

    const Cadastrar = () => {
        if (validateInputs())
            createUser()
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <Label value='E-mail' color='white' fontSize={16} paddingTop={4} />
                <InputText value={email} placeholder='email@provedor.com' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setEmail} keyboardType='email-address' />
            </View>
            <View>
                <Label value='Senha' color='white' fontSize={16} paddingTop={4} />
                <InputText value={senha} placeholder='********' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setSenha} keyboardType='visible-password' />
            </View>
            <View>
                <Label value='Repetir Senha' color='white' fontSize={16} paddingTop={4} />
                <InputText value={repetirSenha} placeholder='********' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setRepetirSenha} keyboardType='visible-password' />
                <Label value={erro} color={corInvalido} fontSize={14} />
            </View>
            <Button value='CADASTRAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32}
                size={0} fontSize={16} Execute={Cadastrar} />
        </View>
    )
}

export default NewAccount