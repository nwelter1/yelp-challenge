import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@material-ui/core';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export const OutlinedCard = (business) => {
    console.log('from the card:')
    console.log(business.business.name)
  return (
    <Box sx={{ display: 'inline-flex', minWidth: 300, width:300}}>
      <Card variant='outlined' sx = {{minWidth: 300, minHeight: 375}}>
      <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Category: {business.business.categories[0].title}
                </Typography>
                <Typography variant="h5" component="div">
                    {business.business.name}
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image={business.business.image_url}
                    alt="Business Photo"
                />
            </CardContent>
            <CardActions>
            <Button size="small" href={'/business/' + business.business.id}>Learn More</Button>
            </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
