import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ resturant }) {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image="https://prod-wolt-venue-images-cdn.wolt.com/5bf1afff44075d000aa918cd/0cf140cb6736c9a9a3a251276a9096eb-edits/0f20761908cce1eeda7da3b8c69e85da"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography>
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link href=""></Link> */}
      </CardActions>
    </Card>
  );
}
