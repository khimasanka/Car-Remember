import {
    NativeBaseProvider, Text, Button, Center, Box, Heading, VStack, FormControl, Input
    , Link, HStack, Image
} from 'native-base';
import { React, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';


export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const val = useContext(AuthContext);

    const login = () => {
        fetch('http://127.0.0.1:4000/user/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            Alert.alert("Save Success !")
          })
          .catch((err) => { Alert.alert("Error occured..!") });
    }

    return (
        <NativeBaseProvider>
            <Center w="100%">
                <Image alt='Avatar'
                    style={{ height: 200, width: 200, marginTop: 20 }}
                    source={require('../assets/avatar.png')} />
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" fontFamily={'FredokaOne-Regular'} fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading style={{ fontFamily: 'FredokaOne-Regular' }} mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="5">

                        <FormControl>
                            <FormControl.Label _text={{
                                fontFamily: 'FredokaOne-Regular'
                            }}>Email ID</FormControl.Label>
                            <Input value={email} onChangeText={text => setEmail(text)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{
                                fontFamily: 'FredokaOne-Regular'
                            }}>Password</FormControl.Label>
                            <Input type="password" value={password} onChangeText={text => setPassword(text)} />
                            <Link _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "indigo.500",
                                fontFamily: 'FredokaOne-Regular'
                            }} alignSelf="flex-end" mt="1">
                                Forget Password?
                            </Link>
                        </FormControl>
                        <Button onPress={login} mt="2" _text={{
                            fontFamily: 'FredokaOne-Regular',
                            fontSize: 15
                        }} colorScheme="indigo"  >
                            Sign in
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontFamily={'FredokaOne-Regular'} fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{" "}
                            </Text>
                            <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                                fontFamily: 'FredokaOne-Regular'
                            }}
                                onPress={() => {
                                    navigation.navigate("Register")
                                }} >
                                Sign Up
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    )
}
