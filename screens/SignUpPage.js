import React from 'react'
import {
  NativeBaseProvider, Image, Button, Center, Box, Heading, VStack, FormControl, Input
} from 'native-base';

export default function SignUpPage({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Image alt='Avatar'
          style={{ height: 150, width: 150, marginTop: 70 }}
          source={require('../assets/register.png')} />
        <Box safeArea p="2" w="90%" maxW="290" py="8" marginBottom={200}>
          <Heading size="lg" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder='xxx@email.com' />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo"
              onPress={() => { navigation.navigate("Login") }}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}
