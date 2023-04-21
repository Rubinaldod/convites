import { SafeAreaView } from 'react-native';
import {
	View,
	Text, StyleSheet,
} from 'react-native';
import Home_header from '../components/home_header/header';
import { TopTabNavigator } from '../components/topTabNavigator/topTabNavigator';
import { ScrollView } from 'react-native';

const Home =()=>{
    return(
      
        <View  style={styles.container}>
          <Home_header />
           <ScrollView >
            
            <TopTabNavigator />
         
            </ScrollView>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
    
      backgroundColor: '#1D1D1D',
   
    
    },
  });
export default Home