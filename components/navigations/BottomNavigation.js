import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Home, Requests, Sections, Shop } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    const screenOptions = {
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            position: "absolute",
            bottom:0,
            right:0,
            left:0,
            elevation:0,
            height:60,
            background:"#fff"   
        }
    }
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
              name="Home" 
              component={Home}
              options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={styles.tabBarMain}>
                            <Feather name="shopping-cart" size={24} color={focused? "red":"gray"} />
                            <Text style={[styles.tabBarText, { color: focused ? "red" : "gray" }]}>السلة</Text>
                        </View>
                    )
                }
              }}
              />
            <Tab.Screen 
              name="Request" 
              component={Requests}
              options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={styles.tabBarMain}>
                            <Fontisto name="shopping-bag" size={24} color={focused? "red":"gray"} />
                            <Text style={[styles.tabBarText, { color: focused ? "red" : "gray" }]}>الطلبات</Text>
                        </View>
                    )
                }
              }}
              />
              <Tab.Screen 
              name="Section" 
              component={Sections}
              options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={styles.tabBarMain}>
                            <Ionicons name="apps-outline" size={24} color={focused? "red":"gray"}/>
                            <Text style={[styles.tabBarText, { color: focused ? "red" : "gray" }]}>الأقسام</Text>
                        </View>
                    )
                }
              }}
              />
              <Tab.Screen 
              name="Shop" 
              component={Shop}
              options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={styles.tabBarMain}>
                            <Feather name="archive" size={24} color={focused? "red":"gray"} />
                            <Text style={[styles.tabBarText, { color: focused ? "red" : "gray" }]}>المتجر</Text>
                        </View>
                    )
                }
              }}
              />
        </Tab.Navigator>
    
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
    tabBarMain: {
        alignItems: "center",
        justifyContent:"center",
    },
    tabBarText: {
        fontSize:12, 
        margin:5,
    }
})