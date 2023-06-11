import react from "react"
import {
    View,
    Text,

    SafeAreaView,
    ImageBackground,
    StatusBar,
} from "react-native"

import  Icon  from "react-native-vector-icons/MaterialIcons"


export default function DetailsScreen({navigation,route}){
    const place = route.params
    return(
    <SafeAreaView style = {{flex:1 ,backgroundColor:'fff'}}>
        <StatusBar translucent /> 
        <ImageBackground style = {{height:330}} source = {place.image}>
        


          
            <View style = {{flexDirection:'row', justifyContent:'space-between' ,padding:20 }}>
            <Icon name = "arrow-back-ios" size = {28} style = {{color:'#fff'}} onPress={navigation.goBack} />
            <Icon name = "more-vert" size = {28}  style = {{color:'#fff'}}/>
            </View>

              <View style = {{position:'absolute', bottom:30, flexDirection:'row', padding:20 , alignItems:'center' ,
               justifyContent:'space-between'}}>
            <Text style = {{color:'#fff' , fontWeight:'bold', fontSize:20, }}>{place.name}</Text>
        
        
        <View style={{flexDirection:'row' , marginLeft:100 ,}}>
           <Icon name="place" size={25}  style = {{ color:'#fff'}}/>
            <Text style = {{color:'#fff', fontWeight:'bold' , fontSize:20}}> {place.location} </Text> 
            </View>
              
              </View>
          
            

               
           
             

        </ImageBackground>
        


       
        <View style={{backgroundColor:'#fff', borderTopRightRadius:30 , borderTopLeftRadius:30 , 
            padding:30 }}>
            <View style={{backgroundColor:'#fff', position:'absolute' , right:20 , top:-20 , padding:3 ,
             borderRadius:30 , elevation:10 }}>
                <Icon name = "favorite" size={28}  style={{color:'#ff0000'}}/>
            </View>
         
                <Text style={{color:'#ffd700' , fontWeight:'bold' , fontSize:20 , marginBottom:15}}> About The Trip</Text>
                <Text style={{ fontWeight:'bold',lineHeight:25}}>{place.details}</Text>
       


        
        </View>

         <View style ={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'#fff',padding:20 ,}}>
         
            <Text style={{color:'#000', fontWeight:'bold',}}>$100 Per Day</Text>
            <Text style={{backgroundColor:'#000', color:'#fff' ,fontWeight:'bold',fontSize:20,
             padding:13,textAlign:'center' , borderRadius:25 , width:150}}>Book Now</Text>
        </View> 
       
      
            

    </SafeAreaView>
    )
}