import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Button, TouchableOpacity, Text, StyleSheet} from 'react-native';
import HomeScreen from './tabs/Home';
import NotificationsScreen from './tabs/Notifications';
import ResourceScreen from './tabs/Resource';
import ActivitiesScreen from './tabs/Activities';
import AboutScreen from './stacks/About';
import RegistrationScreen from './stacks/Registration';
import ProfileScreen from './Draws/Profile';
import SettingsScreen from './Draws/settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ActivityScreen from './stacks/activityls';
import Books from './resources/bookSource';
import Files from './resources/enter';
import Cat from './resources/resourceSc';
import BookScreen from './resources/Books'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
 
function Home() {
  return (
   
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={App} 
        options={({navigation}) => ({
          drawerLabel: 'Home',
          drawerIcon:({color})=>(<Icon name="home" color={color} size={20}/>),
        })}  />
        <Drawer.Screen name="Profile" component={ProfileScreen} 
                 options={{ drawerLabel: 'Profile',
                 drawerIcon:({color})=>(<Icon name="user-circle" color={color} size={20}/>) }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}options={{ drawerLabel: 'Settings',
                 drawerIcon:({color})=>(<Icon name="cog" color={color} size={20}/>) }} />
      </Drawer.Navigator>
   
  );
}

function App() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0F52BA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    }}
    >
     <Stack.Screen name="Home" component={HomeScreen}  options={({navigation})=>({
          headerLeft: () => (
            <Icon style={styles.togglebar}
              name="navicon"
              size={18}
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button style={styles.touchable}
              title="Who we are"
              name='Who we are'
              size={20}
              onPress={() =>{ navigation.navigate('Who we are');}}/>
          ),
        })}/>
      <Stack.Screen name="Who we are" component={AboutScreen}/>
    </Stack.Navigator>
  );
}

function Resource() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0F52BA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    }}
    >
      <Stack.Screen name="Resources" component={ResourceScreen}/>
      <Stack.Screen name="category" component={Cat}/>
     <Stack.Screen name="BooksCategory" component={Files}/>
     <Stack.Screen name="Book" component={BookScreen}/>
    </Stack.Navigator>
  );
}

function Activity() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0F52BA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    }}
    >
     <Stack.Screen name="Activities" component={ActivitiesScreen}/>
    </Stack.Navigator>
  );
}

function Note() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0F52BA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    }}
    >
     <Stack.Screen name="Notifications" component={NotificationsScreen}  options={({navigation})=>({})}/>
    </Stack.Navigator>
  );
}

export default function Tabs(){
  return(
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={23} style={styles.tab}/>),
        }}/>
            <Tab.Screen name="Resources" component={Resource}options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={23} style={styles.tab}/>
          ),
        }} />
            <Tab.Screen name="Activities" component={Activity} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={23} style={styles.tab}/>
          ),
        }} />
        <Tab.Screen name="Notifications" component={Note} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={23} style={styles.tab} />
          ),
        }}/>
      </Tab.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create({
  touchable:{
    color: '#0F52BA',
    backgroundColor:"cyan",
    paddingTop: 10,
    paddingBottom:5,
    paddingLeft:5
  },
  togglebar:{
    paddingLeft:10,
    width:10,
  },
  tab:{
    marginTop:10,
  },
})