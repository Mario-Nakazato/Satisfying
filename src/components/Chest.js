import { Text, View } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';

const Chest = (props) => {
    const Sair = () => {
        props.navigation.popToTop()
    }
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                ...props, flexGrow: 1, justifyContent: 'space-between'
            }}>
            <View>
                <Text style={{ color: 'white', alignSelf: 'center', marginTop: 16 }}>email@provedor.com</Text>
                <Divider bold='true' style={{ width: '80%', alignSelf: 'center', marginVertical: 16 }} />
                <DrawerItemList {...props} />
            </View>
            <DrawerItem labelStyle={{ color: 'white' }} label="Sair" onPress={Sair} />
        </DrawerContentScrollView >
    );
}

export default Chest