import { FC, useState, useEffect } from "react";
import { useNews } from "../../hooks/useNews";
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "../../reducers/news/news.actions";
import NewsCard from "../../components/news-card/NewsCard.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loading from "../../components/loading/Loading.component";
import Error from "../../components/error/Error.component";
import "./HomePage.styles.sass";
import Typography from '@mui/material/Typography';
import Search from "../../components/search/Search.component";
import Divider from '@mui/material/Divider';

const HomePage: FC = () => {
    const { news, isFetching, error } = useTypedSelector (state => state.newsReducer)
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchNewsStart())
    }, [])

    const filteredNews = useNews(searchQuery, news)

    if (isFetching) return <Loading containerHeight={"90vh"} />

    if (error) return <Error error={error} />

    return (
        <div className="home-wrapper">
            <Typography variant="subtitle2" gutterBottom component="div" className="bold-subtitle">
                Filter by keywords        
            </Typography>
            <Search 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {!!filteredNews.length ? (
                <div style={{width: "100%"}}>
                    <Typography variant="subtitle2" gutterBottom component="div" className="bold-subtitle">
                        {filteredNews.length > 1 ? "Results" : "Result"}: {filteredNews.length}
                    </Typography>
                    <Divider sx={{width: "100%"}} />
                </div> ) : (
                <Typography variant="subtitle2" gutterBottom component="p" className="error-message" >
                    There are no news
                </Typography>
                )
            }
            <div className="news-wrapper">
                {filteredNews.map(item => <NewsCard key={item.id} news={item}/>)}
            </div>            
        </div>
    )
}

export default HomePage