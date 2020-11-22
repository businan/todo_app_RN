import React, { useState } from 'react';
import { View,  FlatList,} from 'react-native';

import { GoalItem, InputArea, AddNewGoal } from './components';

const Main = () => {
    
    const [goals, setGoals] = useState([]);
    const [isVisible, setIsVisible] = useState(false)

    const addGoal = (goalText) => {
        if (goalText.trim().length === 0){
            setGoals([...goals])
        }else{
            let makeId = Math.floor(Math.random() * 10000).toString();
            setGoals([...goals, {
            id:makeId,
            title:goalText,
            }]);
            setIsVisible(false)
        }  
    }
    
    const deleteGoal = (goalId) => {
        
        const selectedGoal = goals.filter(item => item.id !== goalId);
              
        const temp = [...goals];
        temp.splice(selectedGoal,1)
        setGoals(temp)
            
    }
    
    const renderGoalItem = ({item}) => {
        return(
            <GoalItem 
                goal={item}
                onClickGoal={()=>deleteGoal(item.id)}
            />
        )
    }


    return (
        
            <View style={{flex:1}}>
                
                <AddNewGoal 
                    onClickAddNewGoal={()=>setIsVisible(true)}
                />
                
                <InputArea
                    visible={isVisible}
                    sendText={value=>{setEnteredGoal(value)}}
                    onGoalEnter={goalText => addGoal(goalText)}
                    onChangeModal={()=>setIsVisible(false)}
                />
    
                <FlatList
                    data={goals}
                    renderItem={renderGoalItem}
                    keyExtractor={(_, index) => index.toString()}
                />
                

            </View>
        
    )
}
export default Main;

