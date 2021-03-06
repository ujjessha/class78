import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Platform,StatusBar,ImageBackground, TouchableOpacity,Image }from 'react-native';
export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.andriodSafeArea}/>
        <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImage}>
        <View style={styles.titleBar}>
      <Text style={styles.header}> iss tracker app</Text>
      </View>
      <TouchableOpacity style={styles.routeCard} onPress={()=>{
        this.props.navigation.navigate("issScreen")
      }}>
        <Text style={styles.routeText}>iss location</Text>
        <Text style={styles.knowMore}>{"know more"}</Text>
        <Text style={styles.bgDigit}>1</Text>
        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.routeCard}  onPress={()=>{
        this.props.navigation.navigate("meteor")}}>
        <Text style={styles.routeText}>meteors</Text>
        <Text style={styles.knowMore}>{"know more"}</Text>
        <Text style={styles.bgDigit}>2</Text>
        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}
const styles= StyleSheet.create({
container:{flex:1},
header:{fontSize:40, fontWeight:"bold", color:"white"},
andriodSafeArea:{marginTop:Platform.OS==="android"? StatusBar.currentHeight:0},
titleBar:{flex:0.15,justifyContent:"center", alignItems:"center"},
backgroundImage:{flex:1,resizeMode:"cover"},
routeText: {
  fontSize: 35,
  fontWeight: "bold",
  color: "black",
  marginTop: 75,
  paddingLeft: 30
},
knowMore: {
  paddingLeft: 30,
  color: "red",
  fontSize: 15
},
bgDigit: {
  position: "absolute",
  color: "rgba(183, 183, 183, 0.5)",
  fontSize: 150,
  right: 20,
  bottom: -15,
  zIndex: -1
},
iconImage: {
  position: "absolute",
  height: 200,
  width: 200,
  resizeMode: "contain",
  right: 20,
  top: -80
},
routeCard: {
  flex: 0.25,
  marginLeft: 50,
  marginRight: 50,
  marginTop: 50,
  borderRadius: 30,
  backgroundColor: 'white'
}
})