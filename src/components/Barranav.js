import {
  Grid, GridItem, Link, Button
} from '@chakra-ui/react'
import React from 'react';


const Barranav = ({handleChange, tela}) => {
  return (
    <Grid templateColumns='5fr' h='6vh' display='flex' gap='20' justifyContent='center' alignItems='center' position='absoltue'>
      <Button onClick={handleChange}>  aa
      </Button>
      {tela}
    </Grid>
  )
}

export default Barranav;