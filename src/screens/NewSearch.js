import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Txt from '../components/Txt'
import InputText from '../components/InputText'
import Emoticon from '../components/Button'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

const NewSearch = (props) => {
    const [nome, setNome] = useState()
    const [data, setData] = useState()

    const Imagem = () => {
        console.log('Botão - Câmera/Galeria de imagens')
    }
    const Cadastrar = () => {
        props.navigation.push('Drawer')
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerCadastrar}>
                <View>
                    <Txt value='Nome' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={nome} color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setNome} keyboardType='default' />
                    <Txt value='Preencha no nome da pesquisa' color='#FD7979' fontSize={12} />
                </View>
                <View>
                    <Txt value='Data' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={data} color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setData} keyboardType='default' />
                    <Txt value='Preencha a data' color='#FD7979' fontSize={12} />
                </View>
                <View>
                    <Txt value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Emoticon value='Câmera/Galeria de imagens' color='#939393' iconColor='white' backgroundColor='white' width={256} height={64} size={0} fontSize={16} Execute={Imagem} />
                </View>
            </View>
            <Emoticon value='CADASTRAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Cadastrar} />
        </View>
    )
}

export default NewSearch