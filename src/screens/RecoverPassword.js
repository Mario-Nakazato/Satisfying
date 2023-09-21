import { View, Text } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import BoxInput from '../components/BoxInput'
import Button from '../components/Button'
import Erro from '../components/Erro'

const RecoverPassword = (props) => {
    const Cadastrar = () => {
        props.navigation.pop()
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <BoxInput value='email@provedor.com' Text='E-mail' />
                <Erro Erro='E-mail parece ser inválido' />
            </View>
            <Button Text='RECUPERAR' Execute={Cadastrar} BackgroundColor='#37BD6D' FontSize={16} Width={512} Height={32} />
        </View>
    )
}

export default RecoverPassword