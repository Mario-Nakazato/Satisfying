import { createDrawerNavigator } from "@react-navigation/drawer"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from "./Home"
import Chest from "../components/Chest"

const DrawerNavigator = createDrawerNavigator()

const Drawer = (props) => {
    return (
        <DrawerNavigator.Navigator
            drawerContent={(props) => <Chest {...props} />}
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#2B1D62' },
                drawerLabelStyle: { color: 'white', fontFamily: 'AveriaLibre-Regular', fontSize: 20, right: 24 },
                drawerStyle: { backgroundColor: "#2B1F5C" },
                drawerActiveBackgroundColor: '#2B1F5C',
                headerTitleStyle: { color: '#2B1D62' },
            }}>
            <DrawerNavigator.Screen name='Home' component={Home} options={{
                title: 'Pesquisa',
                drawerIcon: () => <Icon name='file-document-outline' size={28} color='white' />
            }} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer