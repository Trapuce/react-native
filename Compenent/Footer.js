import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Footer({ action, check }) {
    return (
        <View style={styles.groupBouton}>
            <TouchableOpacity
                style={styles.singleIcon}
                onPress={() => check("completed")}
            >
                <Feather name="check-square" size={24} color="#223152" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.singleIcon}
                onPress={() => check("nocompleted")}
            >
                <AntDesign name="closesquareo" size={24} color="#223152" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.singleIcon}
                onPress={() => action("all")}
            >
                <MaterialIcons name="done-all" size={24} color="#223152" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.singleIcon}
                onPress={() => action("noall")}
            >
                <MaterialIcons name="remove-done" size={24} color="#223152" />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    groupBouton: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    singleIcon: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 12,
    },
});
