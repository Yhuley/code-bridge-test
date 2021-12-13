import { FC } from "react";
import { IArticle } from "../../types/article";

interface ArticleCardProps {
    article: IArticle
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    console.log(article.id);
    return (
        <div>
            {/* {article.title} error */}
        </div>
    )
}

export default ArticleCard