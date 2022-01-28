// import { useNavigate } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import BotImg from './BotImg';
import { useState } from 'react';
import H1 from './H1';
import Map from './map';
import Pag0 from './pag0';
import Pag1 from './pag1';
import Pag2 from './pag2';

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
        counter == 2 && mudaTela(<Pag1 />)
        setCounter((counter + 1) % 3)
    }

    return (
        <Box h='100vh'>
            <Box h='20vh' bg='linear-gradient(#230e1f, transparent)' display='flex' justifyContent='center' alignItems='center'>
                <Box w='40%' h='1px' bg='#E1E3EF'></Box>
                <BotImg handleChange={handleClick} position='absolute'/>
                <Box w='40%' h='1px' bg='#E1E3EF'></Box>
            </Box>
            <Box >
                {tela}
            </Box>

        </Box>

    )
}

//#0C0B18 #230E1F

export default Home;