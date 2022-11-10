import React, { useState, useEffect } from "react";
import {
    FlatList,
    Button,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text,
    Switch,
    StyleSheet,
    Dimensions,
    Alert,
} from "react-native";
import Footer from "../Compenent/Footer";
import Header from "../Compenent/Header";
import Input from "../Compenent/Input";
import todoData from "../Helpers/todoData";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [count, setCount] = useState(
        todoData.filter((item) => item.done).length
    );
    const [todo, setTodo] = useState(todoData);
    const [other, setOther] = useState(todo);

    useEffect(() => {
        check("");
    }, [todo]);

    //change mon id
    function changeId(id) {
        let newList = todo.map((newTodo) => {
            if (newTodo.id === id) {
                newTodo.done = !newTodo.done;
            }
            return newTodo;
        });
        setTodo(newList);
        setCount(newList.filter((item) => item.done).length);
    }

    // to delete a task
    const deleteTodo = (id) => {
        let newList = todo.filter((todo) => todo.id != id); //if id given in params is different we add in newList
        setTodo(newList);
        setCount(newList.filter((item) => item.done).length);
    };

    //add a new task
    const addItem = (content) => {
        if (content === "") {
            Alert.alert("Type something");
        } else {
            setTodo([
                ...todo,
                {
                    id: Math.max(...todo.map((item) => item.id)) + 1,
                    content: content,
                    done: false,
                },
            ]);
        }
    };

    const check = (params) => {
        if (params == "completed") {
            let newList = todo.filter((item) => item.done);
            setOther(newList);
        } else if (params == "nocompleted") {
            let newList = todo.filter((item) => item.done == false);
            setOther(newList);
        } else {
            let newList = todo.filter((item) => item);
            setOther(newList);
        }
    };
    const action = (ac) => {
        if (ac == "all") {
            let newList = todo.map((item) => {
                item.done = true;
                return item;
            });
            setTodo(newList);
        }
        if (ac == "noall") {
            let newList = todo.map((item) => {
                item.done = false;
                return item;
            });
            setTodo(newList);
        }
    };

    return (
        <View style={styles.container}>
            {/* header*/}
            <Header />
            {/*body*/}
            <View style={styles.body}>
                <Input addItem={addItem} />

                <FlatList
                    data={other}
                    renderItem={({ item }) => (
                        <TodoItem
                            item={item}
                            changeId={changeId}
                            deleteTodo={deleteTodo}
                        />
                    )}
                />
                {/* <Text>{count}</Text> */}
                <Footer check={check} action={action} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "50%",
    },
    body: {
        flex: 1,
        textAlign: "center",
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#223152",
    },
    bouton: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },

});
