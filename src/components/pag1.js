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
                    <Box minWidth='210px' minHeight='210px' align='center'>
                        <Boxhtml />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='210px' minHeight='210px' align='center'>
                        <Boxcss />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box minWidth='210px' minHeight='210px' align='center' >
                        <Boxjs />
                    </Box>
                </WrapItem>
                <WrapItem>
                <Box minWidth='210px' minHeight='210px' align='center'>
                        <Boxreact />
                    </Box>
                </WrapItem>
                <WrapItem>
                <Box minWidth='210px' minHeight='210px' align='center'>
                        <Boxdart />
                    </Box>
                </WrapItem>

            </Wrap>
        </Center>
    )
}

export default Pag1;