import {
  Grid, GridItem, Link, Button
} from '@chakra-ui/react'
import React from 'react';


const Barranav = ({handleChange, tela}) => {
  return (
    <Grid templateColumns='5fr' h='6vh' display='flex' gap='20' justifyContent='center' alignItems='center'>
      <Button onClick={handleChange}>  aa
      </Button>
      {tela}
      {/* <GridItem>
        <Link fontSize='1.3vw' textStyle='none' color='white'>AAA</Link>
      </GridItem>
      <GridItem >
        <Link fontSize='1.3vw' textStyle='none' color='white'>AAA</Link>
      </GridItem>
      <GridItem >
        <Link fontSize='1.3vw' textStyle='none' color='white'>AAA</Link>
      </GridItem> */}
    </Grid>
  )
}

export default Barranav;