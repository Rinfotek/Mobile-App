import React, { useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function DetailsScreen({navigation}) {
  return(
  
    <View style={[styles.container]}>
  
      <View style={{flex:1,justifyContent:"center"}}>
      <Text style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center" }}>RGB</Text>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold", textAlign: "center" }}> CONTROLLER</Text>
      </View>
        
      <View style={{backgroundColor:"#20b2aa",height:"7%"}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:5,marginTop:10}}>
        <TouchableOpacity onPress={() =>  navigation.navigate( "Home Screen")}>
          <Text> <Ionicons name="caret-back-sharp" size={25} style={{color:"white"}}></Ionicons></Text >
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home Screen")
        } >
          
            <Text><Ionicons name="home" size={25} style={{color:"white"}}></Ionicons></Text>
        
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NonAddressable")
        } >
        
            <Text><Ionicons name="caret-forward-sharp" size={25} style={{color:"white"}}></Ionicons></Text>
         
        </TouchableOpacity>
        </View>
      </View>
    </View>


  );


  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE0",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    height: 40,
    width: 80,
    backgroundColor: "#ff1493",
    textAlign: "center",
    borderRadius: 5,
    paddingVertical: 5,
    color: "#000",


  },
  backButton: {
    backgroundColor: "blue"
  },
  menuContent: {
    color: "gray",
    fontWeight: "bold",
    padding: 2,
    fontSize: 15
  }
});