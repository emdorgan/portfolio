import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const Home = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ marginTop: '120px' }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>Home Page</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;