// import { useNavigate } from "react-router-dom";
import { Grid, GridItem, Image } from '@chakra-ui/react'
import Barranav from './Barranav';
import papel from '../img/papel.png'

const Home = () => {

    // const navigate = useNavigate();
    // function goBack() {
    //     navigate("/");
    // }

    return (
        <Grid templateColumns='repeat(3, 1fr)' h='100vh' bg='#071330'>
            <GridItem colSpan='3' w='100%' >
                    <Barranav />
            </GridItem>
            <GridItem colSpan='3' >
            </GridItem>
        </Grid>

    )
}

export default Home;