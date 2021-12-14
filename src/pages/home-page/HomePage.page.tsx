import { FC, useState, useEffect, useMemo } from "react";
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

    const filteredNews = useMemo(() => {
        const searchQueryArray = searchQuery.match(/\b(\w+)\b/g)

        const findNews =  searchQueryArray ? news.filter(item => searchQueryArray.some(substring => item.title.toLowerCase().includes(substring.toLowerCase()) || item.summary.toLowerCase().includes(substring.toLowerCase()))) : news

        let newTitle = ""
        let newSummary = ""

        const highlitedNews = findNews.map(item => {
            searchQueryArray?.map(substring => { 
                newTitle = item.title.replace(
                    new RegExp(substring, 'gi'),
                    (match: any) => 
                        `<mark style="backgroundColor: yellow">${match}</mark>`
                )

                newSummary = item.summary.replace(
                    new RegExp(substring, 'gi'),
                    (match: any) => 
                        `<mark style="backgroundColor: yellow">${match}</mark>`
                )
            })      

            return {
                ...item,
                title: newTitle ? newTitle : item.title,
                summary: newSummary ? newSummary : item.summary
            }
        })

        return highlitedNews
    }, [searchQuery, news])

    if (isFetching) return <Loading />

    if (error) return <Error error={error} />

    return (
        <div className="home-wrapper">
            <Typography variant="subtitle2" gutterBottom component="div" className="bold-subtitle">
                Filter by keywords        
            </Typography>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {!!filteredNews.length && (
                <Typography variant="subtitle2" gutterBottom component="div" className="bold-subtitle">
                    {filteredNews.length > 1 ? "Results" : "Result"}: {filteredNews.length}
                </Typography>
                )
            }
            <Divider sx={{width: "100%"}} />
            <div className="news-wrapper">
                {filteredNews.map(item => <NewsCard key={item.id} news={item}/>)}
            </div>            
        </div>
    )
}

export default HomePage