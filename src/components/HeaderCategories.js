import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';



function HeaderButton (props) {
  const [isClick, setisClick] = useState(false);
  const Navigation=useNavigation();
  
  const onClickIn=()=>{
    setisClick(true);
  }
  const onClickOut=()=>{
    setisClick(false);
  }

  return (
    <TouchableOpacity onPressIn={onClickIn} onPressOut={onClickOut} onPress={()=>Navigation.navigate(props.screen)} activeOpacity={0.8} style={isClick?styles.headerButtonWrapperClick:styles.headerButtonWrapper}>
      <Text style={{color:"#875B4C"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const HeaderCategories = (props) => {
  return (
    <SafeAreaView style={styles.headerCategoriesMainWrapper}>
      <HeaderButton screen="Home" title="Back"></HeaderButton>
      <HeaderButton screen="Home" title="Next"></HeaderButton>
    </SafeAreaView>
  )
}

export default HeaderCategories

const styles = StyleSheet.create({
    headerCategoriesMainWrapper:{
        backgroundColor:"#F7EFE9",
        width:"100%",
        height:"10%",zIndex:1000,

        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:5,
        paddingRight:5
    },
    headerButtonWrapper:{
        backgroundColor:"#B88068",
        padding:Dimensions.get("screen").width/39,
        borderRadius:5
    },
    headerButtonWrapperClick:{
        backgroundColor:"transparent",
        color:"saddlebrown",
        padding:Dimensions.get("screen").width/39,
        borderRadius:5
    }
})