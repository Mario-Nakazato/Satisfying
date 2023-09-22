import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import Chest from "../components/Chest"
import NewSearch from "./NewSearch"
import ModifySearch from "./ModifySearch"
import SearchActions from "./SearchActions"
import Report from "./Report"
import Collect from "./Collect"
import ThanksParticipation from "./ThanksParticipation"
import NewAccount from "./NewAccount"
import RecoverPassword from "./RecoverPassword"

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
            {/* <DrawerNavigator.Screen name='NewSearch' component={NewSearch} options={{ title: 'NewSearch' }} />
            <DrawerNavigator.Screen name='ModifySearch' component={ModifySearch} options={{ title: 'ModifySearch' }} />
            <DrawerNavigator.Screen name='SearchActions' component={SearchActions} options={{ title: 'SearchActions' }} />
            <DrawerNavigator.Screen name='Report' component={Report} options={{ title: 'Report' }} />
            <DrawerNavigator.Screen name='Collect' component={Collect} options={{ title: 'Collect' }} />
            <DrawerNavigator.Screen name='ThanksParticipation' component={ThanksParticipation} options={{ title: 'ThanksParticipation' }} />
            <DrawerNavigator.Screen name='NewAccount' component={NewAccount} options={{ title: 'NewAccount' }} />
            <DrawerNavigator.Screen name='RecoverPassword' component={RecoverPassword} options={{ title: 'RecoverPassword' }} /> */}
        </DrawerNavigator.Navigator>
    )
}

export default Drawer