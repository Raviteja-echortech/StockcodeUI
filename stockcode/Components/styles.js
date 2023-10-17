import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from "react-native"
export const Styles = ScaledSheet.create({
    // commanFonts start
    commmanColor: {
        color: "white"
    },
    commanSaveColor: {
        color: "green"
    },
    commanDangerColor: {
        color: "red"
    },
    commonLiteColors: {
        color: "rgba(120, 120, 120,0.8)"
    },
    niftyIndexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%"
    },
    // comman Fonts End
    mainpage: {
        flexGrow: 1,
        backgroundColor: "black",

    },
    headerarr: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10@s",
        width: "90%",
        alignSelf: "center"

    },
    logo: {
        width: "30@s",
        height: "30@s",
        borderRadius: "15@s",
    },

    niftyIndexes: {
        marginTop: "30@s",
        marginBottom: "20@s",
        flexDirection: "row",
        justifyContent: "space-evenly",

    },
    nifty: {
        height: "70@s",
        borderWidth: "1@s",
         width:"45%",
        borderColor: "rgba(120,120, 120, 1)",
        borderRadius: "10@s",
        justifyContent: "center",
        padding: "16@s"
    },
    niftyTxt: {
        color: "white",
        fontSize: "12@s",
        fontSize: "12@s",
        marginRight: "10@s",
    },
    indexStyling: {
        borderWidth: "1@s",
        height: "30@s",
        width: "100@s",
        marginLeft: "10@s",
        borderRadius: "20@s",
        justifyContent: "center",
        alignItems: "center",

    },
    innerBox: {
        marginTop: "30@s",

    },
    namesTxt: {
        fontSize: 13,
        textAlign: "center"
    },
    stockTxt: {
        color: "white",
        fontSize: "18@s",
        marginLeft: "13@s",
    },
    headerBoardBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        alignItems: "center"
    },
    nameLetter: {
        width: "25@s",
        height: "25@s",
        borderRadius: "12.5@s",
        backgroundColor: "#4169E1",
        justifyContent: "center",
        alignItems: "center"
    },



    // Explore page Css

    exploreContainerBox: {
        backgroundColor: "black",
        flexGrow: 1,
    },
    stockarrangment: {
        height: Dimensions.get('window').width / 2.3 - 15,
        borderWidth: "1@s",
        borderColor: "rgba(180, 180, 180,0.5)",
        width: Dimensions.get('window').width / 2.1 - 15,
        padding: '5%',
        margin: "5@s",
        borderRadius: "10@s"
    },
    Txtcolor: {
        color: "white",
        lineHeight: "25@s"
    },
    growwTxt: {
        color: "white",
        fontSize: "18@s",
        marginTop: "20@s",
        marginLeft: "4%"
    },
    containtExplore: {
        backgroundColor: 'black',
        padding: '3%',
        //width:Dimensions.get("window").width*0.95,
      
    },


    // Holdings page Css
    holdingTxt: {
        color: "white",
        fontSize: "15@s",
        marginTop: "20@s",
        marginLeft: "10@s",
    },
    holdingIndex: {
        borderWidth: "1@s",
        borderColor: "rgba(120, 120, 120,0.8)",
        // paddingHorizontal: "10@s",
        // paddingVertical: "10@s",
        padding: '3%',
        justifyContent: "center",
        //backgroundColor:"yellow",
        width: "95%",
        marginTop: "10@s",
        alignSelf: "center",
        borderRadius: "10@s"
    },


    holdingBoxArrangment: {
        flexDirection: "row",
        justifyContent: "space-between",

        height: 50,

        width: '100%',
        alignItems: 'center',

    },
    investMents: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: '70@s',
        width: "95%",
        alignSelf: "center",
        borderWidth: "1@s",
        borderBottomColor: "rgba(120, 120, 120,0.8)",
        alignItems: 'center',
    },
    investMentsStocks: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: '95@s',
        width: "95%",
        alignSelf: "center",
        borderWidth: "1@s",
        borderBottomColor: "rgba(120, 120, 120,0.8)",
        alignItems: 'center',
    },
    OpenCloseGraphBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",

    },
    verifyBox: {
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "15@s",
        height: "30%",
    },
    statusTxt: {
        color: "green",
        alignSelf: "flex-end"
    },
    circleBox: {
        width: "10@s",
        height: "10@s",
        borderRadius: "5@s",
    },
    //orderBox

    headerMatter: {
        marginTop: "20@s",
        width: "95%",
        alignSelf: "center",
        height: "35@s"
    },

    //watchListcss
    watchListStart: {
        marginTop: "10@s",
        width: "95%",
        alignSelf: "center",
        height: "50@s",
        justifyContent: 'center'
    },

    watchList: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "50@s",
        width: "95%",
        marginBottom: "70@s",
        alignSelf: "center",
        alignItems: "center",

    },

    container: {
        flex: 1,
        padding: "24@s",
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    topTabBar: {
        color: "white",
        borderWidth: "1@s",
        borderColor: "white",
        padding: "10@s",
    },
    inputTagStyles: {
        borderWidth: "2@s",
        borderColor: "green",
        width: "90%",
        alignSelf: "center",
        borderRadius: "10@s",
        marginTop: "10@s",
        padding: "10@s",
        fontSize: "15@s",

    },
    listCreationStyles: {
        color: "white",
        fontWeight: "600",
        marginLeft: "18@s",
        fontSize: "18@s",
        marginTop: "5@s",
        marginBottom: "5@s",
    },
    TouchableBtn: {
        padding: "15@s",
        position: 'absolute',
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        bottom: "15@s",
        // left: "0@s",
        alignSelf: "center",
        borderRadius: "10@s",
        backgroundColor: "rgba(200,200,200,0.5)"
    },
    BottomSheetBtn: {
        backgroundColor: "rgb(60, 60, 60)",
         flexGrow: 1,
    },


})