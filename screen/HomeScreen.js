import React, { useState,useEffect } from "react";
import { TouchableOpacity,View, Image,Text,Switch, StyleSheet ,Button,TextInput} from "react-native";



export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('TodoList')}
    />
  </View>
  );
}