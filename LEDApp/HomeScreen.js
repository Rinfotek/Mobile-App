import { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function HomeScreen({navigation}) {
    return (
      <View style={[styles.container, {
        flexDirection: "column",
        flex: 1,
  
      }]}>
        <View style={{ flex:3, marginTop:50 }}>
          <Text style={[styles.text, styles.led, styles.align]} > RGB</Text>
        </View>
        <View style={{ flex:4 }}>
          <Text style={[styles.text, styles.led, styles.align,{marginTop:5}]} > CONTROLLER</Text>
        </View>
        <View style={{ flex:8 }}>
          <Text style={[styles.text, styles.logo, styles.align,{marginTop:20}]}>ELITE GAMING</Text>
        </View>
        <View style={{ flex: 3 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Details Screen')} style={{ backgroundColor: "red" }}>
            <Text style={{backgroundColor:"red",color:"white",fontSize:30,fontWeight:"bold",letterSpacing:3,marginLeft:-10}}> <FontAwesome name={"star"} size={40} color="green" />INFINILITE-1</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={[styles.text, styles.font]}><FontAwesome name={"star"} size={40} color="white" />INFINILITE-2</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={[styles.text, styles.font]}><FontAwesome name={"star"} size={40} color="white" />INFINILITE-3</Text>
        </View>
        <View style={{ flex: 6 }}>
          <Text style={[styles.text, styles.font]}><FontAwesome name={"star"} size={40} color="white" />PMU</Text>
        </View>
        <View style={{backgroundColor:"#20b2aa",height:"7%"}}>
       

        </View>
      </View>
    );
  }
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1000FF",
        position:"relative",
        justifyContent:"flex-end"
    
    
      }
      , text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        
    
    
      },
      logo: {
        backgroundColor: "green",
        marginHorizontal: 30,
        paddingVertical:10,
        height: 80,
        
    
      },
      font: {
        fontSize: 30,
        letterSpacing:3,
    
    
    
      },
      align: {
    
        textAlign: "center"
      }

})

  