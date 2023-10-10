import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const Projects = () => {
    return (
        <Container maxWidth={false} disableGutters  sx={{ marginTop: '120px', marginLeft: 0, marginRight: 0 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography variant="h3" sx={{margin: '0.5em', float: "left"}}>Current Project</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography sx={{margin: '1em', float: "left"}}>Dynamic Esports Event Calendar</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h3" sx={{margin: '0.5em', float: "left"}}>Past Projects</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography sx={{margin: '1em', float: "left"}}>Dynamic Esports Event Calendar</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography sx={{margin: '1em', float: "left"}}>Dynamic Esports Event Calendar</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Projects;