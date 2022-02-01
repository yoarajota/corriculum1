// import { useNavigate } from "react-router-dom";
import { Box, Button } from '@chakra-ui/react'
import BotImg from './BotImg';
import { useState } from 'react';
import H1 from './H1';
import Map from './map';
import Pag0 from './pag0';
import Pag1 from './pag1';
import Pag2 from './pag2';
import Pag3 from './pag3';
import Pag4 from './pag4';
import DrawerInfo from './drawer';

const Home = () => {

    // const navigate = useNavigate();
    // function goBack() {
    //     navigate("/");
    // }

    const [tela, mudaTela] = useState(<Pag0 />)

    const [counter, setCounter] = useState(0);

    function handleClick() {
        counter == 0 && mudaTela(<Pag1 />)
        counter == 1 && mudaTela(<Pag2 />)
        counter == 2 && mudaTela(<Pag3 />)
        counter == 3 && mudaTela(<Pag4 />)
        setCounter((counter + 1) % 4)
    }



    return (
        <Box h='100vh'>
            <Box h='20%' bg='linear-gradient(black, transparent)' display='flex' justifyContent='center' alignItems='center'>
                <Button w='5%' onClick={mudaTela}></Button>
                <BotImg handleChange={handleClick} position='absolute' />
                <DrawerInfo />
            </Box>
            {tela}
        </Box>

    )
}

//#0C0B18 #230E1F

export default Home;