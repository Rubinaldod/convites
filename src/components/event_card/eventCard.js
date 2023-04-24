import { Text, View ,StyleSheet, Image} from "react-native";

export const EventCard =()=>{
    return(
        <View style={styles.container}> 
      <View style={styles.eventCard}>

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
eventCard:{
    width:200,
    height:300,
    backgroundColor:'#fff'
}
})