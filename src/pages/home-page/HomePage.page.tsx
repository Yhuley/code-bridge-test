import { FC } from "react";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "../../reducers/news/news.actions";
import NewsCard from "../../components/news-card/NewsCard.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loading from "../../components/loading/Loading.component";
import Error from "../../components/error/Error.component";
import "./HomePage.styles.sass";

const HomePage: FC = () => {
    const { news, isFetching, error } = useTypedSelector (state => state.newsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchNewsStart())  
    }, [dispatch])

    if (isFetching) return <Loading />

    if (error) return <Error error={error} />

    return (
        <div className="home-wrapper">
            {news.map(item => <NewsCard key={item.id} news={item}/>)}
        </div>
    )
}

export default HomePage