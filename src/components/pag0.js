import { Heading, Box, Text, Center, Image } from '@chakra-ui/react';
import Seta from '../img/seta2.png';
import './pag0.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Pag0 = () => {
    return (
        <Center w='100%'>
            <Box w='100%' m='-40px 0 0 0' align='center'>
                <Image src={Seta} className='seta' m='-10px 0 0 0' w='40px' />
                <Heading color='color.light'> João Vítor Basso Sberse </Heading>
                <Box w='100%' m='20px 0 0 0' h='1px' bg='color.light'></Box>
            </Box>
        </Center>
    )
}

export default Pag0;