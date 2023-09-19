import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import NewAccount from './src/screens/NewAccount'
import RecoverPassword from './src/screens/RecoverPassword'
import Drawer from './src/screens/Drawer'
import Home from './src/screens/Home'
import NewSearch from './src/screens/NewSearch'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'

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
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App