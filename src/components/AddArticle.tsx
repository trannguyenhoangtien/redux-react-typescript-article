import * as React from "react"
import { IArticle } from "../store/type"

type Props = {
    saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({saveArticle}) =>{
    const [article, setArticle] = React.useState<IArticle | {}>();

    const handArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(article);
    }

    return(
        <form onSubmit={addNewArticle} className="Add-article">
            <input type="text" id="title" required autoComplete="false" placeholder="Title" onChange={handArticleData} />
            <input type="text" id="body" required autoComplete="false" placeholder="Description" onChange={handArticleData} />
            <button disabled={article===undefined ? true : false}>
                Add article
            </button>
        </form>
    )
};