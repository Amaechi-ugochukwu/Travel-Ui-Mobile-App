import react from "react"

import {
  View ,
  Text ,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native"

import Icon from "react-native-vector-icons/MaterialIcons"

import places from "../data/places"

const {width} = Dimensions.get('screen')


export default function HomeScreen({navigation}){

  const Card = ({place}) =>{
    return(
      <TouchableOpacity activeOpacity={0.8}
         onPress = { () => navigation.navigate('DetailsScreen' , place)}>
        <ImageBackground style={{overflow:'hidden',borderRadius:10, width:200,height:220,marginLeft:5, marginTop:20}} source = {place.image}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold', color:'#fff' , marginTop:5}}>{place.name}</Text>
        </View>


        <View style = {{position:'absolute',bottom:0 }}>     
        <View style = {{flexDirection:'row',  justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
               <Icon name="place" size={20}  style={{color:'#fff'}}  />
                <Text style={{color:'#fff' , fontWeight:'bold'}} >{place.location}</Text>
                </View>

                <View style={{flexDirection:'row', marginLeft:50}}>
               <Icon name="star" size={20}  style={{color:'#ffd700'}}  />
                <Text style={{color:'#fff' , fontWeight:'bold'}} >5.0</Text>
                </View>
             


                </View>
         

        </View>
        </ImageBackground>
        </TouchableOpacity>


    )
  }

  const RecomendedCard = ({place}) =>{
    return(
      <TouchableOpacity activeOpacity={0.8}
         onPress = { () => navigation.navigate('DetailsScreen' , place)}>
        <ImageBackground style={{overflow:'hidden',borderRadius:10, width: 240,height:180,padding:20 , marginLeft:5, marginTop:20}} 
        source = {place.image}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold', color:'#fff' , marginTop:5}}>{place.name}</Text>
        </View>


        <View style = {{position:'absolute',bottom:0 }}>     
        <View style = {{flexDirection:'row',  justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
               <Icon name="place" size={20}  style={{color:'#fff'}}  />
                <Text style={{color:'#fff' , fontWeight:'bold'}} >{place.location}</Text>
                </View>

                <View style={{flexDirection:'row', marginLeft:50}}>
               <Icon name="star" size={20}  style={{color:'#ffd700'}}  />
                <Text style={{color:'#fff' , fontWeight:'bold'}} >5.0</Text>
                </View>
             


                </View>
         

        </View>
        </ImageBackground>
        </TouchableOpacity>


    )
  }


    return(

      <SafeAreaView style={{flex:1 }} >
        <StatusBar translucent ={false} style = {{backgroundColor : '#2e8b57' ,paddingBottom:10}} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding:'6%' , backgroundColor : '#2f4f4f'}}>
          <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <Icon name = 'sort' size = {30} style ={{color:'#fff'}}/>
          <Icon name="notifications-none" size={30} style={{color:'#fff'}} />
          </View>
          

          <View style={{marginTop:'10%' }}>
            <Text style={{fontWeight:'bold', fontSize:50, color:'#fff'}}> Explore </Text>
            <Text style={{fontWeight:'bold', fontSize:50, color:'#fff'}}> The</Text>
            <Text style={{fontWeight:'bold', fontSize:50, color:'#fff'}}> Beautiful Place</Text>
          </View>
        </View>
 
        <View style = {{backgroundColor:'#fff', marginHorizontal:10 ,borderRadius:50, top:-25 , elevation:30}} >
          <View style={{flex:1 , flexDirection:"row" }} >
          <Icon name="search" size={30}  style ={{margin:10, color:'#2e8b57'}}/>
         <TextInput
         placeholder=" Search Here"
         style={{backgroundColor:"#fff" , color:'#2e8b57' ,fontWeight: 'bold' , margin:10, fontSize:15 }}
         
         />
         </View>

      

        </View> 

        
        <View style={{marginHorizontal:50 , marginTop:20 }}> 
        <View style ={{flexDirection:'row' , justifyContent:"space-between",}}>  

          <Icon name="flight" size={25} style={{backgroundColor:'#2f4f4f' , color:'#fff', padding:25, borderRadius:10}} />
           <Icon name="beach-access" size={25}  style={{backgroundColor:'#000' , color:'#fff', padding:25, borderRadius:10 }} />
          <Icon name="near-me" size={25}  style={{backgroundColor:'#2f4f4f' , color:'#fff', padding:25, borderRadius:10 }}/>
         <Icon name="place" size={25} style={{backgroundColor:'#000' , color:'#fff', padding:25, borderRadius:10 }} />
       
         </View>
         </View>

         <Text style={{margin:4 , marginTop:30, marginLeft:30 , fontWeight:'bold' , fontSize:20}}>Places</Text>

      <View>

        <FlatList 
        contentContainerStyle = {{paddingLeft:20}}
        horizontal
        showsHorizontalScrollIndicator ={false}
        data = {places}
        renderItem = {({item}) => <Card place={item} />}
        /> 

    <Text style={{margin:4 , marginTop:30, marginLeft:30 , fontWeight:'bold' , fontSize:20}}>Recomended Places</Text>   


        <FlatList 
      
        contentContainerStyle = {{paddingLeft:20}}
        horizontal
        showsHorizontalScrollIndicator ={false}
        data = {places}
        renderItem = {({item}) => <RecomendedCard place={item} />}

  
        />     

      </View>


        </ScrollView>
      </SafeAreaView>

      
    )
}

const styles = StyleSheet.create({
  
  });
  