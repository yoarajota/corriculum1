// import { useNavigate } from "react-router-dom";
import { Grid, GridItem, Image } from '@chakra-ui/react'
import Barranav from './Barranav';
import papel from '../img/papel.png'
import { useState } from 'react';
import H1 from './H1';
import Map from './map';

const Home = () => {

    // const navigate = useNavigate();
    // function goBack() {
    //     navigate("/");
    // }

    const [tela, mudaTela] = useState()

    const [counter, setCounter] = useState(0);

    function handleClick() {
        counter == 0 &&             mudaTela(<H1/>)
        counter == 1 &&             mudaTela(<Map/>)
        counter == 2 &&             mudaTela(<H1/>)
        setCounter((counter + 1) % 3)
    }

    return (
        <Grid templateColumns='repeat(3, 1fr)' h='100vh' bg='#071330'>
            <GridItem colSpan='3' w='100%' >
                    <Barranav handleChange={handleClick}/>
            </GridItem>
            <GridItem colSpan='3' >
                {tela}
            </GridItem>
        </Grid>

    )
}

export default Home;