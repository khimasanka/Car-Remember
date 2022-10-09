import React, { useContext, useState } from 'react'
import {
  NativeBaseProvider, Image, Text, Button, Center, Box, Heading, VStack, FormControl, Input
} from 'native-base';
import { AuthContext } from '../context/AuthContext';

export default function SignUpPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const val = useContext(AuthContext);
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Image alt='Avatar'
          style={{ height: 150, width: 150, marginTop: 70 }}
          source={require('../assets/register.png')} />
        <Box safeArea p="2" w="90%" maxW="290" py="8" marginBottom={200}>
          <Heading fontFamily={'FredokaOne-Regular'} size="lg" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading fontFamily={'FredokaOne-Regular'} mt="1" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              {/* <Text>{val}</Text> */}
              <FormControl.Label _text={{
                fontFamily: 'FredokaOne-Regular'
              }}>Email</FormControl.Label>
              <Input placeholder='xxx@email.com' value={email} onChangeText={text => setEmail(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                fontFamily: 'FredokaOne-Regular'
              }}>Password</FormControl.Label>
              <Input type="password" value={password} onChangeText={text => setPassword(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{
                fontFamily: 'FredokaOne-Regular'
              }}>Confirm Password</FormControl.Label>
              <Input type="password" value={confirm} onChangeText={text => setConfirm(text)} />
            </FormControl>
            <Button _text={{
              fontFamily: 'FredokaOne-Regular',
              fontSize: '15px'
            }} mt="2" colorScheme="indigo"
              onPress={() => {
                navigation.navigate("Cars")
              }}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}
