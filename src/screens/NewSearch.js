import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import BoxInput from '../components/BoxInput'
import ScreensSS from '../styles/ScreensSS'
import Erro from '../components/Erro'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})

const NewSearch = (props) => {
    const Cadastrar = () => {
        props.navigation.push('Drawer')
    }
    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerCadastrar}>
                <BoxInput value='' Text='Nome' />
                <Erro Erro='Preencha no nome da pesquisa' />
                <BoxInput value='' Text='Data' />
                <Erro Erro='Preencha a data' />
                <Button Text='CADASTRAR' Execute={Cadastrar} BackgroundColor='#37BD6D' FontSize={16} Width={512} Height={32} />
            </View>
        </View>
    )
}

export default NewSearch