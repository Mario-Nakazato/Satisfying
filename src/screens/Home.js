/* import { View, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Button from '../components/Button'
import { TextInput } from 'react-native-paper'

const estilos = StyleSheet.create({
    conteinerPesquisa: {
        width: 700,
        height: 128,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    conteinerCard: {
        width: 120,
        height: 120,
        backgroundColor: 'red',
    },
})

const Home = (props) => {
    const NovaPesquisa = () => {
        props.navigation.push('NewSearch')
    }
    return (
        <View style={ScreensSS.conteiner}>
            <TextInput style={{ color: 'red' }} label="Insira o termo de busca..." left={<TextInput.Icon icon='magnify' />} />
            <View style={estilos.conteinerPesquisa}>
                <View style={estilos.conteinerCard}></View>
                <View style={estilos.conteinerCard}></View>
                <View style={estilos.conteinerCard}></View>
            </View>
            <Button Text='NOVA PESQUISA' Execute={NovaPesquisa} BackgroundColor='#37BD6D' FontSize={16} Height={32} />
        </View>
    )
}

export default Home */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EventList from '../components/EventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';

const linkImagem =
  'https://boo-prod.b-cdn.net/questions/6503684e231cffaf85bde63f/16947221287341967f15b1de81112cca71f27fcb18f8e.jpg?d=400x400';

const eventos = [
  {
    id: '001',
    nome: 'Evento 1',
    data: '01/01/2021',
    imagem: linkImagem,
  },
  {
    id: '002',
    nome: 'Evento 2',
    data: '02/01/2021',
    imagem: linkImagem,
  },
  {
    id: '003',
    nome: 'Evento 3',
    data: '03/01/2021',
    imagem: linkImagem,
  },
  {
    id: '004',
    nome: 'Evento 4',
    data: '03/01/2021',
    imagem: linkImagem,
  },
];

const Home = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      <EventList events={eventos} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.Text}>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#372775',
  },
  searchBarContainer: {
    width: '100%',
    padding: 20,
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#49b976',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    height: 35,
  },
  Text: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    textAlign: 'center',
  }
});

export default Home
