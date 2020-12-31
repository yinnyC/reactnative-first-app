import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredGoal) =>{
    setEnteredGoal(enteredGoal);
  }
  const addGoalHangler = ()=>{
    setCourseGoals(currentGoals =>[
      ...currentGoals,
      { id:Math.random().toString(), value: enteredGoal }
    ]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD"
        onPress={addGoalHangler}/>
      </View>
      <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={courseGoals} 
      renderItem={itemData =>(
        <View style={styles.listItem} ><Text>{itemData.item.value}</Text></View>
      )}/>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'80%',
    borderBottomColor:'grey',
    borderBottomWidth:2
  },
  listItem:{
    padding:40,
    backgroundColor:'#ccc',
    borderWidth:1,
    margin:10
  }
});
