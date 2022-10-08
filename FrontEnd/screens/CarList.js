import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Button,View,FlatList,Image } from 'native-base'

export default function CarList() {
  return (
    <NativeBaseProvider >
            <Button style={{marginTop:"10%"}} size="md" variant="subtle" colorScheme="green" onPress={()=>{navigation.navigate("Car Selling - AddData")}}>
                Add New Vehicle
            </Button>
        <View style={{padding:20 , backgroundColor:"#dedede"}}>
            
            
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:0, marginBottom:'15%', padding:2,backgroundColor:"white",height:500,borderRadius:25,}} onPress={()=>{navigation.navigate("UpdateDeleteVehicle",{obj:item})}}>
                        
                        <Image style={{width:"100%",height:"85%",borderRadius:25}} source={{uri: item.uri}} />

                        <Text style={{marginBottom:10,color:"black",fontSize:25,}} >   * Vehicle Name :- {item.vehiclename}</Text>
                        <Text style={{marginBottom:10,color:"red", fontSize:15}} >      *   Price :- {item.price}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
        </NativeBaseProvider>
  )
}