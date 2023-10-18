import { Button, View, Text, TextInput, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import useCounter from './useCounter';
import useForms from "./useForm";
import { Styles } from "./styles";

const Pay = () => {
    const initialValues = { username: '', password: '' };
    const { count, increment, decrement } = useCounter(0)
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const submitForm = () => {
        console.log('Form submitted with values:', values);
    };


    const { values, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = useForms(initialValues, validate, submitForm);




    return (
        <View>
            <View style={{marginTop:10}} > 
                <Text style={{textAlign:"center",marginTop:20,marginBottom:30,color:"black",fontSize:20}} >{count}</Text>
                <Button title="increment" onPress={increment} />
                <Button title="Decrement" onPress={decrement} />
            </View>
            <Text>My Form</Text>
            <TextInput
                placeholder="Username"
                value={values.username}
                onChangeText={(text) => handleChange('username', text)}
                onBlur={() => handleBlur('username')}
            />
            {errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
            <TextInput
                placeholder="Password"
                value={values.password}
                secureTextEntry
                onChangeText={(text) => handleChange('password', text)}
                onBlur={() => handleBlur('password')}
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
            <Button title="Submit" onPress={handleSubmit} disabled={isSubmitting} />
            <Text>{values.username}</Text>
        </View>
    )
}
export default Pay 