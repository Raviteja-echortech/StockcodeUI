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
   commonLiteColors:{
      color:"rgba(120, 120, 120,0.8)"
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
        width:"90%",
        alignSelf:"center"

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
        height: "70@s",
        borderWidth: "1@s",
        borderColor: "white",
        marginRight: "10@s",
        borderRadius: "10@s",
        justifyContent: "center",
        padding: "20@s"
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
        width: "30@s",
        height: "30@s",
        borderRadius: "15@s",
        backgroundColor: "#4169E1",
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
        color: "white", 
        fontSize: "18@s", 
        marginLeft: "3%"
    },
    containtExplore: {
        backgroundColor: 'black', 
        padding: '3%'
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
        borderColor: "rgba(120, 120, 120,0.8)",
        // paddingHorizontal: "10@s",
        // paddingVertical: "10@s",
        padding:'3%',
        justifyContent:"center",
        //backgroundColor:"yellow",
        width: "95%",
        marginTop: "10@s",
        alignSelf: "center",
        borderRadius: "10@s"
    },
    // holderIndexinner: {
    //     alignSelf: "center",
    //     marginBottom: "10@s",
    //     backgroundColor:'red'
    // },

    holdingBoxArrangment: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:'green',
        height:50,

        width:'100%',
         alignItems:'center',
        // padding
    },
    investMents: {
        flexDirection: "row",
        justifyContent: "space-between",
        height:'70@s',
        width: "95%",
        alignSelf: "center",
        borderWidth: "1@s",
        // marginHorizontal: "10@s",
        // paddingBottom: "10@s",
        borderBottomColor: "rgba(120, 120, 120,0.8)",
         alignItems:'center',
    },
    OpenCloseGraphBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"flex-end",
        
    },
    verifyBox: {
        justifyContent: "center", 
        alignItems: "center"
    },
    statusTxt:{
        color:"green", 
        alignSelf:"flex-end"
    },
    circleBox:{
        width:"10@s",
        height:"10@s",
        borderRadius:"5@s",
        backgroundColor:"green"
       
    },
   //orderBox
     
   headerMatter:{
    marginTop: "20@s", 
    width: "95%", 
    alignSelf: "center",
    height:"35@s"
   },
   //watchListcss
    watchListStart:{
        marginTop: "30@s", 
        width: "95%", 
        alignSelf: "center",
        height:"50@s",
        justifyContent:'center'
    } ,
   




})