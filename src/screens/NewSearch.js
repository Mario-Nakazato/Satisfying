import { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'
import InputText from '../components/InputText'
import Button from '../components/Button'
import InputTextPaper from '../components/InputTextPaper'
import { TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { db, store } from '../database/Config'
import { collection, addDoc } from "firebase/firestore"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { useSelector } from "react-redux"

const NewSearch = (props) => {
    const { usuario } = useSelector((state) => state.usuario)
    const [nome, setNome] = useState('')
    const [seletorData, setSeletorData] = useState(new Date())
    const [data, setData] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')
    const [imagem, setImagem] = useState('')
    const [abrirSeletor, setAbrirSeletor] = useState(false)
    const [corNomeInvalido, setCorNomeInvalido] = useState('transparent')
    const [corDataInvalida, setCorDataInvalida] = useState('transparent')

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

    const Cadastrar = async () => {
        if (validateInputs()) {
            if (imagem !== '') {
                const imageRef = ref(store, imagem.fileName)
                const file = await fetch(imagemUrl)
                const blob = await file.blob()
                uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
                    .then((success) => {
                        console.log("Upload sucesso", success)
                        getDownloadURL(imageRef)
                            .then((url) => {
                                addDoc(collection(db, "events"), {
                                    user: usuario.email,
                                    name: nome,
                                    date: data,
                                    image: url,
                                })
                                    .then((docRef) => {
                                        console.log('Evento adicionado: ', docRef)
                                        props.navigation.pop()
                                    })
                                    .catch((error) => {
                                        console.log('Erro ao adicionar evento: ', error)
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
                addDoc(collection(db, "events"), {
                    user: usuario.email,
                    name: nome,
                    date: data,
                    image: 'https://firebasestorage.googleapis.com/v0/b/satisfying-32305.appspot.com/o/semImagem.jpg?alt=media&token=3dce6265-c736-4edd-a754-0a5fb4821f8f'
                })
                    .then((docRef) => {
                        console.log('Evento adicionado: ', docRef)
                        props.navigation.pop()
                    })
                    .catch((error) => {
                        console.log('Erro ao adicionar evento: ', error)
                    })
            }
        }
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
                        <InputTextPaper value={data} color='#3F92C5' textColor='#3F92C5'
                            right={<TextInput.Icon style={{ left: 12 }} icon='calendar-month-outline' color='#8B8B8B' />}
                            contentStyle={{ right: 0, fontFamily: 'AveriaLibre-Regular', fontSize: 12 }} backgroundColor='white' width={512}
                            height={32} onChangeText={setData} editable={false}
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
                    {/* {imagemUrl ?
                        <Image source={{ uri: imagemUrl }} style={{ width: 100, height: 100 }} />
                        :
                        null
                    } */}
                    <Label value='Imagem' color='white' fontSize={16} paddingTop={4} />
                    <Button value='Câmera/Galeria de imagens' color='#939393' iconColor='white' backgroundColor='white' width={256} height={64} size={0} fontSize={16} Execute={Imagem} />
                </View>
            </View>
            <Button value='CADASTRAR' color='white' iconColor='white' backgroundColor='#37BD6D' width={512} height={32} size={0} fontSize={16}
                Execute={Cadastrar} />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteinerCadastrar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
})

export default NewSearch