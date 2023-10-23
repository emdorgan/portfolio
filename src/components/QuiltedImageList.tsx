import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import emily1 from '../assets/images/emily1.jpg';
import emily2 from '../assets/images/emily2.jpg';
import emily3 from '../assets/images/emily3.jpg';
import emily4 from '../assets/images/emily4.jpg';
import cassy from '../assets/images/cassy.jpg';
import maya from '../assets/images/maya.jpg';


function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
    {
        img: emily1,
        title: 'emily1',
        rows: 2,
        cols: 2,
    },
    {
        img: emily2,
        title: 'emily2',
        rows: 2,
    },
    {
        img: cassy,
        title: 'Cassy',
        rows: 2,
    },
    {
        img: maya,
        title: 'maya',
        rows: 2,
    },
    {
        img: emily4,
        title: 'emily4',
        rows: 2,
    },
    {
        img: emily3,
        title: 'emily3',
        cols: 2,
        rows: 2,
    },
  ];

const QuiltedImageList = () => {
  return (
    <ImageList
      sx={{ width: {lg: '70%', md: '100%'}, ml: {lg: '10%', md: '10%', sm: '1%'}, height: '96%' }}
      variant="quilted"
      cols={4}
      rowHeight={170}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} sx={{display: 'flex'}}>
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default QuiltedImageList;