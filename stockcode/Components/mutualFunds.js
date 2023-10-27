import { View, Text,Button, } from "react-native"
import React from "react"
import useArray from "./useArray"
const MutualFunds=()=>{
    const { array, set, push, filter, update, remove, clear } = useArray([1, 2, 3, 4, 5, 6, 7, 8])


    return (
        <View>
            <View><Text style={{color:"black",marginTop:30,fontSize:20,textAlign:"center"}} >{array.join(",")}</Text></View>
            <Button title="push" onPress={() => push(7)} />
            <Button title="update" onPress={() => update(1, 9)} />
            <Button title="remove" onPress={() => remove(1)} />
            <Button title="filter" onPress={() => filter(n => n < 3)} />
            <Button title="Set" onPress={() => set([1, 2])} />
            <Button title="Clear" onPress={clear} />
        </View>
    )
}
export default MutualFunds