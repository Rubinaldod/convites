import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Convites } from '../../screens/convites/convites';
import { Shows } from '../../screens/shows/shows';

const Tab = createMaterialTopTabNavigator();



function MyTabs (){
    const height = useWindowDimensions().height;
    return(
        <View style={{ flex:1, height:height, backgroundColor: '#1D1D1D'}}>
            <View style={{flex:1, backgroundColor: '#1D1D1D'}}>
<Tab.Navigator
        initialRouteName="Convites"
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarIndicatorStyle: { backgroundColor: '#FECA21', width:40, padding:2,marginLeft:20},
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { backgroundColor: '#1D1D1D', paddingTop:20 },
        }}
      >
        <Tab.Screen
          name="Convites"
          component={Convites}
          options={{ tabBarLabel: 'Convites' }}
        />
        <Tab.Screen
          name="Shows"
          component={Shows}
          options={{ tabBarLabel: 'Shows' }}
        />
      
      </Tab.Navigator>
      </View>
      </View>
      )
}





export const TopTabNavigator =()=>{
    return(
 
        <MyTabs />
      
    )
}

const styles = StyleSheet.create({
    container:{
        height:0,
        opacity:0
    }
})