import { View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, TextInput, Dimensions, Pressable } from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
import EditIcon from "../assest/EditIcon"
import DeleteIcon from "../assest/DeleteIcon";
import TopTabbar from "../assest/TopTabbar"
import { gmailData } from "./datacreation";
import { Styles } from "./styles";
import StarSelected from "../assest/StarSelected"
import StarDiselected from "../assest/StarDiselected"
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {
    ScrollView,
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import SwipeToDelete from "./topNavigation";
const LIST_ITEM_HEIGHT = Styles.cardsArrangment.height;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const Gmail = () => {
    const [listData, setListData] = useState(gmailData)
    const [item, setItem] = useState({})
    const scrollRef = useRef(null);

    const selectedItem = (index) => {
        const update = listData[index]
        console.log(update)
        setItem(update)
    }

    const onDismiss = useCallback((task) => {
        setListData((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);


    //panGesture Handler starts
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
    const marginVertical = useSharedValue(10);
    const opacity = useSharedValue(1);

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-SCREEN_WIDTH);
                itemHeight.value = withTiming(0);
                marginVertical.value = withTiming(0);
                opacity.value = withTiming(0, undefined, (isFinished) => {
                    if (isFinished && onDismiss) {
                        runOnJS(onDismiss)(item);
                    }
                });
            } else {
                translateX.value = withTiming(0);
            }
        },
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    const rIconContainerStyle = useAnimatedStyle(() => {
        const opacity = withTiming(
            translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
        );
        return { opacity };
    });

    const rTaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginVertical: marginVertical.value,
            opacity: opacity.value,
        };
    });
    // PanGesture Handler ends

    // Star Selection code 
    const selectionMsg = (item) => {
        const newupdate = listData.map((el, id) => {
            if (el.id === item.id) {
                return {
                    ...el,
                    select: !el.select,
                };
            }

            return el;
        });

        setListData(newupdate);
    }
    // Star Selection code ends 

    return (

        <SafeAreaView style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center" }} >
            {/* <>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: "center", alignSelf: "center", marginTop: 20 }} >
                    <TextInput placeholder="Search in emails" backgroundColor={"#ededed"} style={Styles.inputTxt} />
                    <View style={{ position: "absolute", left: 15 }} >
                        <TopTabbar />
                    </View>
                    <View style={Styles.nameTxt} >
                        <Text style={{ color: "white", fontWeight: "600" }} >r</Text>
                    </View>

                </View>
                <Text style={Styles.InboxTxt} >
                    Inbox
                </Text>
            </> */}
            {/* <SwipeToDelete/> */}
            <FlatList
                data={listData}
                renderItem={({ item, index }) => (
                    <>
                        {index === 0 ?
                            <>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: "center", alignSelf: "center", marginTop: 20 }} >
                                    <TextInput placeholder="Search in emails" backgroundColor={"#ededed"} style={Styles.inputTxt} />
                                    <View style={{ position: "absolute", left: 15 }} >
                                        <TopTabbar />
                                    </View>
                                    <View style={Styles.nameTxt} >
                                        <Text style={{ color: "white", fontWeight: "600" }} >r</Text>
                                    </View>

                                </View>
                                <Text style={Styles.InboxTxt} >
                                    Inbox
                                </Text>
                            </>
                            :

                            <Animated.View style={rTaskContainerStyle} >
                                <Animated.View style={[Styles.swipeBackGround, rIconContainerStyle]} >
                                    <View style={Styles.DeleteIcon}>
                                        <DeleteIcon />
                                    </View>
                                </Animated.View>
                                <View style={{ width: "100%", backgroundColor: "white" }} >
                                    <Pressable onPress={() => selectedItem(index)} >
                                        <PanGestureHandler
                                           simultaneousHandlers={scrollRef}
                                            onGestureEvent={panGesture}
                                        >
                                            <Animated.View style={[Styles.cardsArrangment, rStyle]} >
                                                <View>
                                                    <Image source={{ uri: item.logo }} style={Styles.gmailImages} />
                                                </View>
                                                <View style={Styles.emailContant} >
                                                    <View style={Styles.selectionBox}>
                                                        <Text numberOfLines={1} style={Styles.titleTxt} >{item.title}</Text>
                                                        <Text>25 Oct</Text>
                                                    </View>
                                                    <Text numberOfLines={1} style={Styles.subTitle} >{item.subtitle}</Text>
                                                    <View style={Styles.selectionBox} >
                                                        <Text numberOfLines={1} style={Styles.descriptionTxt} >{item.description}</Text>
                                                        <TouchableOpacity activeOpacity={0.7} style={Styles.starSelection} onPress={() => selectionMsg(item)} >
                                                            {item.select ? <StarSelected /> : <StarDiselected />}
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </Animated.View>
                                        </PanGestureHandler>
                                    </Pressable>
                                </View>
                            </Animated.View>

                        }
                    </>
                )
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
            />
            < TouchableOpacity style={Styles.composeBtn} >
                <EditIcon />
                <Text style={{ color: "black", fontWeight: "400" }}>Compose</Text>
            </TouchableOpacity >
        </SafeAreaView >

    )
}
export default Gmail