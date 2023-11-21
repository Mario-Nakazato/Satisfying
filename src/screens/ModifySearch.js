import { useState } from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { useSelector } from "react-redux"
import { db, store } from '../database/Config'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage'

const ModifySearch = (props) => {
    const { evento } = useSelector((state) => state.evento)
    const [nome, setNome] = useState(evento.name)
    const [seletorData, setSeletorData] = useState(new Date())
    const [data, setData] = useState(evento.date)
    const [imagemUrl, setImagemUrl] = useState('')
    const [imagem, setImagem] = useState('')
    const [abrirSeletor, setAbrirSeletor] = useState(false)
    const [corNomeInvalido, setCorNomeInvalido] = useState('transparent')
    const [corDataInvalida, setCorDataInvalida] = useState('transparent')
    const [modalVisible, setModalVisible] = useState(false)

    const seletor = () => {
        setAbrirSeletor(true)
    }
    const Imagem = () => {
        console.log('Botão - Modificar Câmera/Galeria de imagens')
        launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
            .then((result) => {
                setImagemUrl(result.assets[0].uri)
                setImagem(result.assets[0])
            })
            .catch((error) => {
                console.log("Erro na câmera: ", error)
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
        if (validateInputs()) {
            if (imagem !== '') {
                const old_image_fileName = evento.image_fileName
                const imageRef = ref(store, imagem.fileName)
                const file = await fetch(imagemUrl)
                const blob = await file.blob()
                uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
                    .then((success) => {
                        getDownloadURL(imageRef)
                            .then((url) => {
                                const eventRef = doc(db, "events", evento.id)
                                updateDoc(eventRef, {
                                    name: nome,
                                    date: data,
                                    image: url,
                                    image_fileName: imagem.fileName
                                })
                                    .then((docRef) => {
                                        if (old_image_fileName !== undefined) {
                                            const desertRef = ref(store, old_image_fileName);
                                            deleteObject(desertRef).then(() => {
                                                props.navigation.navigate('Drawer')
                                            }).catch((error) => {
                                                console.log("Erro ao excluir imagem antiga: ", error)
                                            })
                                        } else {
                                            props.navigation.navigate('Drawer')
                                        }

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
                const eventRef = doc(db, "events", evento.id)
                updateDoc(eventRef, {
                    name: nome,
                    date: data,
                })
                    .then((docRef) => {
                        props.navigation.navigate('Drawer')
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
        if (evento.image_fileName !== undefined) {
            const desertRef = ref(store, evento.image_fileName);
            deleteObject(desertRef).then(() => {
                deleteDoc(doc(db, 'events', evento.id))
                setModalVisible(false)
                props.navigation.navigate('Drawer')
            }).catch((error) => {
                console.log("Erro ao excluir imagem antiga: ", error)
            })
        } else {
            deleteDoc(doc(db, 'events', evento.id))
            setModalVisible(false)
            props.navigation.navigate('Drawer')
        }
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

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

export default ModifySearch