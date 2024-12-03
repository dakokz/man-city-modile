import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../components/error";
import LoadingCard from "../components/loadingCard";
import { Link } from "react-router-dom";
function NewsCategoryPage() {

    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://0f469362310773d9.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchCategory();
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get("https://0f469362310773d9.mokky.dev/pages");
                setPosts(response.data); // json
                console.log(posts);
            } catch(e) {
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [id]);

    return (
        <section className="mobile-block">
            <div className="container">
                <h1 className="title">{category.name}</h1>
                <div className="news-list">
                    {posts.map((post) => (
                        <>
                            {post.category === category.name ? (
                                <article className="news-card">
                                    <h3 className="news-card__title">{post.title}</h3>
                                    <h4 className="news-card__category">{post.category}</h4>
                                    <strong className="news-card__date">{post.date}</strong>
                                    <Link to={`/post/${post.id}`} className="button primary">Оқу</Link>
                                </article>
                            ): null}
                        </>
                    ))}
                </div>
            
            </div>
        </section>
    );
}

export default NewsCategoryPage;