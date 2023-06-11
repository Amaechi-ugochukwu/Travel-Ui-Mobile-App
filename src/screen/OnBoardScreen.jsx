import react from "react"
import {
     View,
    Text,
    StyleSheet,
    ImageBackground ,
    TouchableOpacity,
} from "react-native"


export default function OnBoardScreen({navigation}){
    return(
        <View style ={{flex:1}} >
               <ImageBackground
            style = {{flex:1 , }}
            source = {require('../assets/onboardImage.jpg')} >

                <View style = {styles.con1}>
                     <Text style = {{color:'#fff', fontSize:35, fontWeight:'bold' }}>Discover</Text>
                     <Text style = {{color:'#fff', fontSize:35, fontWeight:'bold'}}>World With Us</Text>
                     <Text style={{color:'#fff',lineHeight: 20, marginTop: 15}}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
                     sem non erat vehicula dignissim. Morbi eget congue ante, feugiat. </Text>


                     <TouchableOpacity activeOpacity={0.8} onPress = { () => navigation.navigate('HomeScreen')}>
                     <View style = {styles.btn}>
                    
                        <Text  style={{textAlign:'center' ,fontSize:20, fontWeight:'bold',color:'#2e8b57'}}>Get Started</Text>
                     </View>
                     </TouchableOpacity>
                 
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    con1:{ 
        height:'50%',
        bottom:0,
        position:'absolute',
        paddingHorizontal: 100,
    },
    btn : {
        backgroundColor:'#fff',
        height : 50,
        width: 200,
        marginTop: 20,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
    }

})