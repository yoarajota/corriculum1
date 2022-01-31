import {
  Center, Box, Image, Divider
} from '@chakra-ui/react'
import React from 'react';
import ImgYJ from '../img/ImgYJ.png';

const BotImg = ({ handleChange, tela }) => {

  return (
    <>
        <Image w='30%' minWidth='160px' maxWidth='420px' src={ImgYJ} alt='ImgYJ' m='25px' onClick={handleChange} />
    </>
  )
}

export default BotImg;