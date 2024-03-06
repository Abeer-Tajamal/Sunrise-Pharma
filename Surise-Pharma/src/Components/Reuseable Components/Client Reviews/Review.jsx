import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './Review.css';

const ReviewCard = ({ avatarSrc, ratingValue, content, Title }) => {
    return (
        <Card className='review-card' sx={{ maxWidth: 345 }}>
            <div className='card-header-review'>
                <Avatar alt="ST" src={avatarSrc} className="avatar-review" />
                <CardHeader title={Title} />
                <Rating name="read-only" value={ratingValue} readOnly />
            </div>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;