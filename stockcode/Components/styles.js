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

    },
    logo: {
        width: "30@s",
        height: "30@s",
        borderRadius: "15@s",
    },

    niftyIndexes: {
        marginTop: "30@s",
        flexDirection: "row",
        justifyContent: "center",

    },
    nifty: {
        width: "40%",
        height: "70@s",
        borderWidth: "1@s",
        borderColor: "white",
        marginRight: "10@s",
        borderRadius: "10@s",
        justifyContent: "center",
        paddingLeft: "15@s"
    },
    niftyTxt: {
        color: "white",
    },
    indexStyling: {
        borderWidth: "1@s",
        padding: "6@s",
        marginLeft: "10@s",
        borderRadius: "35@s",
    },
    innerBox: {
        marginTop: "30@s",
    },
    namesTxt: {
        color: "white",
        fontSize: 16,
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
        width: "35@s",
        height: "35@s",
        borderRadius: "17@s",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },



    // Explore page Css

    exploreContainerBox: {
        marginTop: "20@s"
    },
    stockarrangment: {
        height: Dimensions.get('window').width / 2.1 - 15,
        borderWidth: 1,
        borderColor: "rgba(180, 180, 180,0.5)",
        width: Dimensions.get('window').width / 2.1 - 15,
        padding: '6%',
        margin: 7,
        borderRadius: 10
    },
    Txtcolor: {
        color: "white"
    },
    growwTxt: {
        color: "white", fontSize: 18, marginLeft: "3%"
    },
    containtExplore: {
        backgroundColor: 'black', padding: '3%'
    },



    // Holdings page Css
    holdingTxt: {
        color: "white",
        fontSize: "18@s",
        marginTop: "20@s",
        marginLeft: "10@s",
    },
    holdingIndex: {
        borderWidth: "1@s",
        borderColor: "white",
        paddingHorizontal: "10@s",
        paddingVertical: "10@s",

        width: "95%",
        marginTop: "10@s",
        alignSelf: "center",
        borderRadius: "10@s"
    },
    holderIndexinner: {
        alignSelf: "center",
        marginBottom: "10@s",
    },

    holdingBoxArrangment: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    investMents: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "30@s",
        width: "95%",
        alignSelf: "center",
        borderWidth: "1@s",
        marginBottom: "10@s",
        paddingBottom: "10@s",
        borderBottomColor: "rgba(120, 120, 120,0.8)"
    },
    OpenCloseGraphBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    verifyBox: {
        justifyContent: "center", 
        alignItems: "center"
    }

})