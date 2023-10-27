import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import TopTabbar from "../assest/TopTabbar"
import DeleteIcon from "../assest/DeleteIcon";
import StarSelected from "../assest/StarSelected"
import StarDiselected from "../assest/StarDiselected"
import { SwipeListView } from 'react-native-swipe-list-view';
import { gmailData } from './datacreation';
import { Styles } from './styles';

const rowTranslateAnimatedValues = {};
gmailData.forEach((_, i) => {
  rowTranslateAnimatedValues[`${i}`] = new Animated.Value(2);
});

export default function SwipeToDelete() {
  const [listData, setListData] = useState(
    gmailData.map((el, i) => ({ key: `${i}`, text: el }))
  );

  const ListHeaderComponent = () => {
    return (
      <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: "center", alignSelf: "center", marginTop: 20 }} >
          <TextInput placeholder="Search in emails" backgroundColor={"#ededed"} style={Styles.inputTxt} />
          <View style={{ position: "absolute", left: 15 }} >
            <TopTabbar />
          </View>
          <View style={Styles.nameTxt} >
            <Text style={{ color: "white", fontWeight: "600" }} >r</Text>
          </View>

        </View>
        <Text style={Styles.InboxTxt} >
          Inbox
        </Text>
      </>
    )
  }
  const onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    if (
      value < -Dimensions.get('window').width
      //&&!this.animationIsRunning
    ) {
      //this.animationIsRunning = true;
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setListData(newData);
        //this.animationIsRunning = false;
      });
    }
  };
  const selectionMsg = (item) => {
    const newupdate = listData.map((el, id) => {
      if (el.text.id === item.id) {
        return {
          ...el,
          select: !el.text.select,
        };
      }
      return el;
    });
    setListData(newupdate);
  }

  const renderItem = data => (
    <>
      <Animated.View

        style={[
          styles.rowFrontContainer,
          {
            height: rowTranslateAnimatedValues[
              data.item.key
            ].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50],
            }),
          },
        ]}
      >
        <TouchableHighlight
          style={styles.rowFront}
          underlayColor={'#AAA'}
        >
          <View style={{ width: "100%", backgroundColor: "white", }} >
            <View style={[Styles.cardsArrangment]}>
              <View>
                <Image source={{ uri: data.item.text.logo }} style={Styles.gmailImages} />
              </View>
              <View style={Styles.emailContant} >
                <View style={Styles.selectionBox}>
                  <Text numberOfLines={1} style={Styles.titleTxt} >{data.item.text.title}</Text>
                  <Text>25 Oct</Text>
                </View>
                <Text numberOfLines={1} style={Styles.subTitle} >{data.item.text.subtitle}</Text>
                <View style={Styles.selectionBox} >
                  <Text numberOfLines={1} style={Styles.descriptionTxt} >{data.item.text.description}</Text>
                  <TouchableOpacity activeOpacity={0.7} style={Styles.starSelection} onPress={() => selectionMsg(data.item.text)} >
                    {data.item.text.select ? <StarSelected /> : <StarDiselected />}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Animated.View>
    </>
  );

  const renderHiddenItem = () => (
    <View style={[Styles.swipeBackGround]} >
      <View style={Styles.DeleteIcon}>
        <DeleteIcon />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        disableLeftSwipe
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={-Dimensions.get('window').width}
        previewRowKey={'0'}
        ListHeaderComponent={ListHeaderComponent}
        // previewOpenValue={-40}
        // previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    // height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});