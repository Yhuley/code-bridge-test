import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IArticle } from "../../types/article";
import Loading from "../loading/Loading.component";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import "./ArticleCard.styles.sass";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ArticleCardProps {
    article: IArticle;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const navigate = useNavigate()
    
    if (!article) return <Loading containerHeight="90vh" />

    return (
        <div className="article-container">
            <div 
                className="article-background-image"
                style={{ backgroundImage: `url(${article.imageUrl}`}}   
            />  
      
            <Paper className="article" elevation={4}>
                <Typography align="center" variant="h5">{article.title}</Typography>
                <Typography align="center" variant="body1">{article.summary}</Typography>
            </Paper>
            <Typography 
                    variant="body2"
                    onClick={() => navigate(-1)}
                    className="go-back-button"
            >
                    <ArrowBackIcon sx={{fontSize: 12}} />&nbsp;Back to homepage
            </Typography>
        </div>
    )
}

export default ArticleCard