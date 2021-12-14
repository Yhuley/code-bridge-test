import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { INews } from "../../types/news"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./NewsCard.styles.sass";

interface NewsCardProps {
    news: INews
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
    const navigate = useNavigate()
    
    return (
        <Card sx={{ width: 320, height: 340 }}>          
            <CardMedia
                component="img"
                height="140"
                image={news.imageUrl}
                alt={news.title}
            />
            <CardContent>
                <Typography sx={{margin:"10px 0"}}variant="body2" color="text.secondary" fontSize="small">
                    <CalendarTodayIcon sx={{height: 14}} fontSize="small"/> {news.publishedAt}
                </Typography>
                <Typography gutterBottom fontSize="large" component="div">
                    {news.title}
                </Typography>
                <Typography gutterBottom fontSize="small" color="text.secondary" className="summary-card-text">
                    {news.summary}
                </Typography>
                <Typography 
                    variant="body2" sx={{fontWeight: 'bold', display: "flex", alignItems: "center", cursor: "pointer"}}
                    onClick={() => navigate(`article/${news.id}`)}
                >
                    Read more<ArrowForwardIcon sx={{fontSize: 12}} />
                </Typography>
            </CardContent>        
        </Card>
    )
}

export default NewsCard