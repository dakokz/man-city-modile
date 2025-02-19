import { Link } from "react-router-dom";

function Error() {
    return (
        <section class="error-block">
            <div class="container">
                <div class="mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
                <h1 class="error title">Серверде қате бар</h1>
                <p class="center">Қосымшаны пайдалану барысында серверде қате шықты немесе сізде интернет нашар істеп тұр</p>
                <Link to="/" class="button danger">Жаңарту</Link>
            </div>
        </section>
    );
}

export default Error;