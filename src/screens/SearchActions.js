import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
})

const SearchActions = (props) => {
    const Modificar = () => {
        props.navigation.push('ModifySearch')
    }
    const Coletar = () => {
        props.navigation.push('Collect')
    }
    const Relatorio = () => {
        props.navigation.push('Report')
    }

    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteiner}>
                <Button name='file-document-edit-outline' color='white' iconColor='white' backgroundColor='#312464' borderRadius={8} value='Modificar'
                    size={80} fontSize={32} width={210} height={170} Execute={Modificar} />
                <Button name='pencil-box-multiple-outline' color='white' iconColor='white' backgroundColor='#312464' borderRadius={8}
                    value='Coletar dados' size={80} fontSize={32} width={210} height={170} Execute={Coletar} />
                <Button name='progress-pencil' color='white' iconColor='white' backgroundColor='#312464' borderRadius={8} value='Relatório' size={80}
                    fontSize={32} width={210} height={170} Execute={Relatorio} />
            </View>
        </View>
    )
}

export default SearchActions