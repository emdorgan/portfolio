import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const About = () => {
    return (
        <Container sx={{ marginTop: '20vh' }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>About Page</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;