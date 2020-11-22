import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const AddNewGoal = (props) => {
    return (
        <TouchableOpacity
            style={styles.newGoal}
            onPress={() => props.onClickAddNewGoal()} 
        >
            <Text style={{ fontSize: 25, }}>Add New Goal</Text>
        </TouchableOpacity>
    )
}

export { AddNewGoal }

const styles = StyleSheet.create({
    newGoal:{
        backgroundColor:'#f48c06',
        width:Dimensions.get('window').width*0.9,
        margin:10,
        fontWeight:'bold',
        borderRadius:10,
        padding:15,
        alignSelf:'center',
        alignItems:'center',
        marginTop:30,
        
    }
})