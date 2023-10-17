import React, { useRef, } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Home from "./Home";
import { TextInput } from "react-native-gesture-handler";
import { Styles } from "./styles";

const BottomComponent = (props) => {
    const refRBSheet = useRef();
    console.log(props.sheet)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(56,56,56,0.5)",

                    },
                    draggableIcon: {
                        backgroundColor: "#FFFFFF",
                        width: 50,
                    },
                    container: {
                        backgroundColor: "rgb(60, 60, 60)",
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }
                }}
            >
                <View style={Styles.BottomSheetBtn} >
                    <Text style={Styles.listCreationStyles} > Create new watchList </Text>
                    <TextInput style={Styles.inputTagStyles} placeholderTextColor={"rgba(210, 210, 210,1)"} placeholder="watchList name" />
                    <TouchableOpacity style={Styles.TouchableBtn} >
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }} >CREATE</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </View>
    )
}

export default BottomComponent