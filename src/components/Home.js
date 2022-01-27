// import { useNavigate } from "react-router-dom";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
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
        <Stack bg='#0F0F0F'>
            <Box bg='#1C1C1C' alignItem='center'>
                    <Barranav handleChange={handleClick}/>
            </Box>
            <Box >
                {tela}
            </Box>
        </Stack>

    )
}

export default Home;