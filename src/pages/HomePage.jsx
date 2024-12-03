import NewsCard from "../components/newsCard";
import axios from "axios";
import {useState, useEffect} from "react";
import Error from "../components/error";
import LoadingCard from "../components/loadingCard";
function HomePage() {

    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get("https://0f469362310773d9.mokky.dev/pages");
                setPosts(response.data); // json
            } catch(e) {
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />;
    }

    return (
        <section className="mobile-block">
            <div className="container">
                {isLoading ? (
                    <LoadingCard />
                ) : (
                    <>
                    <h1 className="title">жаңалықтар
                    </h1>
                        <div className="news-list">
                            {posts.map((post) => (
                                <NewsCard key={post.id} post={post} />
                            ))}
                        </div>
                    </>
                )}
                
            
            </div>
        </section>
    );
}

export default HomePage;