import React, { useState } from 'react'
import { useEffect } from 'react';
import { NativeBaseProvider, Text, Input, VStack, Center, Heading, Link, HStack, Button, FormControl, View, Box } from 'native-base'
import { Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,

  },
}

export default function AddData({ navigation }) {

  const [posts, setPosts] = useState([]);
  const [vehiclename, setvehiclename] = useState('');
  const [price, setprice] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedUri, setSelectedUri] = useState();

  var id = "C001"
  var t = 0;

  useEffect(() => {

    if (selectedImage == null) {
      const exampleImage = require('../assets/upload.png')
      setSelectedImage(exampleImage)
    }
    getCars()
  })

  const getCars = () => {
    fetch('http://192.168.8.182:4000/vehicle/')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }

  const setId = () => {

    getCars()

    if (posts.length != 0) {
      var id2 = posts[posts.length - 1].code;

      let temp = parseInt(id2.slice(1))

      if (temp < 1) {
        id = 'C001'
      } else if (temp < 9) {
        id = 'C00' + (temp + 1)
      } else if (temp < 99) {
        id = 'C0' + (temp + 1)
      } else if (temp < 999) {
        id = 'C' + (temp + 1)
      } else {
        id = 'C001'
      }
    }
  }

  const openGallery = async () => {

    const images = await launchImageLibrary(options);

    setSelectedImage(images.assets[0])
    setSelectedUri(images.assets[0].uri)

    const formdata = new FormData()
    formdata.append('file', {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName
    })

    let res = await fetch('http://192.168.8.182:4000/vehicle/image', {
      method: 'post',
      body: formdata,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    let responsejson = await res.json();
  }

  const saveData = () => {
    setId();

    fetch('http://192.168.8.182:4000/vehicle/', {
      method: 'POST',
      body: JSON.stringify({
        code: id,
        vehiclename: vehiclename,
        vehicleimg: selectedUri,
        price: price,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => { Alert.alert("Save Saved Successfully !"); clearFields() })
      .catch((err) => { Alert.alert("Error occured !") })
  }

  const clearFields = () => {
    setvehiclename(""),
      setprice(""),

      setSelectedImage(require('../assets/upload.png'))

  }

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: "#dedede", height: "100%" }}>
        <VStack space={4} alignItems="center" mt="15%">


          {/* <Box alignItems={'center'} style={{ width: '90%', height: '30%', borderWidth: 1, borderRadius: 2 }}>
            <FormControl>
              <FormControl.Label style={{ marginLeft: 10, color: 'black', fontWeight: 'bold', fontSize: '12' }}>Vehicle Name</FormControl.Label>
              <Input style={{ backgroundColor: "white" }} mx="3" value={vehiclename} onChangeText={(e) => { setvehiclename(e) }} variant="filled" placeholder="Add Vehicle Name.." w="80%" />
            </FormControl>
            <FormControl>
              <FormControl.Label style={{ marginLeft: 10 }}>Price</FormControl.Label>
              <Input style={{ backgroundColor: "white", }} mx="3" value={price} onChangeText={(e) => { setprice(e) }} variant="filled" placeholder="Price.." w="80%" />
            </FormControl>
          </Box> */}

          {/* ============ */}

          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
              }}>
                Save car
              </Heading>
              <Heading mt="1" _dark={{
                color: "warmGray.200"
              }} color="coolGray.600" fontWeight="medium" size="xs">
                Upload Photo!
              </Heading>

              <HStack alignItems={'center'}>
                <Button style={{ height: 35, width: 80 }} onPress={openGallery} size="sm" mr={10} variant={"solid"} px="5">
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Upload</Text>
                </Button>
                <Image style={{ width: 150, height: 150, borderRadius: 25 }} source={selectedImage} />
              </HStack>

              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Car Name</FormControl.Label>
                  <Input style={{borderColor:"#139DAE",borderRadius:1,borderWidth:1}}  value={vehiclename} placeholder="Vehicle" variant="filled" onChangeText={(e) => { setvehiclename(e) }} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Price</FormControl.Label>
                  <Input style={{borderColor:"#139DAE",borderRadius:1,borderWidth:1}} value={price} placeholder="Price" variant="filled" onChangeText={(e) => { setprice(e) }} />

                </FormControl>
                <Button mt="6" borderRadius={25} bgColor={"#139DAE"} colorScheme="#139DAE" onPress={saveData}>
                  SAVE CAR
                </Button>
              </VStack>
            </Box>
          </Center>

          {/* ========================= */}

          {/* <Button size="md" w="80%" variant="subtle" colorScheme="secondary" onPress={saveData}>
            save Car
          </Button> */}
        </VStack>
      </View>
    </NativeBaseProvider>
  )
}