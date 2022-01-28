import {
  Center, Box, Image, Divider
} from '@chakra-ui/react'
import React from 'react';
import ImgYJ from '../img/ImgYJ.png';

const BotImg = ({ handleChange, tela }) => {
  return (
    <Center>
      <Box>
        <Image src={ImgYJ} alt='ImgYJ' m='25px' h='8vh' onClick={handleChange} />
      </Box>
    </Center>
  )
}

export default BotImg;