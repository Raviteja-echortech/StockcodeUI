import { View, Text, FlatList,Dimensions } from "react-native"
import React from "react"
import { Styles } from "./styles"
import { OrderData } from "./datacreation"

const Order = () => {
    return (
        <View style={Styles.exploreContainerBox} >
            {/* header Stating */}
            <View style={Styles.headerMatter} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={[Styles.OpenCloseGraphBar]} >
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 18 }]} >Today's Orders</Text>
                        <Text style={[Styles.commonLiteColors,{fontSize: 11}]} >Equity</Text>
                    </View>
                    <View>
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 18 }]}>All Orders</Text>
                    </View>
                </View>
            </View>
            {/* header Ending */}
            <FlatList
                data={OrderData}
                style={{height:Dimensions.get('window').height*0.6}}
                renderItem={({ item, id }) => (
                    <View style={Styles.investMents} >
                        <View>
                            <Text style={Styles.Txtcolor} numberOfLines={1} >{item.time}</Text>
                            <Text style={Styles.Txtcolor} >{item.investedStockNames}</Text>
                           <Text  style={Styles.commonLiteColors}>Delivery</Text>
                        </View>
                        <View>
                            <Text style={[ Styles.statusTxt]} >{item.status}</Text>
                            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",alignSelf:"flex-end"}} >
                                <View style={[Styles.circleBox]}></View>
                            <Text style={[Styles.Txtcolor,{marginLeft:7}]}>{item.numberOfShares}</Text>
                            </View>
                            <Text style={Styles.Txtcolor} > Avg ₹ {item.avg}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, id) => id}
            />

        </View>
    )
}
export default Order