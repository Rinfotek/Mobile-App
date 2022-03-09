import  React,{useState}from 'react';
import { View, Text,StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/Entypo'; 
import { Slider } from 'react-native-elements';
import RadioButton from './Components/RadioButton';

function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container,{
      flexDirection:"column",
      flex:1, 
      
    }]}>
     <View style={{flex:2,marginTop:30}}>
       <Text style={[styles.text ,styles.led ,styles.align]} >LED</Text>
     </View>
     <View style={{flex:3}}>
       <Text style={[styles.text ,styles.led,styles.align]} > CONTROLLER</Text>
     </View>
     <View style={{flex:6}}>
       <Text style={[styles.text,styles.logo,styles.align]}>LOGO</Text>
     </View>
     <View style={{flex:3}}>
     <TouchableOpacity  onPress={() => navigation.navigate('Details')} style={{backgroundColor:"red"}}>
        <Text style={[styles.text,styles.font]}> <FontAwesome name={"star"} size={40} color="green" />INFINILITE-1</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:3}}>
       <Text style={[styles.text,styles.font]}><FontAwesome name={"star"} size={40} color="white"/>INFINILITE-2</Text>
     </View>
     <View style={{flex:3}}>
       <Text style={[styles.text ,styles.font]}><FontAwesome name={"star"} size={40} color="white"/>INFINILITE-3</Text>
     </View>
     <View style={{flex:6}}>
       <Text style={[styles.text,styles.font]}><FontAwesome name={"star"} size={40} color="white"/>PMU</Text>
     </View>
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={[styles.container1,{
      flexDirection: "column"
    } ]} >
       <View style={{flex:.5,marginTop:30 }}>
       <Text style={{color:"white",fontSize:40,fontWeight:"bold"}}>LED</Text>
     </View>
     <View style={{flex:.5}}>
       <Text style={{color:"white",fontSize:40,fontWeight:"bold" }}>CONTROLLER</Text>
     </View>
     <View style={{flex:.5}}>
       <Text style={{color:"white",fontSize:12,fontWeight:"bold"}}>TAP TO TURN ON/OFF COLOR OTHERWISE DRAG TO CONFIG</Text>
     </View>
     <View style={{flex:1}}>
     
     <TouchableHighlight style={{height:80,width:80,borderRadius:100}}  onLongPress={() => navigation.navigate('Sliders')} activeOpacity={0.0} underlayColor="#00C400">
     
     <View style={styles.button}>
     
          <Text  style={{color:"#00C400",fontWeight:"bold",fontSize:20}}>OFF</Text>
        </View>
        </TouchableHighlight>
        </View>
        <View style={{flex:1}}>
      <TouchableHighlight style={{height:80,width:80,borderRadius:100}}  activeOpacity={0.0} underlayColor="#C40000" onLongPress={() => navigation.navigate('Sliders1')} >
     <View style={[styles.button,styles.btn2]}>
          <Text style={{color:"#C40000",fontWeight:"bold",fontSize:20}}>OFF</Text>
        </View>
      </TouchableHighlight>
      </View>
      <View style={{flex:1}}>
      <TouchableHighlight style={{height:80,width:80,borderRadius:100}} activeOpacity={0.0} underlayColor="#0000C4" onLongPress={() => navigation.navigate('Sliders2')}>
      
     <View style={[styles.button,styles.btn3]}>
          <Text style={{color:"#0000C4",fontWeight:"bold",fontSize:20}}>OFF</Text>
        </View>
      </TouchableHighlight>

     </View>
     <View style={{flex:.5}}>
     <TouchableHighlight   onPress={() => navigation.goBack()} ><Text style={{fontSize:30,fontWeight:"200",backgroundColor:"white",color:"#101010",height:40,width:100,textAlign:"center",borderRadius:10,alignItems:"center"}}>Back</Text>
     </TouchableHighlight>
     </View>   
    </View>
    
  );
}
function SliderScreen({ navigation }) {
  const [value, setValue]=useState(0);
  const[value2,setValue2]=useState(0);
  const [option, setOption]=useState(null);
  const data = [
    { value: 'ON' },
    { value: 'OFF' }, 
    { value: 'BLINK' },
    { value: 'BREATH' }
  ]
  return (
    < View style={styles.container2}>
    <Text style={{fontSize:40,fontWeight:"bold" ,textAlign:"center",flex:.3,marginTop:30}}>LED</Text>
        <Text style={{fontSize:40,fontWeight:"bold" ,textAlign:"center"}}> CONTROLLER</Text>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        
        <RadioButton data={data} onSelect={(value) => setOption(value)} />
       
      
    </View>
       
        <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={70}
          minimumValue={10}
          step={1}
          debugTouchArea={false}
          minimumTrackTintColor="#00C400"
  maximumTrackTintColor="#000000"
          allowTouchTrack
          trackStyle={{ height: 10}}
          thumbStyle={{  height: 20, width: 30,backgroundColor: '#00C400' }}/>
           <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>BRIGHTNESS {value}</Text>
      </View> 
     
      <View style={[styles.contentView]}>
      
        <Slider
          value={value2}
          onValueChange={setValue2}
          maximumValue={70}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#00C400"
  maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 10}}
          thumbStyle={{  height: 20, width: 30,backgroundColor: '#00C400' }} />
          <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>TIMER {value2}</Text>
      </View>
    
    <View style={{alignItems:"center"}}>
    <TouchableOpacity  onPress={() => navigation.goBack()} ><Text style={{fontSize:30,fontWeight:"200",backgroundColor:"#C4C4C4",color:"black",height:40,width:100,textAlign:"center",borderRadius:10,marginBottom:30}}>Back</Text>
    </TouchableOpacity>
    </View>
  
    </View>
    
  )
}
function SliderScreen1({ navigation }) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [option, setOption]=useState(null);
  const data = [
    { value: 'ON' },
    { value: 'OFF' }, 
    { value: 'BLINK' },
    { value: 'BREATH' }
  ]
 
  return (
    < View style={styles.container2}>
    
    <Text style={{fontSize:40,fontWeight:"bold" ,textAlign:"center",flex:.3,marginTop:30}}>LED</Text>
        <Text style={{fontSize:40,fontWeight:"bold" ,textAlign:"center"}}> CONTROLLER</Text>
        <View style={styles.contentView}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
       
        <RadioButton data={data} onSelect={(value) => setOption(value)} />
      
      
    </View>
    
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={70}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#C40000"
  maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 10}}
          thumbStyle={{  height: 20, width: 30,backgroundColor: '#C40000' }}/>
           <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>BRIGHTNESS {value}</Text>
      </View> 
       <View style={styles.contentView}>
      
         <Slider
           value={value2}
           onValueChange={setValue2}
           maximumValue={70}
           minimumValue={0}
           step={1}
           minimumTrackTintColor="#C40000"
  maximumTrackTintColor="#000000"
           debugTouchArea={false}
           allowTouchTrack
           
           trackStyle ={{height:10}}
           thumbStyle={{height:20,width:30,backgroundColor: '#C40000'}}/>
            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>TIMER {value2}</Text>
       </View>
       <View style={{alignItems:"center"}}>
     <TouchableOpacity  onPress={() => navigation.goBack()} ><Text style={{fontSize:30,fontWeight:"200",backgroundColor:"#C4C4C4",color:"black",marginBottom:30,height:40,width:100,textAlign:"center",borderRadius:10}}>Back</Text>
     </TouchableOpacity>
     </View>
    </View>
    
  )
}
function SliderScreen2({ navigation }) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [option, setOption]=useState(null);
  
  const data = [
    { value: 'ON' },
    { value: 'OFF' }, 
    { value: 'BLINK' },
    { value: 'BREATH' }
  ]
  return (
    < View style={styles.container2}>
    
<Text style={{fontSize:40,fontWeight:"bold" ,textAlign:"center",flex:.3,marginTop:30}}>LED</Text>
    <Text style={{fontSize:40,fontWeight:"bold",textAlign:"center"}}> CONTROLLER</Text>
    <View style={[styles.contentView]}>
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
       
        <RadioButton data={data} onSelect={(value) => setOption(value)} />
     
    </View>
      
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={70}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#0000C4"
  maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height: 10}}
          thumbStyle={{  height: 20, width: 30,backgroundColor: '#0000C4' }}/>
           <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>BRIGHTNESS {value}</Text>
      </View> 
      <View style={[styles.contentView]}>
    
        <Slider
          value={value2}
          onValueChange={setValue2}
          maximumValue={70}
          minimumValue={10}
          step={1}
          minimumTrackTintColor="#0000C4"
  maximumTrackTintColor="#000000"
          debugTouchArea={false}
          allowTouchTrack
          trackStyle={{ height:10}}
          thumbStyle={{  height: 20, width: 30,backgroundColor: '#0000C4' }}/>
           <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>TIMER {value2}</Text>
      </View>
      <View style={{alignItems:"center"}}>
     <TouchableOpacity  onPress={() => navigation.goBack()} ><Text style={{fontSize:30,fontWeight:"200",backgroundColor:"#C4C4C4",color:"black",marginBottom:30,height:40,width:100,textAlign:"center",borderRadius:10}}>Back</Text>
     </TouchableOpacity>
     </View>
    </View>
    
    
  )
}
 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' ,headerShown:false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '',headerShown:false }} />
        <Stack.Screen name="Sliders" component={SliderScreen} options={{ title: '',headerShown:false }} />
        <Stack.Screen name="Sliders1" component={SliderScreen1} options={{ title: '',headerShown:false }} />
        <Stack.Screen name="Sliders2" component={SliderScreen2}options={{ title: '',headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1000FF",
    
    
  }
  , text:{
    color:"white",
    fontSize:40,
    fontWeight:"bold",
      
  },
  logo:{
    backgroundColor:"green",
    marginHorizontal:100,
    height:80,
    paddingTop:10
    
  },
  font:{
    fontSize:30,
    letterSpacing:3,
    
    
  },
  align:{

    textAlign:"center"
  }
  //css conatiner-1
  ,container1:{
    flex:1,
    backgroundColor:"#101010",
    alignItems:"center",
    justifyContent:"center"
  },
  button:{
  borderWidth:4,
    height:80,
    width:80,
    borderColor:"#00C400",
    borderRadius:100,
    alignItems:"center",
    justifyContent:"center",
   
  },
  btn2:{
    borderColor:"#C40000"
  },
  btn3:{
    borderColor:"#0000C4"
  },
  //css container2
  container2:{
    flex:1,
    backgroundColor:"#FFFFE0",
    
  },
  contentView: {
    width: '100%',
    paddingEnd:30,
   justifyContent: 'center',
  alignItems: 'stretch',
  flex:1
    
  },

  subHeader: {
    backgroundColor : "blue",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
 
  
});
export default App;

