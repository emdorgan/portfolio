import { Button, Container, List, ListItem, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

//@TODO add technologies used
//@TODO for the e-sports calendar, describe challenges

const Projects = () => {
    return (
        <Container maxWidth={false} disableGutters  sx={{marginTop: '120px', marginLeft: 0, marginRight: 0}}>
            <Grid container spacing={0}>
                <Grid md={1} sm={0}></Grid>
                <Grid md={10} sm={12}>
                    <Typography align='left' variant='h4' sx={{margin: '0.5em'}}>Current Project: Dynamic Esports Event Calendar</Typography>

                    <Typography align='left' sx={{margin: '1em', textIndent: '3em'}}>
                        The problem: The Age of Empires II community is a vibrant gaming community with a grass-roots competitive scene. Most tournaments are sponsored by fans of the game and the range of tournaments include 4 different 'tiers'. 
                        This means that, in 2023 alone there were over 100 tournaments which makes it very confusing and complex to navigate.
                    </Typography>
                    <Typography align='left' sx={{margin: '1em', textIndent: '3em'}}>
                        The solution: Using cheerio to parse tournament data from Liquidpedia, I developed a Node.js API that returns a list of all tournaments organized by tier. Data from my API is then sent to a 
                        React Front end that displays each tournament in a calendar using react-big-calendar. Note that this project is ongoing and subject to frequent change.
                    </Typography>
                    <Button variant='contained' sx={{m:2}} onClick={()=> window.open('https://github.com/emdorgan/aoe-resources')}>Front End Repository</Button>
                    <Button variant='contained' sx={{m:2}} onClick={()=> window.open('https://github.com/emdorgan/aoe-resources-api')}>Back End Repository</Button>
                    <Typography align='left' variant='h4' sx={{margin: '0.5em'}}>My work at Soliant Consulting</Typography>

                    <Typography align='left' sx={{margin: '1em', textIndent: '3em'}}>
                        As an Associate Cloud Native Application Developer, it was my responsibility to create custom full stack websites for our clients.
                        The tech stack was most often a React Front end and a Node.js backend featuring MUI, React-Hook-Form, Tanstack, MikroORM and PostgreSQL.
                        However due to the nature of our clients having their own infrastucture and needs, the tools we used varied extensively. Projects I was involved in included:
                    </Typography>
                    <List>
                        <ListItem>- An order form for coffee distributors belonging to a local coffee chain</ListItem>
                        <ListItem>- A 11 page application for students attending a school district</ListItem>
                        <ListItem>- An admin page for processing said applications</ListItem>
                        <ListItem>- A QR 'badge' system for students to check into activity kiosks</ListItem>
                    </List>
                </Grid>
                <Grid md={1} sm={0}></Grid>
            </Grid>
        </Container>
    );
}

export default Projects;