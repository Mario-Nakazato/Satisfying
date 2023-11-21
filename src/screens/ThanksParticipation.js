import { useEffect } from 'react'
import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Label from '../components/Label'

const ThanksParticipation = (props) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            props.navigation.pop()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [])
    return (
        <View style={ScreensSS.conteiner}>
            <Label value='Obrigado por participar da pesquisa!' color='white' fontSize={32} />
            <Label value='Aguardamos você no próximo ano!' color='white' fontSize={32} />
        </View>
    )
}

export default ThanksParticipation