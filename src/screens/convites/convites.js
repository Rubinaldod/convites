import { Text, View,StyleSheet } from "react-native";
import { EventCard } from "../../components/event_card/eventCard";
export const Convites =()=>{
    return(
        <View style={styles.container}>
           
            <View style={styles.title_container}>
                <Text style={styles.title}>Teus Convites</Text>
            </View>
            <View style={styles.event_container}>
                <EventCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
        { backgroundColor: '#1D1D1D',flex:1},
    title_container:{
        padding:20,
    },
    title:{
        color:'#fff',
        fontSize:16
    }
    
})