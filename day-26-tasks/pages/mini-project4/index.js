import Head from "next/head";
import "../../src/assets/css/style.css";

export async function getStaticProps() {
    const articles = [
        { id: "1", title: "New Tech Innovations in 2025", summary: "A look into upcoming trends." },
        { id: "2", title: "Climate Change: Global Response", summary: "How nations are acting together." },
        { id: "3", title: "SpaceX Mars Mission: Update", summary: "Progress on interplanetary travel." }
    ];

    return {
        props: {
            articles
        }
    };
}

export default function NewsHome({ articles }) {
    return (
        <div className="container">
            <Head>
                <title>Mini Project 4: News Website</title>
                <meta name="description" content="Top news headlines of the day" />
            </Head>

            <section className="task-section">
                <h1>Top News Headlines</h1>
                <ul>
                    {articles.map(article => (
                        <li key={article.id}>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <a href={`/mini-project4/${article.id}`}>Read More</a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
