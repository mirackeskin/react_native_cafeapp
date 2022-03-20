import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const Navigation =useNavigation();

  return (
    <View style={styles.homeWrapper}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>Navigation.navigate("Categories")}>
        <Image style={styles.backgroundImage} resizeMode="stretch" source={require("../../assets/images/homeImage.png")}></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeWrapper:{
        width:"100%",
        height:"100%",
        flex:1,
        backgroundColor:"#655339",
        borderWidth:2,
        borderColor:"#655339"
    },
    backgroundImage:{
        width:"100%",
        height:"100%",
    }

})