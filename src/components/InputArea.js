import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Modal } from 'react-native';

const InputArea = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your goal'
                    onChangeText={value => setEnteredGoal(value)}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.addButton2}
                        onPress={() => {
                            props.onChangeModal();
                            setEnteredGoal('')
                        }}
                    >
                        <Text style={styles.addButtonText}>CANCEL</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.addButton1}
                        onPress={() => {
                            props.onGoalEnter(enteredGoal);
                            setEnteredGoal('')
                        }}
                    >
                        <Text style={styles.addButtonText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export  { InputArea };

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },
    textInput: {
        padding: 10,
        borderWidth: 5,
        borderColor: '#e0e0e0',
        width: Dimensions.get('window').width * 0.7,
        borderRadius: 10,
        marginBottom: 20,
    },
    addButton1: {
        backgroundColor: '#e9c46a',
        borderRadius: 5,
        width:Dimensions.get('window').width*0.25,
        alignItems:'center'
    },
    addButton2: {
        backgroundColor: 'red',
        borderRadius: 5,
        width:Dimensions.get('window').width*0.25,
        alignItems:'center'
    },
    addButtonText: {
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontWeight: 'bold'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('window').width*0.6,
    }

})