import { FC } from "react";
import { IArticle } from "../../types/article";
import Loading from "../loading/Loading.component";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

interface ArticleCardProps {
    article: IArticle;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    
    if (!article) return <Loading />

    return (
        <Box className="article-container">
             <Paper className="article" elevation={4}>
                <Typography align="center" variant="subtitle1">{article.title}</Typography>
                 <Typography align="center" variant="body2">{article.summary}</Typography>
             </Paper>
        </Box>
    )
}

export default ArticleCard