import { useState } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
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

const ModifySearch = (props) => {
    const [nome, setNome] = useState()
    const [data, setData] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    const Imagem = () => {
        console.log('Botão - Modificar Câmera/Galeria de imagens')
    }
    const Salvar = () => {
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
                    <InputText value={nome} placeholder='Carnaval 2024' color='#3F92C5' width={512} height={32} fontSize={12}
                        onChangeText={setNome} keyboardType='default' />
                </View>
                <View>
                    <Label value='Data' color='white' fontSize={16} paddingTop={4} />
                    <InputTextPaper placeholder='16/02/2024' value={data} color='#3F92C5' textColor='#3F92C5' placeholderTextColor='#3F92C5'
                        right={<TextInput.Icon style={{ left: 12 }} icon='calendar-month-outline' color='#8B8B8B' />}
                        contentStyle={{ right: 0, fontFamily: 'AveriaLibre-Regular', fontSize: 12 }} backgroundColor='white'
                        width={512} height={32} onChangeText={setData} />
                </View>
                <View>
                    <Label value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Button name='firework' iconColor='#C60EB3' backgroundColor='white' width={256} height={64} size={36} fontSize={0} Execute={Imagem} />
                </View>
            </View>
            <Button value='SALVAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Salvar} />
            <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <Button name='trash-can-outline' color='white' iconColor='white' value='Apagar' size={32} fontSize={14} Execute={Excluir} />
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