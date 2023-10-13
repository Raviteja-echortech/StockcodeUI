import React, { useState } from "react"
import {View,Text, FlatList,Image,} from "react-native"
import { Exploredata } from "./datacreation"
import { Styles } from "./styles"
const Explore=()=>{
   return(
   <View style={Styles.exploreContainerBox} >
    <Text style={Styles.growwTxt}> Most bought on Groww</Text>
    <View>
        <FlatList
           data={Exploredata}
           numColumns={2}
           style={Styles.containtExplore}
           renderItem={({item,id})=>(
            <View key={item.id} style={Styles.stockarrangment} >
                <Image source={{uri: item.logo}} style={{ width:50, height:50,}}  />
                 <Text style={Styles.Txtcolor} numberOfLines={1} >{item.name}</Text>
                 <Text style={Styles.Txtcolor} >₹ {item.pricing}</Text>
                 <Text  style={{color:item.id%2===0?"red":"green"}}  >{item.avg}</Text>
            </View>
           )}
           keyExtractor={(item, id) => id}    
        />
    </View>
   </View>
   ) 
}
export default Explore