import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Report = (props) => {
    return (
        <View style={ScreensSS.conteiner}>
            <Icon name='chart-arc' size={256} color='#239132' />
        </View>
    )
}

export default Report