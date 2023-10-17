import { View } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Label from './Label'
import { signOut } from "firebase/auth"
import { auth } from '../database/Config'

const Chest = (props) => {
    const Sair = () => {
        signOut(auth).then(() => {
            props.navigation.popToTop()
            console.log("Chest Sair")
        }).catch((error) => {
            console.log("Chest", error)
        })
    }
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
                flexGrow: 1, justifyContent: 'space-between'
            }}>
            <View>
                <View style={{ color: 'white', alignSelf: 'center', marginTop: 16, }}>
                    <Label value='email@provedor.com' color='white' fontSize={20} numberOfLines={1} />
                </View>
                <Divider bold='true' style={{ width: '88%', alignSelf: 'center', marginTop: 16 }} />
                <DrawerItemList {...props} />
            </View>
            <DrawerItem style={{}} labelStyle={{ color: 'white', right: 24, fontSize: 20, fontFamily: 'AveriaLibre-Regular' }} label="Sair" onPress={Sair}
                icon={() => <Icon style={{ transform: [{ rotate: '90deg' }], }} name='tray-arrow-up' size={28} color='white' />} />
        </DrawerContentScrollView >
    )
}

export default Chest