import React, { useState,useEffect } from "react";
import { TouchableOpacity,View, Image,Text,Switch, StyleSheet ,Button,TextInput} from "react-native";



export default function SignInScreen({navigation}){
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center'   }}>
        <View style={{ flex:1}}>
            <Image source={require('../assets/login.png')}  style={{ width: 70, height: 70 }}/>
        </View>
            {/*<Text>Welcome ! you are logged as ....</Text>µ*/}
        <View style={{width:"30%"}}>
            <TextInput
            style={styles.input}
            placeholder="username"
                />
            <TextInput
            style={styles.input}
            placeholder="Password"
                />
            <View style={{ width:100 , alignItems:'center' ,marginLeft:240}} >
            <Button
           
            title="Sign in"
            onPress={() => navigation.navigate('TodoList')}
            />
            </View>
        </View>
        </View>
    );
  }


  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
    },
  });