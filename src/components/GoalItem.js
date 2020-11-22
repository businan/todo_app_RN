import React, { useState } from 'react';
import { Text,  TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const GoalItem = (props) => {
    return(
        <TouchableOpacity 
            style={styles.goalItemContainer}
            onPress={() => props.onClickGoal()}
        >
            <Text style={styles.goalItemText}>{props.goal.title}</Text>
        </TouchableOpacity>
    )
}

export  { GoalItem };
const styles = StyleSheet.create({
    goalItemContainer:{
        width:Dimensions.get('window').width*0.9,
        backgroundColor:'#a8dadc',
        marginBottom:20,
        alignSelf:'center',
        borderRadius:10,
        height:Dimensions.get('window').height*0.05,
        justifyContent:'center'
    },
    goalItemText:{
        padding:10,
        fontSize:20,
        textAlign:'center',
        
        
    }
})