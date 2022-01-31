import {
    Wrap, WrapItem, Box, Center, Image, Heading
} from '@chakra-ui/react'

import Github from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Map from './map'

const Pag3 = () => {

    return (
        <Center>
            <Wrap>
                <WrapItem>
                    <Box align='center' justifyContent='center'>
                        <Heading color='color.light'> SOCIAIS </Heading>
                        <Image src={Github} alt='Github' w='35%' minWidth='120px' borderRadius='full' m='5%' />
                        <Image src={Linkedin} alt='Linkedin' w='35%' minWidth='120px' borderRadius='full' />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box>
                        <Map />
                    </Box>
                </WrapItem>
            </Wrap>

        </Center>
    )
}

export default Pag3;