import { FC } from "react";
import ArticleCard from "../../components/article-card/ArticleCard.component";
import { useParams } from "react-router-dom";

type ArticlePageParams = {
    id: string;
}

const ArticlePage: FC = () => {
    const params = useParams<ArticlePageParams>()

    return (
        <ArticleCard />
    )
}

export default ArticlePage