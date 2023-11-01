import { Button, Container, Theme, Typography, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    const largeScreenStyling = {
        m: '10% 0 1% 0', 
        fontSize: '2em', 
        fontFamily:'Ariel'
    };

    const smallScreenStyling = {
        m: '5%', 
        fontSize: '1.5em', 
        fontFamily:'Ariel'
    }
    

    return (
        <Container maxWidth={false} disableGutters sx={{ marginTop: '120px' }}>
            <Grid container spacing={0}>
                <Grid xs={12}>
                    <Typography sx={isLargeScreen ? largeScreenStyling : smallScreenStyling}>I'm a Full Stack Developer with experience building custom web applications.</Typography>
                </Grid>
                <Grid xs={12}>
                    <Button size="large" variant='contained' onClick={()=> navigate('/projects')}>See my Work</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
