import { FC, useEffect } from "react";
import ArticleCard from "../../components/article-card/ArticleCard.component";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchArticleStart } from "../../reducers/article/article.actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loading from "../../components/loading/Loading.component";
import Error from "../../components/error/Error.component";

type ArticlePageParams = {
    id: string;
}

const ArticlePage: FC = () => {
    const { article, isFetching, error } = useTypedSelector (state => state.articleReducer)
    const { id } = useParams<ArticlePageParams>()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("run")
        dispatch(fetchArticleStart(id))
    }, [])

    if (isFetching) return <Loading />

    if (error) return <Error error={error} />

    return (
        <ArticleCard article={article}/>
    )
}

export default ArticlePage