import { Container, List, ListItem, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import QuiltedImageList from "../components/QuiltedImageList";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <Container maxWidth={false} disableGutters  sx={{marginTop: '120px', marginLeft: 0, marginRight: 0}}>
            <Grid container spacing={0}>
                <Grid xs={1}></Grid>
                <Grid lg={5} md={10}>
                    <Typography align='left' variant='h4' sx={{margin: '0.5em'}}>My Skills</Typography>
                    <List>
                        <ListItem>
                            <Typography>
                                <span style={{textDecoration: 'underline'}}>General</span>: TypeScript, JavaScript, Auth0, AWS CDK, Git, Docker
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                <span style={{textDecoration: 'underline'}}>Front End</span>: React, ReactDOM, React Hook Form, Material UI, Zod, TanStack, Accept.js
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                <span style={{textDecoration: 'underline'}}>Back End</span>: Node.js, Koa.js, Express.js, MikroORM, Stripe, Authorize.net, MySQL, MongoDB
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography align='left' variant='h4' sx={{margin: '0.5em'}}>About Me</Typography>
                    <Typography align='left' sx={{margin: '1em', textIndent: '3em'}}>
                        I was born in Holland, grew up in France and I currently live in the bay area with my partner and our two cats.
                        I graduated from Rensselaer Polytechnic Institute with a Bachelor's of Science in Design Innovation & Society with a minor in sustainability studies.
                        For a couple of years, I worked as a Computer Science and English teacher. During the pandemic, I completed the Full Stack Coding Bootcamp at UC Berkeley. 
                        Following my graduating, I was hired by Soliant Consulting where I developed custom software solutions for a variety of small and medium businesses. 
                        Due to the consulting nature of our business, I not only developed software but I also interacted with clients
                        and was also tasked with giving time estimates, storypointing and T-shirt sizing for the various work that needed to be done.
                    </Typography>
                    <Typography align='left' sx={{margin: '1em'}}>
                        I am currently seeking employment. If you believe that I am a good fit, feel free to contact me:
                    </Typography>
                    <Typography align='left' sx={{margin: '1em'}}>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=wmdorgan@gmail.com&tf=cm"><EmailIcon sx={{fontSize: 80, m: 2}} /></a>
                        <a href="https://github.com/emdorgan"><GitHubIcon sx={{fontSize: 80, m: 2}} /></a>
                        <a href="https://www.linkedin.com/in/emily-dorgan/"><LinkedInIcon sx={{fontSize: 80, m: 2}} /></a>
                    </Typography>
                </Grid>
                <Grid lg={5} md={10}><QuiltedImageList/></Grid>
                <Grid xs={1}></Grid>
            </Grid>
        </Container>
    );
}

export default About;