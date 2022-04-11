import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Reset = ({navigation}) => {
  return (
    <View View style={[styles.container]}>
       <View style={{backgroundColor:"#20b2aa",height:"7%"}}> 
     <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:5,marginTop:10}}>
        <TouchableOpacity onPress={() =>  navigation.navigate("Software Version")}>
          <Text> <Ionicons name="caret-back-sharp" size={25} style={{color:"white"}}></Ionicons></Text >
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate()
        } >
        
            <Text><Ionicons name="caret-forward-sharp" size={25} style={{color:"white"}}></Ionicons></Text>
         
        </TouchableOpacity>
        </View>
     </View>
      </View>
  )
}

export default Reset

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFE0",
        justifyContent:"flex-end"
      
      }
})