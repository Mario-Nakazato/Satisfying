import { useState } from 'react'
import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import InputText from '../components/InputText'
import Label from '../components/Label'
import Button from '../components/Button'
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from '../database/Config'

const RecoverPassword = (props) => {
    const [email, setEmail] = useState()
    const [corEmailInvalido, setCorEmailInvalido] = useState('transparent')

    const validateEmail = () => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        setCorEmailInvalido('#FD7979')
        return emailRegex.test(email)
    }

    const sendPassword = () => {
        setCorEmailInvalido('transparent')
        sendPasswordResetEmail(auth, email)
            .then(() => {
                props.navigation.pop()
                console.log("RecoverPassword Enviar")
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log("RecoverPassword", errorCode, errorMessage)
            })
    }

    const Cadastrar = () => {
        if (validateEmail())
            sendPassword()
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <Label value='E-mail' color='white' fontSize={16} />
                <InputText value={email} placeholder='email@provedor.com' color='#3F92C5' width={512} height={32}
                    fontSize={12}
                    onChangeText={setEmail} keyboardType='email-address' />
                <Label value='E-mail parece ser inválido' color={corEmailInvalido} fontSize={14} paddingBottom={8} />
            </View>
            <Button value='RECUPERAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32}
                size={0} fontSize={16} Execute={Cadastrar} />
        </View>
    )
}

export default RecoverPassword