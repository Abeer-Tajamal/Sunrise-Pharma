import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, description, buttonText, buttonLink }) => {
    return (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    <h2><a href={buttonLink}>{title}</a></h2>
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={buttonLink}>
                    {buttonText}
                </Button>
            </CardActions>
        </>
    );
};

export default CustomCard