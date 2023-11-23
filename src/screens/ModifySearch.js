import { useEffect, useState } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { useSelector } from 'react-redux'
import { db, store } from '../database/Config'
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage'
import { launchCamera } from 'react-native-image-picker'

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

const FormataStringData = (data) =>{
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
}

const ModifySearch = (props) => {

    const { evento }= useSelector((state) => state.evento)
    const eventData = JSON.parse(evento)

    const [nome, setNome] = useState(eventData.name)
    const [seletorData, setSeletorData] = useState(new Date(FormataStringData(eventData.date)))
    const [data, setData] = useState(seletorData.toLocaleDateString('pt-BR'))
    const [abrirSeletor, setAbrirSeletor] = useState(false)
    const [imagemUrl, setImagemUrl] = useState('')
    const [imagem, setImagem] = useState('')
    const [corNomeInvalido, setCorNomeInvalido] = useState('transparent')
    const [corDataInvalida, setCorDataInvalida] = useState('transparent')
    const [modalVisible, setModalVisible] = useState(false)

    const seletor = () => {
        setAbrirSeletor(true)
    }

    const Imagem = () => {
        console.log('Botão - Câmera/Galeria de imagens')
        launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
            .then((result) => {
                setImagemUrl(result.assets[0].uri)
                setImagem(result.assets[0])
            })
            .catch((error) => {
                console.log("Imagem erro: ", error)
            })
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

    const Salvar = async () => {

        const eventos = collection(db, 'events')
        const id = eventData.id
        console.log('ID: ', eventData.image)

        if (validateInputs()){
            if (imagem !== '') {
                const imageRef = ref(store, eventData.image)
                const file = await fetch(imagemUrl)
                const blob = await file.blob()
                uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
                    .then((success) => {
                        console.log("Upload sucesso", success)
                        getDownloadURL(imageRef)
                            .then((url) => {
                                const new_data = {
                                    'name': nome,
                                    'date': data,
                                    'image': url,
                                }
                                updateDoc(doc(eventos, id), new_data)
                                    .then((docRef) => {
                                        console.log('Evento atualizado: ' + docRef)
                                        props.navigation.pop()
                                    })
                                    .catch((error) => {
                                        console.log('Erro ao atualizar evento: ', error)
                                    })
                            })
                            .catch((error) => {
                                console.log("Download URL erro:", error)
                            })
                    })
                    .catch((error) => {
                        console.log("Upload erro: ", error)
                    })
            } else {
                const new_data = {
                    'name': nome,
                    'date': data,
                }
                updateDoc(doc(eventos, id), new_data)
                    .then((docRef) => {
                        console.log('Evento atualizado: ' + docRef)
                        props.navigation.pop()
                    })
                    .catch((error) => {
                        console.log('Erro ao atualizar evento: ', error)
                    })
            }
    }
        
    }
    const Excluir = () => {
        setModalVisible(true)
    }
    const Sim = () => {
        setModalVisible(false)
        const eventos = collection(db, 'events')
        const id = eventData.id
        deleteDoc(doc(eventos, id))
            .then((docRef) => {
                const imageRef = ref(store, eventData.image)
                deleteObject(imageRef)
                    .then(() => {
                        console.log('Imagem excluída: ' + docRef)
                    })
                    .catch((error) => {
                        console.log('Erro ao excluir imagem: ', error)
                    })
                console.log('Evento excluído: ' + docRef)
            })
            .catch((error) => {
                console.log('Erro ao excluir evento: ', error)
            })

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