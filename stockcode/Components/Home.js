import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity, StatusBar,} from "react-native"
import React, { useState } from "react"
import Search from "../assest/Search.svg"
import Qrcode from "../assest/Qrcode.svg"
import { Styles } from "./styles"
import { dataCreation } from "./datacreation"
import Explore from "./Explore"
import Holding from "./Holding"
import Order from "./Order"
const Home = () => {
    const [data, setdata] = useState("Orders")
    
    const getId = (name) => {
        setdata(name)
    }

    return (
        <SafeAreaView style={Styles.mainpage} >
            <StatusBar backgroundColor="black" />
            <View style={Styles.headerBox} >
                <View style={Styles.headerarr} >
                    <Image source={{ uri: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=" }} style={Styles.logo} />
                    <Text style={Styles.stockTxt} >Stocks</Text>
                </View>
                <View style={Styles.headerBoardBox} >
                    <Search />
                    <Qrcode />
                    <View style={Styles.nameLetter} >
                        <Text style={{ color: "white", fontSize: 18 }}>G</Text>
                    </View>
                </View>
            </View>

            <View style={Styles.niftyIndexes} >
                <View style={Styles.nifty} >
                    <Text style={Styles.niftyTxt} >NIFTY 50</Text>
                    <Text style={Styles.niftyTxt}>19,799.05</Text>
                </View>
                <View style={Styles.nifty} >
                    <Text style={Styles.niftyTxt}>BANK NIFTY</Text>
                    <Text style={Styles.niftyTxt}>44,582.35</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={dataCreation}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item, id }) => (
                        <View style={Styles.innerBox} >
                            <TouchableOpacity style={[Styles.indexStyling, { borderColor:data===item.names?"red":"white" }]} key={id} activeOpacity={0.7} onPress={() => getId(item.names)}  >
                                <Text style={Styles.namesTxt} >{item.names}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, id) => id}
                />
            </View>
            <View>
                {data==="Explore"?<Explore/>:data==="Holdings"?<Holding/>:<Order/>} 
            </View>


        </SafeAreaView>
    )
}
export default Home