import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import {
	View,
	Text, StyleSheet,StatusBar, Image
} from 'react-native';



const Home_header =()=>{
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.header_photo_container}>
                <Image style={styles.header_photo} source={require("../../../assets/profile.jpg")} />
            </View>
            <View style={styles.search_container}>
               <View style={{padding:15}}>
                    <TextInput style={styles.header_text} placeholderTextColor='#fff' placeholder='Que evento procura?'/>
                    </View>
            </View>
            </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
    
     // backgroundColor: '#1D1D1D',
        width:'100%',
        
    },
    header:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection:'row',
        paddingTop:15,
        alignContent:'center',
        alignItems:'center',
       gap:15,
      padding:20

    },
    header_photo_container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'flex-start',
        alignItems:'flex-start'
      
    },
    header_photo:{
        width:50,
        height:50,
        borderRadius:90,
        borderWidth:1.5,
        borderColor:'#FFCC1B',
        alignSelf:'flex-start'
    },
    search_container:{
        backgroundColor:'#3B3B3B',
        width:'100%',
        height:50,
        flex:1,
        borderRadius:30,

        justifyContent:'center',
    },
    header_text:{
        color:'#fff',
        
    }
  });
export default Home_header