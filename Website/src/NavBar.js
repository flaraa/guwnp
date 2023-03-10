import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Twitter from './assets/social-media-icons/twitter_32x32.png';



const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            { /* Left side - Social Media Icons */ }
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://twitter.com/ThugsXXX">
                    <Image src={Twitter} boxSize="42px" margin="0 15px"/>
                </Link>
                <Spacer/>

            </Flex>

            {/* Right side - Sections and Connect */}


            <Flex
            justify="space-between" 
            align="center"
            width="100%"
            padding="30px"
            >
                <Spacer/>
               

            </Flex>

            {/* Connect */}
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button 
                backgroundColor="#8b0000"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}
                >
                Connect
                </Button>
                // <button onClick={connectAccount}>Connect</button>
            )}
        </Flex>
    )
}

export default NavBar;
