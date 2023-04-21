import { Text, View ,StyleSheet, Image} from "react-native";

export const EventCard =()=>{
    return(
        <View style={styles.container}> 
                 <View style={styles.events}>
            <View style={styles.eventImg}>
                <Image style={styles.img} source={require('../../../assets/event.png')} />
            </View>

            <View style={styles.evnteTitleContainer}>
                <Text>Event tiele here</Text>
            </View>

            <View style={styles.eventeDetails}>
                <View style={styles.eventTimeLocation}>
                    <Text>Time</Text>
                    <Text>Location</Text>
                </View>
                <View>
                    <Text>
                        Event Date
                    </Text>
                </View>
            </View>

     </View>
     
     </View>

    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},
events:{
    width:300,
},
eventImg:{
    width:300
},
img:{
    width:300
}
})