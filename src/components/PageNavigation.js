import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Profile from "../screens/Profile";
import Home from '../screens/Home';
import CameraScreen from '../screens/CameraScreen';
import Color from '../components/Color';
import FoodForm from '../screens/FoodForm';

const Tab = createBottomTabNavigator();


const AddFoodStack = createNativeStackNavigator();

function AddFoodStackScreen() {
  return (
    <AddFoodStack.Navigator>
      <AddFoodStack.Screen
        name='CameraScreen'
        component={CameraScreen}
        options={{
          tabBarLabel: 'CameraScreen',
          tabBarIcon: ({ color }) => (

            <FontAwesome5 name="camera" size={24} color={color} />
          ),
          // headerStyle: { backgroundColor: '#d8a7a9' },
          headerShown: false,
          // headerStyle: { backgroundColor:  Color.navPink }
        }}
      />
      <AddFoodStack.Screen
        name='foodform'
        component={FoodForm}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Color.navPink },
          headerTintColor: '#fff',
          title: "Food Submission",
          headerBackTitle: 'Retake',
        }} />
    </AddFoodStack.Navigator>
  )
}

export const PageNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.gradientWhite,
          tabBarInactiveTintColor: Color.tabPink,
          tabBarStyle: { backgroundColor: Color.navPink }
        }}
        initialRouteName='Home'
      >

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='home' size={24} color={color} style={styles.icons} />
            ),
            tabBarLabel: 'Home',
            headerStyle: { backgroundColor: Color.navPink },
            title: '',
            headerTintColor: Color.gradientWhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name='Add a Meal!'
          component={AddFoodStackScreen}
          options={{
            tabBarLabel: 'Add Food',

            tabBarIcon: ({ color }) => (

              <FontAwesome5 name="camera" size={24} color={color} style={styles.icons} />
            ),
            // headerStyle: { backgroundColor: '#d8a7a9' },
            headerShown: false
            // headerStyle: { backgroundColor:  Color.navPink }
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='person-sharp' size={24} color={color} style={styles.icons} />
            ),
            headerStyle: { backgroundColor: Color.navPink },
            title: 'Profile',
            headerTintColor: Color.gradientWhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  icons: {
    marginTop: 15,
  }
})


// const MainStack = createNativeStackNavigator()
// const AdventureStack = createNativeStackNavigator()

// function MainStackScreen () {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen
//         name='Home'
//         component={Home}
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: '#d8a7a9' }
//         }}
//       />
//       <MainStack.Screen
//         name='CameraScreen'
//         component={CameraScreen}
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: '#d8a7a9' }
//         }}
//       />
//     </MainStack.Navigator>
//   )
// }



// function AdventureStackScreen () {
//   return (
//     <AdventureStack.Navigator>
//       <AdventureStack.Screen
//         name='StoryCreator'
//         component={StoryCreatorScreen}
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: '#d8a7a9' },
//           title: 'Start Your Adventure!'
//         }}
//       />
//       <AdventureStack.Screen
//         name='Background'
//         component={BackImg}
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: '#d8a7a9' },
//           title: 'Your Adventure!',
//           headerBackTitle: 'Back'
//         }}
//       />
//     </AdventureStack.Navigator>
//   )
// }