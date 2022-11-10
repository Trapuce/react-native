import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Input({ addItem }) {
    const [text, setText] = useState('')

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputBox}
                onChangeText={textValue => setText(textValue)}
                placeholder="add item ..."
                value={text}
                onSubmitEditing={() => addItem(text)}
            />
            <TouchableOpacity style={styles.addItems} onPress={() => addItem(text)}>
                <Ionicons name="add" size={30} color="#223152" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    inputBox: {
        padding: 13,
        backgroundColor: 'white',
        fontSize: 18,
        width: "auto",
        borderWidth: 2,
        borderRadius: 12,
        flex: 1,
        borderColor: 'white'
    },
    addItems: {
        marginLeft: 12,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 100,
    }
})