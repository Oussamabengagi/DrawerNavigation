import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Header/Header'

export default function Contact ({navigation}){
    return(
    <View style={styles.container}>
        <Header title="Contact" navigation={navigation}></Header>
        <View style={styles.content}>
            <Text style={styles.text}>Contact Page</Text>
            <Button  
                    title="Back to previous page" onPress={()=>navigation.goBack()}/>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3B3697'
    },
    text:{
        fontSize:20,
        color:'#FF0025',
        fontWeight:'bold',
        marginBottom:300
    }
})