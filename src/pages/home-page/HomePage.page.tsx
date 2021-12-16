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

        const regexFromMyArray = searchQueryArray ? new RegExp(searchQueryArray.join("|"), 'gi') : /(?:)/

        const findNews =  searchQueryArray ? news.filter(item =>  item.title.match(regexFromMyArray) || item.summary.match(regexFromMyArray)) : news
        

        const mutedArray =  searchQueryArray ? findNews.filter(item => {
            item.titleCoincidences = 0
            item.summaryCoincidences = 0
            
            if(!!item.title.match(regexFromMyArray)) item.titleCoincidences += item.title.match(regexFromMyArray).length
            if(!!item.summary.match(regexFromMyArray)) item.summaryCoincidences += item.summary.match(regexFromMyArray).length

            return item
        }) : findNews

        const sortedArray = mutedArray.sort((a, b) =>  b.titleCoincidences - a.titleCoincidences || b.summaryCoincidences - a.summaryCoincidences)

        const highlitedNews = sortedArray.map(item => {         
            const newTitle = item.title.replace(
                regexFromMyArray,
                (match: any) => 
                    `<mark style="backgroundColor: yellow">${match}</mark>`
            )
                    
            const newSummary = item.summary.replace(
                regexFromMyArray,
            (match: any) => 
                `<mark style="backgroundColor: yellow">${match}</mark>`
            )   

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