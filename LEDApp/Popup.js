import { View, Text,StyleSheet,TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import {Icon } from 'react-native-elements';

const Popup = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
    <TouchableOpacity
      style={styles.buttonOpacity}
      
       onPress={() => setModalVisible((prev) => !prev)}
      >
      <Text style={styles.buttonText}>Send</Text>
    </TouchableOpacity>

    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.contentView1, { alignItems: "center"}]}>
          <View style={[styles.modalView]}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontSize:15, fontWeight: "bold",color:"gray" }}>LED CONTROLLER</Text>
              <TouchableOpacity style={{ paddingHorizontal: 4 }}
                onPress={() => setModalVisible((prev) => !prev)}
              >
                <Icon name="close" />
             
              </TouchableOpacity>
            </View>
            <View  style={{justifyContent:"center",marginVertical:10}}>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>Data Send Successfully</Text>
             {/* <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>SLAVE ADDRESS GREEN:</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>RGB SELECT GREEN:</Text> */}
             
            </View>
            {/*
            <View style={{justifyContent:"center",marginVertical:10}}>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>BRIGHTNESS GREEN:</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>TIMER GREEN:</Text>
            </View>
            <View style={{justifyContent:"center" ,marginVertical:10}}>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>BRIGHTNESS RED:</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>TIMER RED:</Text>
            <View style={{justifyContent:"center" ,marginVertical:10}}>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>BRIGHTNESS BLUE:</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold",color:"gray"}}>TIMER BLUE</Text> 
            </View> 
            </View>    */}
          </View>
        </View>
      </Modal>
    </View>
  </View>
  )
}

export default Popup
const styles=StyleSheet.create({
    buttonOpacity: {
        backgroundColor:"#20b2aa",
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 5,
         elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5
      },
      buttonText: {
        fontWeight:"bold",
        letterSpacing:2,
        textTransform:"uppercase",
        color:"black",
        textAlign:"center",
        color:"white"
      }
      ,
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    width: "65%",
    marginVertical: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
    shadowColor: "#000",
    height: "30%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  contentView1:{
    width:"90%",
    marginLeft:20 
  }
    
})
