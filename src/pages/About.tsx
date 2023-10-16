import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

//@TODO make this responsive in a way where the full desktop view has a grid spacing of 3 on each side (which goes to 0 on smaller screens)
//@TODO Add a picture on the right-hand side.

const About = () => {
    return (
        <Container maxWidth={false} disableGutters  sx={{marginTop: '120px', marginLeft: 0, marginRight: 0}}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography variant='h4' sx={{margin: '0.5em', float: 'left', borderBottom: 1, borderColor: 'white'}}>About Me</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography sx={{margin: '1em', float: 'left'}}>I'm a full stack web developer with a background in design. I was born in Holland, grew up in France and moved to the United States for college. I currently live in the bay area with my partner and our two cats</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='h4' sx={{margin: '0.5em', float: 'left', borderBottom: 1, borderColor: 'white'}}>Work Experience</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography sx={{margin: '1em', float: 'left'}}>In 2021, I was hired by Soliant Consulting, where we developed custom software solutions for small and medium businesses. My responsibilities included </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;