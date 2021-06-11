import {useRouter} from 'next/router'
import Link from 'next/link'

const article = (article) => {
    // const router = useRouter();
    // const {id} = router.query;
    console.log(article.article)
    return (
        <>
            <h1>{article.article.title}</h1>
            <p>{article.article.body}</p>
            <br/>
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getServerSideProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();
    return {
        props :{
            article
        }
    }
}

export default article
