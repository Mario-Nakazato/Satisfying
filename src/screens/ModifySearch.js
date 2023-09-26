import { useState } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

const ModifySearch = (props) => {
    const [nome, setNome] = useState('Carnaval 2024')
    const [seletorData, setSeletorData] = useState(new Date())
    const [data, setData] = useState(seletorData.toLocaleDateString('br'))
    const [abrirSeletor, setAbrirSeletor] = useState(false)
    const [corNomeInvalido, setCorNomeInvalido] = useState('transparent')
    const [corDataInvalida, setCorDataInvalida] = useState('transparent')
    const [modalVisible, setModalVisible] = useState(false)

    const seletor = () => {
        setAbrirSeletor(true)
    }

    const Imagem = () => {
        console.log('Botão - Modificar Câmera/Galeria de imagens')
    }

    const validateInputs = () => {
        if (!nome.trim())
            setCorNomeInvalido('#FD7979')
        else
            setCorNomeInvalido('transparent')

        if (!data.trim())
            setCorDataInvalida('#FD7979')
        else
            setCorDataInvalida('transparent')

        if (!nome.trim() || !data.trim())
            return false

        return true
    }

    const Salvar = () => {
        if (validateInputs())
            props.navigation.navigate('Drawer')
    }
    const Excluir = () => {
        setModalVisible(true)
    }
    const Sim = () => {
        setModalVisible(false)
        props.navigation.navigate('Drawer')
    }
    const Cancelar = () => {
        setModalVisible(false)
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
                    <TouchableOpacity style={estilos.TouchableOpacity} onPress={seletor}>
                        <InputTextPaper value={data} color='#3F92C5' textColor='#3F92C5' placeholderTextColor='#3F92C5'
                            right={<TextInput.Icon style={{ left: 12 }} icon='calendar-month-outline' color='#8B8B8B' />}
                            contentStyle={{ right: 0, fontFamily: 'AveriaLibre-Regular', fontSize: 12 }} backgroundColor='white'
                            width={512} height={32} onChangeText={setData} editable={false}
                            selectTextOnFocus={false} pointerEvents='none' />
                    </TouchableOpacity>
                    <Label value='Preencha a data' color={corDataInvalida} fontSize={12} />
                    <DatePicker
                        modal
                        androidVariant='iosClone'
                        locale='pt-BR'
                        mode='date'
                        open={abrirSeletor}
                        date={seletorData}
                        onConfirm={(seletorData) => {
                            setAbrirSeletor(false)
                            setSeletorData(seletorData)
                            setData(seletorData.toLocaleDateString('pt-BR'))
                        }}
                        onCancel={() => {
                            setAbrirSeletor(false)
                        }}
                    />
                </View>
                <View>
                    <Label value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Button name='firework' iconColor='#C60EB3' backgroundColor='white' width={256} height={64} size={36} fontSize={0} Execute={Imagem} />
                </View>
            </View>
            <Button value='SALVAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Salvar} />
            <View style={{ position: 'absolute', bottom: '4%', right: '2%' }}>
                <Button name='trash-can-outline' color='white' iconColor='white' value='Apagar' size={24} fontSize={12} Execute={Excluir} />
            </View>
            <Modal
                animationType='none'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                    console.log('MODAL CLOSE')
                }}>
                <View style={{ backgroundColor: '#2B1F5C', alignSelf: 'center', justifyContent: 'space-evenly', alignItems: 'center', width: 256, height: 128, marginTop: 100 }}>
                    <Label value='Tem certeza de apagar essa pesquisa?' color='white' fontSize={16} textAlign='center' />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                        <Button value='SIM' color='white' backgroundColor='#FF8383' width={100} height={32} size={0} fontSize={16}
                            Execute={Sim} />
                        <Button value='CANCELAR' color='white' backgroundColor='#3F92C5' width={100} height={32} size={0} fontSize={16}
                            Execute={Cancelar} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModifySearch