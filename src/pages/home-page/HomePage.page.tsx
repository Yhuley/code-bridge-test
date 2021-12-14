import { FC, useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "../../reducers/news/news.actions";
import NewsCard from "../../components/news-card/NewsCard.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loading from "../../components/loading/Loading.component";
import Error from "../../components/error/Error.component";
import "./HomePage.styles.sass";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const HomePage: FC = () => {
    const { news, isFetching, error } = useTypedSelector (state => state.newsReducer)
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchNewsStart())
    }, [])

    const filteredNews = useMemo(() => {
        return news.filter(item => item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }, [searchQuery, news])

    if (isFetching) return <Loading />

    if (error) return <Error error={error} />

    return (
        <div className="home-wrapper">
            <Paper
                component="form"
                sx={{ p: '2px 4px', width: 450, height: 40 }}
            >
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="search something..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </Paper>
            <div className="news-wrapper">
                {filteredNews.map(item => <NewsCard key={item.id} news={item}/>)}
            </div>            
        </div>
    )
}

export default HomePage