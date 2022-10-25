import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Header from '../Header/Header'

export default function Home ({navigation}){
    return(
        <View style={styles.container}>
            <Header title="Home" navigation={navigation}></Header>
            <View style={styles.content}>
                <Text style={styles.text}>This is home Screen</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignItems:'center',
        
        backgroundColor:'#3B3697'
    },
    text:{
        fontSize:20,
        color:'#ffffff',
        fontWeight:'800',
        marginTop:400
    }
})