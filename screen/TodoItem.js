import React, { useState,useEffect } from "react";
import { TouchableOpacity,View, Image,Text,Switch, StyleSheet ,Button} from "react-native";

const TodoItem = (props) => {

    console.log(props.item);
    const [done, setDone] = useState(props.item.done);
    useEffect(()=>{
        setDone(props.item.done);
    },[props.item.done])

    return (
        <View style={styles.content}>
             <Switch value={done} onValueChange={(state) => {setDone(state) ; props.changeId(props.item.id)}}  trackColor={{ done: "red", true: "coral" }} thumbColor={done ? "red" : "coral"}/>
             <Text style={[styles.text_item, { textDecorationLine: done ? 'line-through' : 'none' }]}>{props.item.content}</Text>
             <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
                 <Image source={require('../assets/trash-can-outline.png')} style={{ height: 34, width: 34 }} />
             </TouchableOpacity>
             
         </View>
     )
 }
 
 const styles = StyleSheet.create({
     content: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         borderWidth:2,
         borderRadius:6,
         borderColor:"#ddd",
         marginBottom:10,



     },
     text_item: {
         marginLeft: 10,
         marginBottom:10,
         width: "30%",
         paddingBottom:20,
         fontSize:20
     },
     
 })

 export default TodoItem