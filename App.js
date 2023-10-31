import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import NewAccount from './src/screens/NewAccount'
import RecoverPassword from './src/screens/RecoverPassword'
import Drawer from './src/screens/Drawer'
import Home from './src/screens/Home'
import NewSearch from './src/screens/NewSearch'
import ModifySearch from './src/screens/ModifySearch'
import SearchActions from './src/screens/SearchActions'
import Report from './src/screens/Report'
import Collect from './src/screens/Collect'
import ThanksParticipation from './src/screens/ThanksParticipation'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        //primary: 'red',
        //second: 'green',
    },
}

const Stack = createStackNavigator()

const App = () => {
    return (
        <Provider store={Store}>
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Login'
                        screenOptions={{
                            headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#573FBA',
                            headerTitleStyle: { color: 'white', fontFamily: 'AveriaLibre-Regular' }
                        }}>
                        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name='NewAccount' component={NewAccount} options={{ title: 'Nova Conta' }} />
                        <Stack.Screen name='RecoverPassword' component={RecoverPassword} options={{ title: 'Recuperação de senha', headerBackTitle: false }} />
                        <Stack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }} />
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='NewSearch' component={NewSearch} options={{ title: 'Nova pesquisa' }} />
                        <Stack.Screen name='ModifySearch' component={ModifySearch} options={{ title: 'Modificar pesquisa' }} />
                        <Stack.Screen name='SearchActions' component={SearchActions} options={{ title: 'Pesquisa' }} />
                        <Stack.Screen name='Report' component={Report} options={{ title: 'Relatório' }} />
                        <Stack.Screen name='Collect' component={Collect} options={{ headerShown: false }} />
                        <Stack.Screen name='ThanksParticipation' component={ThanksParticipation} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    )
}

export default App