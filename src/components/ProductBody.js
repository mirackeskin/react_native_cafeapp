import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image,Alert} from 'react-native'
import React,{ useState,useEffect } from 'react'
import {useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get("screen");


const CountButton=(props)=>{ 

  const pressCountButton=()=>{
    if(props.type=="minus"){
      let count=props.count-1;
      props.callback(count);
    }else{
      let count=props.count+1;
      props.callback(count);
    }
  }
  return (
    <TouchableOpacity onPress={pressCountButton} activeOpacity={0.8} style={props.type==="minus"?styles.CountButtonLeft:styles.CountButtonRight}>
      <Text style={{color:"white",fontSize:width/13}}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const ProductPriceCard=(props)=>{
  const [count,setCount]=useState(0);
  const [price,setPrice]=useState(0);

  const callbackFunction=(value)=>{
    setCount(value);//callback function ile parent'a props gönderdik.
    setPrice(value*props.price);
  }

  return (
    <View style={styles.ProductPriceCardWrapper}>
      <View style={styles.ProductPriceCardLeft}>
        <Text style={{fontSize:width/20,color:"#875B4C"}}>{props.title}</Text>
        <Text style={{fontSize:width/14,fontWeight:"bold",color:"#D09777"}}>{price}£</Text>
      </View>
      <View style={styles.ProductPriceCardRight}>
        <CountButton count={count} callback={callbackFunction} text="-" type="minus"></CountButton>
        <Text style={{padding:15,fontSize:width/18}}>{count}</Text>
        <CountButton count={count} callback={callbackFunction} text="+" type="plus"></CountButton>
      </View>
    </View>
  )
}

const ProductSizeCard=()=>{
  return (
    <View style={styles.ProductSizeCardWrapper}>
      <View style={styles.sizeCardTop}>
        <Text style={{fontSize:width/19,color:"#875B4C"}}>Size</Text>
      </View>
      <View style={styles.sizeCardBottom}>
        
        <View style={styles.leftBox}>
          <ProductSize size="small"></ProductSize>
          <ProductSize size="medium"></ProductSize>
          <ProductSize size="large"></ProductSize>
        </View>

        <View style={{width:"40%",height:"100%"}}></View>

      </View>
    </View>
  )
}

const ProductSize=(props)=>{
  const [active,setActive]=useState(false);
  const {size}=props;
  
  const pressSize=()=>{
    setActive(!active);
  }  
  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={pressSize} style={{width:width*15/100,height:width/5,alignItems:"center",opacity:active?1:0.5}}>
      <Image style={{width:"100%",height:"75%"}} resizeMode='stretch' source={require("../../assets/images/fincan.png")}></Image>
      <Text style={{fontSize:12}}>{size}</Text>
    </TouchableOpacity >
  )
}

const addToCard=()=>{ 
    Alert.alert("Confirmation","Do you confirm your order?",[{text:"Yes!",onPress:()=>console.log("asa")},{text:"No!"}])
      
}

const AddToCart=()=>{
  
  return (
    <View style={styles.AddToCartWrapper}>
      <View style={{width:"50%"}}>
        <TouchableOpacity onPress={addToCard} activeOpacity={0.8} style={{backgroundColor:"#B88068",padding:width/39,alignItems:"center",borderRadius:10}}>
          <Text style={{fontSize:width/19}}>Add to Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ProductBody = (props) => {
  return (
    <View style={styles.ProductBody}>
      <ProductPriceCard title={props.productTitle} price={props.price}></ProductPriceCard>
      <ProductSizeCard></ProductSizeCard>
      
      <AddToCart></AddToCart>
    </View>
  )
}

export default ProductBody

const styles = StyleSheet.create({
    ProductBody:{
        width:"100%",
        height:"60%",
        backgroundColor:"#F7EFE9"
    },
    ProductPriceCardWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingLeft:width/39,
      paddingRight:width/39,
      flexGrow:1 
    },
    ProductPriceCardLeft:{
      backgroundColor:"#F7EFE9",
    },
    ProductPriceCardRight:{
      backgroundColor:"#F7EFE9",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
    },
    CountButtonLeft:{
      width:width/10,
      height:width/10,
      backgroundColor:"#875B4C",
      borderTopLeftRadius:width/39,
      borderBottomLeftRadius:10,
      justifyContent:"center",
      alignItems:'center',
    },
    CountButtonRight:{
      width:width/10,
      height:width/10,
      backgroundColor:"#875B4C",
      borderTopRightRadius:width/39,
      borderBottomRightRadius:10,
      justifyContent:"center",
      alignItems:'center',
    },
    ProductSizeCardWrapper:{
      width:"100%",
      height:"25%",
      backgroundColor:"#F7EFE9",
      flexGrow:1   
    },
    AddToCartWrapper:{
      width:"100%",
      height:"50%",
      backgroundColor:"#F7EFE9",
      flexGrow:1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"

    },
    sizeCardTop:{
      backgroundColor:"#F7EFE9",
      width:"100%",
      height:"25%",
      paddingLeft:width/39
    },
    sizeCardBottom:{
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      height:"75%",
      flexGrow:1,paddingLeft:width/39
    },
    leftBox:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      height:"75%",
      width:"60%",
      flexGrow:1,
    }
})