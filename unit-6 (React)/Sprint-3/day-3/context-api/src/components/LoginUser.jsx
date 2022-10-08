import React from "react";
import { useDisclosure, useFocusEffect } from '@chakra-ui/react';
import { AuthContext } from "../Contexts/AuthContext";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

export default function LoginUserPop() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [email, Setemail] = React.useState("");
    
    let { islogin, Loginhandler } = React.useContext(AuthContext);
    let { Logindata, loginDatahandler } = React.useContext(LoginDataContext);

    const loginUser = () => {
        let url = "https://reqres.in/api/users";
        fetch(url)
            .then((res) => res.json())
            .then((res) =>{
                identifyUser(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                
            });
    }

  function identifyUser(data){
    let user =  data.filter((el)=> el.email == email);
    if(user.length==0) alert("Enter Correct Data !");
    else{
        loginDatahandler(user[0]);
        Loginhandler(true);
        alert("login Successfully !");
    } 
  }

  const HanleInput=(e)=>{
     Setemail(e.target.value);
   }

    return (
        <>
            <Button style={{ "background": "brown" }} onClick={onOpen}>Login</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader style={{"textAlign": "center"}}>Login Form</ModalHeader>
                    <p style={{"textAlign": "center"}}>Use Email : george.bluth@reqres.in</p>
                    <p style={{"textAlign": "center"}}>Use Email : janet.weaver@reqres.in</p>
                    <p style={{"textAlign": "center"}}>Use Email : emma.wong@reqres.in</p>
                    <p style={{"textAlign": "center"}}>Use Email : eve.holt@reqres.in</p>
                    <p style={{"textAlign": "center"}}>Use Email : charles.morris@reqres.in</p>
                    <h3 style={{"textAlign": "center"}}>Pass : Password</h3>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input value={email} onChange={HanleInput} type='email' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                       
                            <FormLabel>Password</FormLabel>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputGroup size='md'>
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={() => loginUser()} colorScheme='blue' mr={3}>
                            Login
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
