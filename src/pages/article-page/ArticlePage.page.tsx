import { FC, useEffect } from "react";
import ArticleCard from "../../components/article-card/ArticleCard.component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchArticleStart } from "../../reducers/article/article.actions";

type ArticlePageParams = {
    id: string;
}

const ArticlePage: FC = () => {
    const { id } = useParams<ArticlePageParams>()
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchArticleStart(id))
    }, [])

    return (
        <ArticleCard />
    )
}

export default ArticlePage