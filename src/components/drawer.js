import { Drawer, Button, DrawerOverlay, DrawerFooter, Text, DrawerContent, useDisclosure, Input, DrawerBody, Link, DrawerHeader, DrawerCloseButton, Wrap, WrapItem, Box, Heading, Image, } from "@chakra-ui/react"
import React from "react";
import Github from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Map from './map'

const DrawerInfo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button w='5%' h='10%' ref={btnRef} colorScheme='' onClick={onOpen}>
                <Text fontSize='clamp(0.6em, 2vw, 2em)'>INFO</Text>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent borderLeft='1px solid black'>
                    <DrawerHeader align='center' bg='linear-gradient(to left, #0c0b18, #120c1b, #180d1d, #1d0e1f, #230e1f)'>
                        <DrawerCloseButton color='color.light' />
                        <Text color='color.light'>
                            Informações
                        </Text>
                    </DrawerHeader>

                    <DrawerBody w='100%' bg='linear-gradient(to left, #0c0b18, #120c1b, #180d1d, #1d0e1f, #230e1f)' >
                        <Box spacing='45px' align='center'>
                            <Box  w='15%' m='5% 0 0 0' >
                                <Link href="https://github.com/yoarajota" target='blank'><Image src={Github} alt='Github' borderRadius='full'/></Link>
                            </Box>
                            <Box  w='15%' m='10% 0px 45% 0'>
                                <Link href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-sberse-1b5a4021b/" target='blank'><Image src={Linkedin} alt='Linkedin' borderRadius='full' /></Link>
                            </Box>
                            <Map />
                        </Box>
                    </DrawerBody>

                    <DrawerFooter bg='linear-gradient(to left, #0c0b18, #120c1b, #180d1d, #1d0e1f, #230e1f)'>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerInfo;