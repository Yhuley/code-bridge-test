import { useMemo } from "react";

export const useNews = (searchQuery: string, news: any[]) => {
    return useMemo(() => {
        const searchQueryArray = searchQuery.match(/\b(\w+)\b/g)

        const regexFromQueryArray = searchQueryArray ? new RegExp(searchQueryArray.join("|"), 'gi') : /(?:)/

        const foundNews =  searchQueryArray ? news.filter(item =>  item.title.match(regexFromQueryArray) || item.summary.match(regexFromQueryArray)) : news
        

        const mutedArray =  searchQueryArray ? foundNews.filter(item => {
            item.titleCoincidences = 0
            item.summaryCoincidences = 0
            
            if(!!item.title.match(regexFromQueryArray)) item.titleCoincidences += item.title.match(regexFromQueryArray).length
            if(!!item.summary.match(regexFromQueryArray)) item.summaryCoincidences += item.summary.match(regexFromQueryArray).length

            return item
        }) : foundNews

        const sortedNews= mutedArray.sort((a, b) =>  b.titleCoincidences - a.titleCoincidences || b.summaryCoincidences - a.summaryCoincidences)

        const highlitedNews = sortedNews.map(item => {         
            const newTitle = item.title.replace(
                regexFromQueryArray,
                (match: any) => 
                    `<mark style="backgroundColor: yellow">${match}</mark>`
            )
                    
            const newSummary = item.summary.replace(
                regexFromQueryArray,
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
}