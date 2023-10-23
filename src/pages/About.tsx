import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

//@TODO make this responsive in a way where the full desktop view has a grid spacing of 3 on each side (which goes to 0 on smaller screens)
//@TODO Add a picture on the right-hand side.

const About = () => {
    return (
        <Container maxWidth={false} disableGutters  sx={{marginTop: '120px', marginLeft: 0, marginRight: 0}}>
            <Grid container spacing={2}>
                <Grid xs={1}></Grid>
                <Grid xs={5}>
                    <Typography align='left' variant='h4' sx={{margin: '0.5em'}}>About Me</Typography>
                    <Typography align='left' sx={{margin: '1em', textIndent: '3em'}}>
                        I was born in Holland, grew up in France and I currently live in the bay area with my partner and our two cats.
                        I graduated from Rensselaer Polytechnic Institute with a Bachelor's of Science in Design Innovation & Society with a minor in sustainability studies.
                        For a couple of years, I worked as a Computer Science and English teacher. Due to the high cost of living in the bay area, I also worked for Zesty, a catering startup that was eventually bought out by Caviar.
                        The pandemic decimated that job, and gave me the opportunity to finally change my career. In order to get a quick start, I completed the Full Stack Coding Bootcamp at UC Berkeley.
                        I quickly realized that this was a very good fit for me, and my design background ended up helping out a surprising amount; all three of the group projects were ideas that I had initially pitched. 
                        Following my graduating, I was hired by Soliant Consulting where I developed custom software solutions for a variety of small and medium businesses. Due to the consulting nature of our business, I not only developed software but I also interacted with clients
                        and was involve in the foundation phase alongside our trusted Business Analysts and Technical Leads. I am currently seeking employment and working on a freelance project.
                    </Typography>
                </Grid>
                <Grid xs={5}></Grid>
                <Grid xs={1}></Grid>
            </Grid>
        </Container>
    );
}

export default About;