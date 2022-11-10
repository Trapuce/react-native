import React, { useState, useEffect } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Switch,
    StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = (props) => {
    const [done, setDone] = useState(props.item.done);
    useEffect(() => {
        setDone(props.item.done);
    }, [props.item.done]);

    return (
        <View style={styles.todoContent}>
            <View style={styles.flexSwitchText}>
                <Switch
                    value={done}
                    onValueChange={(state) => {
                        setDone(state);
                        props.changeId(props.item.id);
                    }}
                    trackColor={{ done: "green", true: "green" }}
                    thumbColor={done ? "white" : "#223152"}
                />

                <Text
                    style={[styles.itemText, done ? styles.change : '']}
                >
                    {props.item.content}
                </Text>
            </View>
            <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
                <MaterialIcons name="delete" size={35} color="#223152" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    todoContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "white",
        backgroundColor: "white",
        marginBottom: 12,
        padding: 12,
    },
    itemText: {
        fontSize: 20,
        marginLeft : 12,
    },
    flexSwitchText: {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    change: {
        // textDecorationLine : 'line-through',
        color :'green'
    }

});

export default TodoItem;
