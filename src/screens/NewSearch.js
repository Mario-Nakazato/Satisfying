import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

const NewSearch = (props) => {
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [corNomeInvalido, setCorNomeInvalido] = useState('transparent')
    const [corDataInvalida, setCorDataInvalida] = useState('transparent')

    const Imagem = () => {
        console.log('Botão - Câmera/Galeria de imagens')
    }

    const validateInputs = () => {
        const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/

        if (!nome.trim())
            setCorNomeInvalido('#FD7979')
        else
            setCorNomeInvalido('transparent')

        if (!data.match(datePattern))
            setCorDataInvalida('#FD7979')
        else
            setCorDataInvalida('transparent')

        if (!nome.trim() || !data.match(datePattern))
            return false

        return true
    }

    const Cadastrar = () => {
        if (validateInputs())
            props.navigation.pop()
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteinerCadastrar}>
                <View>
                    <Label value='Nome' color='white' fontSize={16} paddingTop={4} />
                    <InputText value={nome} color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setNome} keyboardType='default' />
                    <Label value='Preencha no nome da pesquisa' color={corNomeInvalido} fontSize={12} />
                </View>
                <View>
                    <Label value='Data' color='white' fontSize={16} paddingTop={4} />
                    <InputTextPaper value={data} color='#3F92C5' textColor='#3F92C5'
                        right={<TextInput.Icon style={{ left: 12 }} icon='calendar-month-outline' color='#8B8B8B' />}
                        contentStyle={{ right: 0, fontFamily: 'AveriaLibre-Regular', fontSize: 12 }} backgroundColor='white' width={512}
                        height={32} onChangeText={setData} />
                    <Label value='Preencha a data' color={corDataInvalida} fontSize={12} />
                </View>
                <View>
                    <Label value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Button value='Câmera/Galeria de imagens' color='#939393' iconColor='white' backgroundColor='white' width={256} height={64} size={0} fontSize={16} Execute={Imagem} />
                </View>
            </View>
            <Button value='CADASTRAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Cadastrar} />
        </View>
    )
}

export default NewSearch