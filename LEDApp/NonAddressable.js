import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import Popup from './Popup';

function NonAddressable({ navigation }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [option, setOption] = useState(null);
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const data = [
    { value: 'OFF' },
    { value: 'BLINK' },
    { value: 'BREATH' },
    { value: 'ON' }
  ]
  return (
    <View View style={[styles.container]}>
      {/* <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", color: "gray",marginTop:10 }}>NON-ADDRESSABLE LED</Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", color: "gray" }}> CONTROLLER</Text> */}
      <View style={[styles.contentView,{marginTop:10}]}>
        <Slider
          value={value1}
          onValueChange={setValue1}
          maximumValue={6}
          minimumValue={0}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="#000000"
          allowTouchTrack

          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: 'gray' }} />
      </View>
      <Text style={[styles.text]} >HOW MANY:0{value1}</Text>
      <View style={[styles.contentView]}>
        <Slider
          value={value2}
          onValueChange={setValue2}
          maximumValue={9}
          minimumValue={0}
          step={1}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: 'gray' }} />
       
      </View>
      <Text style={[styles.text]}>SLAVE ADDRESS:0{value2}</Text>
      <View style={[styles.contentView]}>
        <Slider
          value={value3}
          onValueChange={setValue3}
          maximumValue={8}
          minimumValue={0}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="#000000"
          allowTouchTrack
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: 'gray' }} />
        
      </View>
      <Text style={[styles.text]}>RGB SELECT:0{value3}</Text>
      <View style={{marginTop:5}}>
      <Divider/>
      </View>
      
      <RadioButton data={data} onSelect={(value) => setOption(value)} />
     


      <View style={[styles.contentView]}>
        <Slider

          value={value4}
          onValueChange={setValue4}
          maximumValue={80}
          minimumValue={10}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="#00C400"
          maximumTrackTintColor="#000000"
          allowTouchTrack

          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#00C400' }} />


     

      </View>
      <Text style={[styles.text]} >BRIGHTNESS:{value4}</Text>
      
      <View style={[styles.contentView]}>


        <Slider
          value={value5}
          onValueChange={
            (value5) => setValue5(value5)
          }
          maximumValue={80}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#00C400"
          maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#00C400' }} />
       
      </View>
      <Text style={[styles.text]}>TIMER:{value5}
        </Text>
        <View style={{marginTop:5}}>
        <Divider/>
        </View>
       
      <RadioButton1 data={data} onSelect={(value) => setOption1(value)} />
      <View style={[styles.contentView]}>
        <Slider

          value={value6}
          onValueChange={setValue6}
          maximumValue={80}
          minimumValue={10}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="#C40000"
          maximumTrackTintColor="#000000"
          allowTouchTrack

          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#C40000' }} />


        

      </View>
      <Text style={[styles.text]} >BRIGHTNESS:{value6}</Text>
      <View style={[styles.contentView]}>


        <Slider
          value={value7}
          onValueChange={
            (value7) => setValue7(value7)
          }
          maximumValue={80}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#C40000"
          maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#C40000' }} />
       
      </View>
      <Text style={[styles.text]}>TIMER:{value7}
        </Text>
        <View style={{marginTop:5}}>
        <Divider/>
        </View>
      <RadioButton2 data={data} onSelect={(value) => setOption2(value)} />
      <View style={[styles.contentView]}>
        <Slider

          value={value8}
          onValueChange={setValue8}
          maximumValue={80}
          minimumValue={10}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="#0000C4"
          maximumTrackTintColor="#000000"
          allowTouchTrack

          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#0000C4' }} />
      </View>
      <Text style={[styles.text]} >BRIGHTNESS:{value8}</Text>
      <View style={[styles.contentView]}>


        <Slider
          value={value9}
          onValueChange={
            (value9) => setValue9(value9)
          }
          maximumValue={80}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#0000C4"
          maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 3 }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: '#0000C4' }} />
        
      </View>
      <Text style={[styles.text,{marginBottom:10}]}>TIMER:{value9}
        </Text>
        
      <View style={{backgroundColor:"#20b2aa",height:"7%"}}>
  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginHorizontal:5}}>
  <TouchableOpacity onPress={() =>
          // Pass and merge params back to home screen
          navigation.navigate("Details Screen")}>
          <Text> <Ionicons name="caret-back-sharp" size={25} style={{color:"white"}}></Ionicons></Text >

        </TouchableOpacity>
        <Popup />
        <TouchableOpacity onPress={() =>
          navigation.navigate("Addressable")}>
            <Text><Ionicons name="caret-forward-sharp" size={25} style={{color:"white"}}></Ionicons></Text>
        </TouchableOpacity>
  </View>
        
      </View>
      
    </View>
  )
}


function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center",marginTop:40 }}>
      {data.map((item) => {
        return (

          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>{item.value}</Text>
            </View>
          </Pressable>

        )
      })}

    </View>
  );
}
function RadioButton1({ data, onSelect }) {
  const [userOption1, setUserOption1] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption1(value);
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center",marginTop:40 }}>
      {data.map((item) => {
        return (

          <Pressable
            style={
              item.value === userOption1 ? styles.selected1 : styles.unselected1
            }
            onPress={() => selectHandler(item.value)}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>{item.value}</Text>
            </View>
          </Pressable>

        )
      })}

    </View>
  );
}
function RadioButton2({ data, onSelect }) {
  const [userOption2, setUserOption2] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption2(value);
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center",marginTop:40}}>
      {data.map((item) => {
        return (

          <Pressable
            style={
              item.value === userOption2 ? styles.selected2 : styles.unselected2
            }
            onPress={() => selectHandler(item.value)}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>{item.value}</Text>
            </View>
          </Pressable>

        )
      })}

    </View>
  );
}
export default NonAddressable;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE0",
    justifyContent:"flex-end"


  },
  contentView: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    margin:-4
    
    

    
  },
  unselected: {
    backgroundColor: 'black',
    margin: 2,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  selected: {
    backgroundColor: '#00C400',
    margin: 2,
    padding: 10,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  unselected1: {
    backgroundColor: 'black',
    margin: 2,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  selected1: {
    backgroundColor: '#C40000',
    margin: 2,
    padding: 10,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  unselected2: {
    backgroundColor: 'black',
    margin: 2,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  selected2: {
    backgroundColor: '#00C',
    margin: 2,
    padding: 10,
    height: 20,
    width: 60,
    borderRadius: 5

  },
  text: {
    textAlign: "center",
    fontSize: 10,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    color: "#708090",
    fontWeight: "bold",
    marginTop:-10



  }
})

