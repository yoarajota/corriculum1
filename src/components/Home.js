import CompN from "./CompN";
import CompL from "./CompL";
import Map from './map'
import Soci from "./soci";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Grid, Typography, Container } from '@mui/material';


const Home = () => {

    const navigate = useNavigate();
    function goBack() {
        navigate("/");
    }

    return (
        <Container sx={{ minWidth: '1400px' }}>
            <Grid container spacing={6} sx={{ marginTop: '10px' }}>
                <Grid item xs={12} sx={{ position: 'absolute', top: '20px', left: '-5px', padding: '0px' }}>
                    <button onClick={goBack} sx={{}}>
                        <ArrowBackOutlinedIcon sx={{ color: 'white' }} />
                    </button>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12} sx={{}}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontFamily: 'Montserrat', color: 'white' }}>Curriculum</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center', marginBottom: '1.5vw' }}>
                            <Typography sx={{ fontFamily: 'Montserrat', color: 'white' }} variant="subtitle1">João Vítor Basso Sberse</Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', color: 'white' }} gutterBottom variant="subtitle2">18 anos</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontFamily: 'Montserrat', color: 'white', marginBottom: '10px' }}>Competências</Typography>
                        <CompN />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4" sx={{ fontFamily: 'Montserrat', color: 'white', marginBottom: '10px' }}>Tecnologias</Typography>
                    <CompL />
                    <Grid item xs={12} sx={{marginTop: '10px'}}>
                        <Soci/>
                    </Grid>
                </Grid>
                
                <Grid item xs={4}>
                <Typography variant="h4" sx={{ fontFamily: 'Montserrat', color: 'white', marginBottom: '10px' }}>Endereço</Typography>
                    <Grid item xs={12}>
                        <Map />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;