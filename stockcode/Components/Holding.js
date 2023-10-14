import React from "react"
import { View, Text, FlatList, ScrollView,Image,Dimensions} from "react-native"
import OpenClose from "../assest/OpenClose"
import Graphbar from "../assest/Graphbar"
import { Styles } from "./styles"
import { holdingData } from "./datacreation"
const Holding = () => {
    return (
        <View>
            <Text style={Styles.holdingTxt} >Holding (2)</Text>
            <View style={Styles.holdingIndex} >
                <View style={Styles.holdingBoxArrangment} >
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commmanColor} >Current</Text>
                        <Text style={Styles.commmanColor} >₹110.06</Text>
                    </View>
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commmanColor}  >Total returns</Text>
                        <Text style={Styles.commanDangerColor}>-₹0.05(0.05%)</Text>
                    </View>
                </View>

                <View style={Styles.holdingBoxArrangment} >
                    <View style={Styles.holderIndexinner}>
                        <Text style={Styles.commmanColor} >Invested</Text>
                        <Text style={Styles.commmanColor} >₹110.06</Text>
                    </View>
                    <View style={Styles.holderIndexinner} >
                        <Text style={Styles.commmanColor}  >Total returns</Text>
                        <Text style={Styles.commanDangerColor}>-₹0.05(0.05%)</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20,width:"95%",alignSelf:"center" }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={Styles.OpenCloseGraphBar} >
                        <Text style={[Styles.commmanColor, { marginRight: 5,fontSize:16 }]} >Sort</Text>
                        <Graphbar />
                    </View>
                    <View style={Styles.OpenCloseGraphBar}>
                        <OpenClose />
                        <Text style={[Styles.commmanColor, {fontSize:16,textAlign:"right"}]}>Current(Invested) </Text>
                    </View>
                </View>
            </View>
            < View style={{marginBottom:10}} >
                <FlatList
                    data={holdingData}
                    style={{height:Dimensions.get('window').height*0.6}}
                    renderItem={({ item, id }) => (
                        <View key={item.id} style={Styles.investMents}  >
                            <View>
                                <Text style={[Styles.Txtcolor,{textAlign:"left",fontSize:14}]} numberOfLines={1} >{item.names}</Text>
                                <Text style={[Styles.Txtcolor,{textAlign:"left",fontSize:14}]} >{item.numberOfShares}</Text>
                            </View>
                            <Image source={{uri:item.img}} style={{width:20,height:20}} />
                            <View>
                                <Text style={{ color: item.id % 2 === 0 ? "red" : "green",textAlign:"right"}}  >₹ {item.existingPrice}</Text>
                                <Text style={Styles.Txtcolor} > ( ₹ {item.stockPricing})</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, id) => id}
                />
            </View>
             <View style={Styles.verifyBox} >
                <Text style={{color:"green",fontSize:20}} >Verify holdings</Text>
             </View>

        </View>
    )
}
export default Holding