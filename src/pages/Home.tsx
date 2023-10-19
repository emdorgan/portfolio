import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth={false} disableGutters sx={{ marginTop: '120px' }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>I'm Emily Dorgan, a Full Stack Developer with experience building custom web applications for small and medium</Typography>
                </Grid>
                <Grid xs={12}>
                    <Button variant='contained' onClick={()=> navigate('/projects')}>See my Work</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;