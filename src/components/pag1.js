import {
    Wrap, WrapItem, Box, Center,
} from '@chakra-ui/react'
import Boxhtml from './ling/boxhtml';
import Boxcss from './ling/boxcss';
import Boxjs from './ling/boxjs';
import Boxdart from './ling/boxdart';
import Boxreact from './ling/boxreact';

const Pag1 = () => {

    return (
        <Center>
            <Wrap justify='center' m='4vw 0 0 0' w='80vw' spacing='50px'>
                <WrapItem>
                    <Box minWidth='310px' minHeight='270px' align='center' border='3px solid #E1E3EF' borderRadius='35px'>
                        <Boxhtml />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='310px' minHeight='270px' align='center' border='3px solid #E1E3EF' borderRadius='35px'>
                        <Boxcss />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='310px' minHeight='270px' align='center' border='3px solid #E1E3EF' borderRadius='35px'>
                        <Boxjs />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='310px' minHeight='270px' align='center' border='3px solid #E1E3EF' borderRadius='35px'>
                        <Boxdart />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='310px' minHeight='270px' align='center' border='3px solid #E1E3EF' borderRadius='35px'>
                        <Boxreact />
                    </Box>
                </WrapItem>

            </Wrap>
        </Center>
    )
}

export default Pag1;