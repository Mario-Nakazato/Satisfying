import { useState } from 'react'
import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Txt from '../components/Txt'
import InputText from '../components/InputText'
import Emoticon from '../components/Button'

const NewAccount = (props) => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [repetirSenha, setRepetirSenha] = useState()

    const Cadastrar = () => {
        props.navigation.pop()
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <Txt value='E-mail' color='white' fontSize={16} paddingTop={4} />
                <InputText value={email} placeholder='email@provedor.com' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setEmail} keyboardType='email-address' />
            </View>
            <View>
                <Txt value='Senha' color='white' fontSize={16} paddingTop={4} />
                <InputText value={senha} placeholder='********' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setSenha} keyboardType='visible-password' />
            </View>
            <View>
                <Txt value='Repetir Senha' color='white' fontSize={16} paddingTop={4} />
                <InputText value={repetirSenha} placeholder='********' color='#3F92C5' width={512} height={32} fontSize={12}
                    onChangeText={setRepetirSenha} keyboardType='visible-password' />
                <Txt value='O campo repetir senha difere da senha' color='#FD7979' fontSize={14} />
            </View>
            <Emoticon value='CADASTRAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32}
                size={0} fontSize={16} Execute={Cadastrar} />
        </View>
    )
}

export default NewAccount