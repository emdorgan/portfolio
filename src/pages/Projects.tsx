import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const Projects = () => {
    return (
        <Container sx={{ marginTop: '120px' }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography>Projects Page</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Projects;