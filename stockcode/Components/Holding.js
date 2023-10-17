import React from "react"
import { View, Text, FlatList, ScrollView, Image, Dimensions } from "react-native"
import OpenClose from "../assest/OpenClose"
import Graphbar from "../assest/Graphbar"
import { Styles } from "./styles"
import { holdingData } from "./datacreation"
const Holding = () => {
    return (
        <View style={Styles.exploreContainerBox} >
            <Text style={Styles.holdingTxt} >Holding (2)</Text>
            <View style={Styles.holdingIndex} >
                <View style={Styles.holdingBoxArrangment} >
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commonLiteColors} >Current</Text>
                        <Text style={Styles.commmanColor} >₹110.06</Text>
                    </View>
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commmanColor}  >Total returns</Text>
                        <Text style={Styles.commanDangerColor}>-₹0.05(0.05%)</Text>
                    </View>
                </View>

                <View style={Styles.holdingBoxArrangment} >
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commonLiteColors} >Invested</Text>
                        <Text style={Styles.commmanColor} >₹110.06</Text>
                    </View>
                    <View style={Styles.holderIndexinner} >
                        <Text style={[Styles.commmanColor,{textAlign:"right"}]}  >1D returns</Text>
                        <Text style={Styles.commanDangerColor}>-₹0.05(0.05%)</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20, width: "95%", alignSelf: "center",height:30 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={Styles.OpenCloseGraphBar} >
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 16 }]} >Sort</Text>
                        <Graphbar />
                    </View>
                    <View style={Styles.OpenCloseGraphBar}>
                        <OpenClose />
                        <Text style={[Styles.commmanColor, { fontSize: 16, textAlign: "right" }]}>Current(Invested) </Text>
                    </View>
                </View>
            </View>
                <FlatList
                    data={holdingData}
                    style={{ height: Dimensions.get('window').height * 0.2,}}
                    renderItem={({ item, index }) => (
                        <View key={item.id} style={Styles.investMents}  >
                            <View style={{width:"28%"}} >
                                <Text style={[Styles.Txtcolor, { textAlign: "left", fontSize: 14 }]} numberOfLines={1} >{item.names}</Text>
                                <Text style={{ color:"rgba(180, 180, 180,0.5)",textAlign: "left", fontSize: 14 }} >{item.numberOfShares}</Text>
                            </View>
                            <Image source={{ uri: item.img }} style={{ width: 20, height: 20 }} />
                            <View>
                                <Text style={{ color: item.id % 2 === 0 ? "red" : "green", textAlign: "right" }}  >₹ {item.existingPrice}</Text>
                                <Text style={Styles.Txtcolor} > ( ₹ {item.stockPricing})</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => String(index)}
                />
            <View style={Styles.verifyBox} >
                <Text style={{ color: "green", fontSize: 20,fontWeight:"600"}} >Verify holdings</Text>
            </View>

        </View>
    )
}
export default Holding