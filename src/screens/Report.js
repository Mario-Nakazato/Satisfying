import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Report = (props) => {
    return (
        <View style={ScreensSS.conteiner}>
            <View>
                <Icon name='chart-arc' size={200} color='#239132' />
            </View>
        </View>
    )
}

export default Report