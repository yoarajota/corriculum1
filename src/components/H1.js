import t1 from '../../src/img/t1.jpg'
import Bt from './Bt'
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

function H1 () {
  return (  
    <Box h='100vh' align='center' flexDirection='column' fontSize='calc(10px + 5vmin)' color='#D8D4E7'>
      <Image src={t1} alt="t1" padding='2vw' h='40vwmin' pointerEvents='none' borderRadius='500px'/>
      <p>yoarajota</p>
      <Bt />
    </Box>
  );
}

export default H1;
