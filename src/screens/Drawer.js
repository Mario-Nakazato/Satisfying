import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import Chest from "../components/Chest"

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator
            drawerContent={(props) => <Chest {...props} />}
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#2B1D62' },
                drawerLabelStyle: { color: 'white' },
                drawerStyle: { backgroundColor: "#2B1F5C" },
                drawerActiveBackgroundColor: '#2B1F6D',
                headerTitleStyle: { color: '#2B1D62' },
            }}>
            <DrawerNavigator.Screen name='Home' component={Home} options={{ title: 'Pesquisa' }} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer