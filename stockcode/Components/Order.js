import { View, Text, FlatList } from "react-native"
import React from "react"
import { Styles } from "./styles"
import { OrderData } from "./datacreation"

const Order = () => {
    return (
        <View>
            {/* header Stating */}
            <View style={{ marginTop: 20, width: "95%", alignSelf: "center" }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={[Styles.OpenCloseGraphBar]} >
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 18 }]} >Today's Orders</Text>
                        <Text style={{ fontSize: 11, color: "white" }} >Equity</Text>
                    </View>
                    <View>
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 18 }]}>All Orders</Text>
                    </View>
                </View>
            </View>
            {/* header Ending */}
            <FlatList
                data={OrderData}
                renderItem={({ item, id }) => (
                    <View style={Styles.investMents} >
                        <View  >
                            <Text style={Styles.Txtcolor} numberOfLines={1} >{item.time}</Text>
                            <Text style={Styles.Txtcolor} >{item.investedStockNames}</Text>
                           <Text  style={Styles.Txtcolor}>Delivery</Text>
                        </View>
                        <View>
                            <Text style={Styles.Txtcolor}  >{item.status}</Text>
                            <Text style={Styles.Txtcolor}>{item.numberOfShares}</Text>
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