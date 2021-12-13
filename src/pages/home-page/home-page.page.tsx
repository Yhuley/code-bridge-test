import { FC } from "react";
import NewsCard from "../../components/news-card/NewsCard.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HomePage: FC = () => {
    const { news, isFetching, error } = useTypedSelector (state => state.newsReducer)

    return (
        <div>
            {news.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default HomePage