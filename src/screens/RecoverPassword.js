import { useState } from 'react'
import { View, Text } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import InputText from '../components/InputText'
import Label from '../components/Label'
import Button from '../components/Button'

const RecoverPassword = (props) => {
    const [email, setEmail] = useState()

    const Cadastrar = () => {
        props.navigation.pop()
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <Label value='E-mail' color='white' fontSize={16} />
                <InputText value={email} placeholder='email@provedor.com' color='#3F92C5' width={512} height={32}
                    fontSize={12}
                    onChangeText={setEmail} keyboardType='email-address' />
                <Label value='E-mail parece ser inválido' color='#FD7979' fontSize={14} paddingBottom={8} />
            </View>
            <Button value='RECUPERAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32}
                size={0} fontSize={16} Execute={Cadastrar} />
        </View>
    )
}

export default RecoverPassword