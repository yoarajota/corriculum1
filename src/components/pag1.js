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
            <Wrap justify='center'  m='5% 0 0 0' w='80%' spacing='5%'>
                <WrapItem minWidth='90px' w='15%'>
                    <Box align='center'>
                        <Boxhtml />
                    </Box>
                </WrapItem>
                <WrapItem  minWidth='90px' w='15%'>
                    <Box align='center'>
                        <Boxcss />
                    </Box>
                </WrapItem>
                <WrapItem  minWidth='90px' w='15%'>
                    <Box align='center' >
                        <Boxjs />
                    </Box>
                </WrapItem>
                <WrapItem  minWidth='90px' w='15%'>
                    <Box align='center'>
                        <Boxreact />
                    </Box>
                </WrapItem>
                <WrapItem  minWidth='90px' w='15%'>
                    <Box align='center'>
                        <Boxdart />
                    </Box>
                </WrapItem>
            </Wrap>
        </Center>
    )
}

export default Pag1;