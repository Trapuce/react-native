import React, { useState , useEffect } from "react";
import {FlatList,Button,TextInput, TouchableOpacity,View, Image,Text,Switch, StyleSheet,Dimensions } from "react-native";
import todoData from "../Helpers/todoData"
import TodoItem from "./TodoItem";

export default function TodoList(){
    const [count , setCount] = useState(todoData.filter(item => item.done).length)
    const [todo , setTodo] = useState(todoData)
    const [text , setText] = useState('')
    const [other , setOther] = useState(todo)

    useEffect(()=>{
        check('')
    },[todo])

    //change mon id 
    function  changeId(id){
        let newList = todo.map(
            (newTodo)=>{
                if(newTodo.id === id){
                    newTodo.done = !newTodo.done
                }
                return newTodo
            }
        )
        setTodo(newList)
        setCount(newList.filter(item => item.done).length)
    }

    // to delete a task 
    const deleteTodo = (id) => {
        let newList = todo.filter(todo => todo.id != id)//if id given in params is different we add in newList
         setTodo(newList) 
         setCount(newList.filter(item => item.done).length)
        }


    //add a new task 
    const addItem = (content) => {
    setTodo([...todo, { id: Math.max(...todo.map(item => item.id)) + 1, content: content, done: false }])

    }
    const check =(params)=>{
            if(params == "completed"){
                let newList = todo.filter(item => item.done)
                setOther(newList)
            }
            else if(params == "nocompleted"){
                let newList = todo.filter(item => item.done == false)
                setOther(newList)

            }else{
                let newList = todo.filter(item => item)
                setOther(newList)

            }
    }
    const action = (ac)=>{
        if(ac == "all"){
            let newList = todo.map(item => {
                item.done = true;
                return item
               }
               )
               setTodo(newList)
        }
        if (ac == "noall"){
            let newList = todo.map(item => {
                item.done = false;
                return item
               }
               )
               setTodo(newList)
        }
    }


    return (
        <View style={styles.container}>

            {/* header*/}
           <View style={styles.header}>
                <Text style={{ fontSize:30}}>My Todo</Text>
           </View>
           
            {/*body*/}
            <View style={styles.body}>
                     <View style={styles.ajouter}>
                        <TextInput 
                                style={styles.bouton}
                                onChangeText={textValue=>setText(textValue)}
                                placeholder="add item ..."
                                value={text}
                                onSubmitEditing={() =>addItem(text)}
                            />
                            <Button 
                                color="coral"
                                title="Ajouter"
                                onPress={() =>addItem(text)}
                            />
                        </View>
                    <FlatList
                        data={other}
                        renderItem={({item})=><TodoItem  item={item} changeId={changeId} deleteTodo={deleteTodo} />}
                        
                    />
                    <Text >{count}</Text>
                    <View style={styles.groupBouton}>
                            <Button 
                                title="tache finie"
                                color="coral"
                                onPress={()=>check("completed")}
                                

                            />
                            <Button
                                title="tache non finie"
                                color="coral"
                                onPress={()=>check("nocompleted")}

                            />
                            <Button
                                title="tout cocher"
                                color="coral"
                                onPress={()=>action("all")}

                            />
                            <Button
                                title="tout decocher"
                                color="coral"
                                onPress={()=>action("noall")}

                            />
                    </View>
            </View>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    
   
    container: {
        flex: 1,
        width: '50%',
        height: '50%',
      },
    header: {
        padding:10,
        textAlign: 'center',
        borderWith:2,
        borderColor:'#000',
        flex: 0.1,
        backgroundColor: "coral",
        borderWidth: 5,

    },
    body: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 5,
        textAlign: 'center',
        padding:60,
        justifyContent: 'center',
        
    },
    bouton:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
       
    },
    groupBouton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ajouter:{
        marginLeft:280,
        marginBottom:30,
        width: "30%",
    }
   
  });