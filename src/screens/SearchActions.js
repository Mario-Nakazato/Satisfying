import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'

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
                <Button name='file-document-edit-outline' color='white' iconColor='white' backgroundColor='#312464'
                    borderRadius={8} value='Modificar' size={64} fontSize={20} height={140} width={140} Execute={Modificar} />
                <Button name='pencil-box-multiple-outline' color='white' iconColor='white' backgroundColor='#312464'
                    borderRadius={8} value='Coletar dados' size={64} fontSize={20} textAlign='center' height={140} width={140}
                    Execute={Coletar} />
                <Button name='progress-pencil' color='white' iconColor='white' backgroundColor='#312464'
                    borderRadius={8} value='Relatório' size={64} fontSize={20} height={140} width={140} Execute={Relatorio} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
})

export default SearchActions