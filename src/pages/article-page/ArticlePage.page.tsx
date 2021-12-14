import { FC, useEffect } from "react";
import ArticleCard from "../../components/article-card/ArticleCard.component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchArticleStart } from "../../reducers/article/article.actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Error from "../../components/error/Error.component";

type ArticlePageParams = {
    id: string;
}

const ArticlePage: FC = () => {
    const { article, error } = useTypedSelector (state => state.articleReducer)
    const { id } = useParams<ArticlePageParams>()
    const dispatch = useDispatch()

    useEffect(() => {   
        dispatch(fetchArticleStart(id))
    }, [])

    if (error) return <Error error={error} />

    return (
        <ArticleCard article={article} />
    )
}

export default ArticlePage