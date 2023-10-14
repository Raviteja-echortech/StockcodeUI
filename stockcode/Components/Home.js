import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity, StatusBar, } from "react-native"
import React, { useState } from "react"
import Search from "../assest/Search.svg"
import Qrcode from "../assest/Qrcode.svg"
import { Styles } from "./styles"
import { Enums, dataCreation } from "./datacreation"
import Explore from "./Explore"
import Holding from "./Holding"
import WatchList from "./myWatchList"
import Order from "./Order"
import WatchListPlus from "./WatchListPlus"
const Home = () => {
    const [data, setdata] = useState("My WatchList")

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
                    <View style={{ flexDirection: "row" }}>
                        <Text style={[Styles.niftyTxt, { fontSize: 10 }]}>19,799.05</Text>
                        <Text style={[Styles.commanDangerColor, { fontSize: 10 }]} >-13.25(0.07%)</Text>
                    </View>

                </View>
                <View style={Styles.nifty} >
                    <Text style={Styles.niftyTxt}>BANK NIFTY</Text>
                    <View style={{ flexDirection: "row" }} >
                        <Text style={[Styles.niftyTxt, { fontSize: 10 }]}>44,582.35</Text>
                        <Text style={[Styles.commanSaveColor, { fontSize: 10 }]} >+65.25(0.15%)</Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={dataCreation}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}

                    renderItem={({ item, id }) => (
                        <View style={Styles.innerBox} >
                            <TouchableOpacity style={[Styles.indexStyling, { borderColor: data === item.names ? "white" : "rgba(120,120, 120, 1)" }]} key={id} activeOpacity={0.7} onPress={() => getId(item.names)}  >
                                <Text style={[Styles.namesTxt, { color: data === item.names ? "white" : "rgba(120,120, 120, 1)" }]} >{item.names}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(_, id) => String(id)}
                />
            </View>
            <View>
                {data === Enums.Explore ? <Explore /> : data === Enums.Holdings ? <Holding /> : data === Enums.Orders ? <Order /> : data === Enums.WatchList ? <WatchList /> : data === Enums.List ? <WatchListPlus /> : null}
            </View>

        </SafeAreaView>
    )
}
export default Home