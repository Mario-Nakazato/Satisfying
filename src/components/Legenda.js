//import
import Label from "./Label";
import { View, StyleSheet } from "react-native";

//componente
const Legenda = (props) =>{
    return (
        <View style={{flexDirection:'row', alignItems: 'center'}}>  
            <View style={[estilos.quadrado, { backgroundColor: props.squareColor }]} />
            <Label value={props.value} color={props.color} fontSize={props.fontSize} numberOfLines={props.numberOfLines} />
        </View>
    )
}

const estilos = StyleSheet.create({
    quadrado: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 10
    },
})

//export
export default Legenda