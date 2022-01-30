import { Heading, Box, Text, Center, Image, Divider } from '@chakra-ui/react';
import Seta from '../img/seta2.png';
import '../styles/pag0.css'
import Cat from '../img/cat.gif'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Pag0 = () => {
    return (
        <Center display='block' w='100%'>
            <Box w='100%' m='-40px 0 0 0' align='center'>
                <Image src={Seta} className='seta' m='-10px 0 20px 0' w='40px' />
                <Text color='color.light' m='-15px 0 25px 0'>Próxima Página</Text>
                <Box w='100%' m='20px 0 0 0' h='1px' opacity='0.5' bg='color.light'></Box>
                <Heading color='color.light' m='20px 0 20px 0'> João Vítor Basso Sberse </Heading>
                <Box w='100%' h='1px' opacity='0.5' bg='color.light'></Box>
                <Image m='25px 0 0 0' src={Cat} ></Image>
            </Box>
            <Box m='15% auto 0 auto' w='70%'>
                <Box>
                <Heading fontSize='23px' color='color.light'>Sobre</Heading>
                <Text color='color.light' m='6px 0 0 0'>18 anos</Text>
                <Divider m='0 0 15px 0'></Divider>
                <Text color='color.light' m='6px 0 0 0'>Bento Gonçalves - Rio Grande do Sul</Text>
                <Divider m='0 0 15px 0'></Divider>
                <Text color='color.light' m='6px 0 0 0'>Ensino Médio completo na escola Mestre Santa Bárbara</Text>
                <Divider m='0 0 15px 0'></Divider>
                <Text color='color.light' m='6px 0 0 0'>Desenvolvedor</Text>
                <Divider m='0 0 15px 0'></Divider>
                </Box>
            </Box>
        </Center>
    )
}

export default Pag0;