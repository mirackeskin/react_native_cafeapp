import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const {width,height}=Dimensions.get("screen");


const Button=(props)=>{
    const Navigation=useNavigation();
    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>Navigation.navigate("Categories")}>
            <Text style={{color:"#875B4C",textAlign:"center"}}>{"Back"}</Text>
        </TouchableOpacity>
    )
}


const ProductHead = (props) => {
    const {headTitle}=props;
  return (
    <View style={styles.ProductHead}>
        <View style={{width:"33.3%",height:"100%",justifyContent:"center",alignItems:"flex-start",paddingLeft:width/39}}>
            <Button></Button>
        </View>
        <View style={{width:"33.3%",height:"100%",flexGrow:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:width/20,fontWeight:"bold"}}>{headTitle}</Text>
        </View>
        <View style={{width:"33.3%",height:"100%"}}></View>
        
    </View>
  )
}

export default ProductHead

const styles = StyleSheet.create({
    ProductHead:{
        width:"100%",
        height:"10%",
        backgroundColor:"#F7EFE9",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
    },
    button:{
        backgroundColor:"#B88068",
        borderRadius:5,
        padding:Dimensions.get("screen").width/39,
    },
    
    
})