import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerContent}>My Todo</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor : '#223152',
        flexDirection : 'row',
        justifyContent : 'center',
        padding : 12,
    },
    headerContent:{
        color : 'white',
        fontSize : 30,
        fontWeight : '700'
    }
})