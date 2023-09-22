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

const ModifySearch = (props) => {
    const [nome, setNome] = useState()
    const [data, setData] = useState()

    const Imagem = () => {
        console.log('Botão - Modificar Câmera/Galeria de imagens')
    }
    const Salvar = () => {
        props.navigation.push('Drawer')
    }
    const Excluir = () => {
        console.log('Excluir')
        //props.navigation.push('SearchActions')
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerCadastrar}>
                <View>
                    <Txt value='Nome' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={nome} placeholder='Carnaval 2024' color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setNome} keyboardType='default' />
                </View>
                <View>
                    <Txt value='Data' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={data} placeholder='16/02/2024' color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setData} keyboardType='default' />
                </View>
                <View>
                    <Txt value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Emoticon name='firework' iconColor='#C60EB3' backgroundColor='white' width={256} height={64} size={36} fontSize={0} Execute={Imagem} />
                </View>
            </View>
            <Emoticon value='SALVAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Salvar} />
            <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <Emoticon name='trash-can-outline' color='white' iconColor='white' value='Apagar' size={32} fontSize={14} Execute={Excluir} />
            </View>
        </View>
    )
}

export default ModifySearch