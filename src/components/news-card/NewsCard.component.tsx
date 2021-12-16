import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { INews } from "../../types/news"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./NewsCard.styles.sass";
import Loading from "../loading/Loading.component";

interface NewsCardProps {
    news: INews
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
    const [isImgLoadError, setIsImgLoadError] = useState<boolean>(false);
    const [isImgLoad, setIsImgLoad] = useState<boolean>(true);
    const navigate = useNavigate()
    
    return (
        <Card className="news-card-container">
            {isImgLoad && <Loading containerHeight={"140px"} />}
            {isImgLoadError ?
                (<Typography  
                    variant="body2"
                    className="error-img-container"
                >
                    photo not found
                </Typography >)
                : (
                    <CardMedia
                        component="img"
                        height="140"
                        image={news.imageUrl}
                        alt={`${news.id}`}
                        onLoad={() => setIsImgLoad(false)}
                        onError={() => {
                            setIsImgLoadError(true)
                            setIsImgLoad(false)
                        }}
                    />
                )
            }       
            <CardContent>
                <Typography 
                    sx={{margin:"10px 0"}}
                    variant="body2" 
                    color="text.secondary" 
                    fontSize="small"
                >
                    <CalendarTodayIcon sx={{height: 14}} fontSize="small"/> {news.publishedAt.split("T")[0]}
                </Typography>
                <Typography 
                    gutterBottom fontSize="large" 
                    component="div"
                    dangerouslySetInnerHTML={{__html: (news.title)}}
                />
                <Typography 
                    gutterBottom fontSize="small"
                    color="text.secondary"
                    className="summary-card-text"
                    dangerouslySetInnerHTML={{__html: (news.summary)}}
                />
                <Typography 
                    variant="body2"
                    className="read-more-button"
                    onClick={() => navigate(`article/${news.id}`)}
                >
                    Read more&nbsp;<ArrowForwardIcon sx={{fontSize: 12}} />
                </Typography>
            </CardContent>        
        </Card>
    )
}

export default NewsCard