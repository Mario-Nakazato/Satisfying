import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'
import { TextInput } from 'react-native-paper'

const estilos = StyleSheet.create({
    conteinerPesquisa: {
        width: 700,
        height: 128,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    conteinerCard: {
        width: 120,
        height: 120,
        backgroundColor: 'red',
    },
})

const Home = (props) => {
    const NovaPesquisa = () => {
        //props.navigation.push('')
    }
    return (
        <View style={ScreensSS.conteiner}>
            <TextInput style={{ color: 'red' }} label="Insira o termo de busca..." left={<TextInput.Icon icon='magnify' />} />
            <View style={estilos.conteinerPesquisa}>
                <View style={estilos.conteinerCard}></View>
                <View style={estilos.conteinerCard}></View>
                <View style={estilos.conteinerCard}></View>
            </View>
            <Button Text='NOVA PESQUISA' Execute={NovaPesquisa} BackgroundColor='#37BD6D' FontSize={16} Height={32} />
        </View>
    )
}

export default Home