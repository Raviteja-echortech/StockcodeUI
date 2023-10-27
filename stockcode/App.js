
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React from "react"
import TopTabbar from "./assest/TopTabbar"
import { View, TextInput, Text } from "react-native"
import Bottombar from "./Components/BottomTab";
//import NotificationScreen from "./Components/NotificationScreen";

import {
  GestureHandlerRootView, ScrollView,
} from 'react-native-gesture-handler';
import SwipeToDelete from "./Components/topNavigation";
import { Styles } from "./Components/styles";

const App = () => {

  return (
    <SwipeToDelete/>
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <NavigationContainer >
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false
    //       }}
    //     >
    //       <Stack.Screen name="bottombar" component={Bottombar} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </GestureHandlerRootView>
  )
}
export default App

//import { StatusBar } from 'expo-status-bar';
// import React, { useCallback, useRef, useState } from 'react';
// import { SafeAreaView, StyleSheet, Text } from 'react-native';
// import {
//   ScrollView,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import ListItem from './Components/topNavigation';
// import { gmailData } from './Components/datacreation';

// const TITLES = [
//   'Record the dismissible tutorial 🎥',
//   'Leave 👍🏼 to the video',
//   'Check YouTube comments',
//   'Subscribe to the channel 🚀',
//   'Leave a ⭐️ on the GitHub Repo',
// ];



// const TASKS = TITLES.map((title, index) => ({ title, index }));


// const BACKGROUND_COLOR = '#FAFBFF';

// function App() {
//   const [tasks, setTasks] = useState(TASKS);

//   const onDismiss = useCallback((task) => {
//     setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
//   }, []);

//   const scrollRef = useRef(null);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         {/* <StatusBar style="auto" /> */}
//         <Text style={styles.title}>Tasks</Text>
//         <ScrollView ref={scrollRef} style={{ flex: 1 }}>
//           {tasks.map((task) => (
//             <ListItem
//               simultaneousHandlers={scrollRef}
//               key={task.index}
//               task={task}
//               onDismiss={onDismiss}
//             />
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: BACKGROUND_COLOR,
//   },
//   title: {
//     fontSize: 60,
//     marginVertical: 20,
//     paddingLeft: '5%',
//   },
// });

