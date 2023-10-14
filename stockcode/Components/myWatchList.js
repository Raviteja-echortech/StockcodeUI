import React from "react"
import { View ,Text, FlatList, ScrollView, Dimensions} from "react-native"
import OpenClose from "../assest/OpenClose"
import Graphbar from "../assest/Graphbar"
import { Styles } from "./styles"
import { stockList } from "./datacreation"

const WatchList = () => {
    return (
        < View style={{height:"100%"}}>
             <View style={Styles.watchListStart} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={Styles.OpenCloseGraphBar} >
                        <Text style={[Styles.commmanColor, { marginRight: 5, fontSize: 13 }]} >Sort</Text>
                        <Graphbar />
                    </View>
                    <View style={Styles.OpenCloseGraphBar}>
                        <OpenClose />
                        <Text style={[Styles.commmanColor, { fontSize: 13, textAlign:"right",marginLeft:6 }]}>Market Price </Text>
                    </View>
                </View>
            </View> 
             <View > 
                <FlatList
                   data={stockList}
                   scrollEnabled
                   style={{height:Dimensions.get('window').height*0.6}}
                   renderItem={({ item, index }) => (
                    <View key={item.id} style={Styles?.investMents}  >
                        <View> 
                            <Text style={[Styles.commmanColor,{color:item?.givegreen?"green":"white"}]} >{item?.industrieName}</Text>
                        </View>
                        <View>
                             <Text style={[Styles.commmanColor,{color:item.givegreen?"green":"white",textAlign:"right"}]} > {item?.stockPrice}</Text>
                            {item?.profitLoss===undefined?null:<Text style={[Styles.commanSaveColor,{textAlign:"right"}]}>{item?.profitLoss}</Text>} 
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) =>String(index) }
                />
            </View>
        </View>
    )
}
export default WatchList