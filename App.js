import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import NonAddressable from './components/NonAddressable';
import AddressableScreen from './components/AddressableScreen';
import HaloConfigureScreen from './components/HaloConfigureScreen';
import HaloCommandScreen from './components/HaloCommandScreen';
import SequenceCreator from './components/SequenceCreator';
import ProfileCreator from './components/ProfileCreator';
import SaveBuffer from './components/SaveBuffer';
import SendBuffer from './components/SendBuffer';
import SoftwareVersion from './components/SoftwareVersion';
import Reset from './components/Reset';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home Screen" screenOptions={{headerStyle:{
            backgroundColor: '#20b2aa',},headerTintColor:"white",headerTitleAlign:"center"
            ,drawerStyle:{
              width:"56%",alignSelf:"center"
            }       
  }}>
    <Drawer.Screen name="Home Screen" component={HomeScreen} options={{title:" ",}} />
    <Drawer.Screen name="Details Screen" component={DetailsScreen} options={{title:"Infinilite-1"}}/> 
        <Drawer.Screen name="NonAddressable" component={NonAddressable} options={{title:"Non-Addressable Led"}}/>
      <Drawer.Screen name="Addressable" component={AddressableScreen} options={{title:"Addressable Led"}}/>
    <Drawer.Screen name="Halo Configure" component={HaloConfigureScreen}/>
     <Drawer.Screen name="Halo Commands" component={HaloCommandScreen} />
      <Drawer.Screen name="Sequence Creator" component={SequenceCreator}/>
      <Drawer.Screen name="Profile Creator" component={ProfileCreator}/>
      <Drawer.Screen name="SaveBuffer" component={SaveBuffer}/>
      <Drawer.Screen name="SendBuffer" component={SendBuffer}/>
      <Drawer.Screen name="Software Version" component={SoftwareVersion}/>
      <Drawer.Screen name="Reset" component={Reset}/>
    </Drawer.Navigator>
   </NavigationContainer> 
  );
}