import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity, StatusBar, Dimensions, Button } from "react-native"
import React from "react"
import Search from "../assest/Search.svg"
import Qrcode from "../assest/Qrcode.svg"
import { Styles } from "./styles"
import TopNavigation from "./topNavigation";

const Home = () => {

    return (
        <SafeAreaView style={Styles.mainpage}  >
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
                        <Text style={{ color: "white", fontSize: 15 }}>R</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.niftyIndexes} >
                <View style={Styles.nifty} >
                    <Text style={Styles.niftyTxt} >NIFTY 50</Text>
                    <View style={Styles.niftyIndexBox}>
                        <Text style={[Styles.niftyTxt, { fontSize: 12, marginRight: 10 }]}>19,799.05</Text>
                        <Text style={[Styles.commanDangerColor, { fontSize: 12, }]} >-13.25(0.07%)</Text>
                    </View>
                </View>
                <View style={Styles.nifty} >
                    <Text style={Styles.niftyTxt}>BANK NIFTY</Text>
                    <View style={Styles.niftyIndexBox} >
                        <Text style={[Styles.niftyTxt, { fontSize: 12, marginRight: 10 }]}>44,582.35</Text>
                        <Text style={[Styles.commanSaveColor, { fontSize: 11 }]} >+65.25(0.15%)</Text>
                    </View>
                </View>
            </View>
            <TopNavigation />

        </SafeAreaView>

    )
}
export default Home