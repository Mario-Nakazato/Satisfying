import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import { PieChart } from 'react-native-svg-charts'
import { useSelector } from "react-redux"
import Label from '../components/Label'

const Report = (props) => {
    const { evento } = useSelector((state) => state.evento)

    const totalVotes = evento.votes.reduce((acc, value) => acc + value, 0)

    const data = [
        {
            key: 1,
            value: (evento.votes[0] / totalVotes) * 100,
            svg: { fill: '#D71616' },
            //arc: { outerRadius: '116%', cornerRadius: 8, }
        },
        {
            key: 2,
            value: (evento.votes[1] / totalVotes) * 100,
            svg: { fill: '#FF360A' }
        },
        {
            key: 3,
            value: (evento.votes[2] / totalVotes) * 100,
            svg: { fill: '#FFC632' }
        },
        {
            key: 4,
            value: (evento.votes[3] / totalVotes) * 100,
            svg: { fill: '#37BD6D' }
        },
        {
            key: 5,
            value: (evento.votes[4] / totalVotes) * 100,
            svg: { fill: '#25BC22' }
        }
    ]
    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ flexDirection: 'row' }}>
                <View style={estilos.grafico}>
                    <PieChart
                        style={{ height: '100%' }}
                        outerRadius={'70%'}
                        innerRadius={10}
                        data={data}
                    />
                </View>
                <View style={estilos.legenda}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#25BC22', height: 32, width: 32, marginHorizontal: 16 }}></View>
                        <Label value={'Excelente'} color='white' fontSize={32} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#37BD6D', height: 32, width: 32, marginHorizontal: 16 }}></View>
                        <Label value={'Bom'} color='white' fontSize={32} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FFC632', height: 32, width: 32, marginHorizontal: 16 }}></View>
                        <Label value={'Neutro'} color='white' fontSize={32} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FF360A', height: 32, width: 32, marginHorizontal: 16 }}></View>
                        <Label value={'Ruim'} color='white' fontSize={32} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#D71616', height: 32, width: 32, marginHorizontal: 16 }}></View>
                        <Label value={'Péssimo'} color='white' fontSize={32} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    grafico: {
        flex: 0.60,
    },
    legenda: {
        flex: 0.40,
        justifyContent: 'space-evenly',
    }
})

export default Report