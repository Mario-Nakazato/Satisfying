import { View } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import { StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../database/Config'
import { useEffect, useState } from 'react'
import Label from '../components/Label'
import Legenda from '../components/Legenda'

const Report = (props) => {

    const [pieData, setPieData] = useState([])
    const [isVisivel, setIsVisivel] = useState(false)
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']

    useEffect(() => {
		const docRef = doc(db, "events", props.route.params.evento_id);
        getDoc(docRef).then((docSnap) => {
            
            const dados = docSnap.data()
            const votacao = JSON.parse(dados.votacao)
            const data = [votacao['Péssimo'], votacao['Ruim'], votacao['Neutro'], votacao['Bom'], votacao['Excelente']]

            const sum = data.reduce((cont, valorAtual) => {
                return cont + valorAtual;
            }, 0);

            if (sum > 0) setIsVisivel(true)

            const color = (index) => {
                return colors[index];
            }         

            setPieData(data
                .filter((value) => value > -1)
                .map((value, index) => ({
                    value,
                    svg: {
                        fill: color(index),
                        onPress: () => console.log('press', index),
                    },
                    arc: { outerRadius: (70 + value) + '%', padAngle: 0.035, cornerRadius: 5},
                    key: `pie-${index}`,
                }))
            )
        }).catch((error) => {
            console.log('Erro ao carregar dados: ', error)
        })
	}, [])

    return (
        <View style={ScreensSS.conteiner}>
            <View style={estilos.conteiner}>
                <View>
                    <PieChart
                        style={{ height: 300 , width: 300}}
                        data={pieData}
                        outerRadius={'100%'}
                        innerRadius={20}
                    />
                </View>
                {isVisivel && (
                <View style={{flex: 0.5,justifyContent: 'center'}}>
                    <Legenda value={"Excelente"} fontSize={28} squareColor={colors[4]} color={"white"} />
                    <Legenda value={"Bom"} fontSize={28} squareColor={colors[3]} color={"white"} />
                    <Legenda value={"Neutro"} fontSize={28} squareColor={colors[2]} color={"white"} />
                    <Legenda value={"Ruim"} fontSize={28} squareColor={colors[1]} color={"white"} />
                    <Legenda value={"Péssimo"} fontSize={28} squareColor={colors[0]} color={"white"} />
                </View>
                )}
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
})

export default Report