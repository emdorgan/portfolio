import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Project } from '../pages/Projects';

type Props = {
    project : Project;
};

const ImageCard = ({project} : Props) => {
    return (
        <Card sx={{ maxWidth: 400, border: '1px solid #fff', color: '#fff', m: '1em' }}>
            <CardMedia
                component="img"
                alt={project.imageAltText}
                height="300"
                image={project.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{borderBottom: '1px solid #fff'}}>
                    {project.title}
                </Typography>
                <Typography variant="body2">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Button sx={{m: '2em'}} variant='contained' onClick={()=> window.open(project.repo)}>View Repo</Button>
                {project.deployed && <Button sx={{m: '2em'}} variant='contained' onClick={()=> window.open(project.deployed)}>View Deployed</Button>}
            </CardActions>
        </Card>
    );
}

export default ImageCard;
