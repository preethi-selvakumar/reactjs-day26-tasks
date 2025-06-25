import Link from 'next/link';
import Head from "next/head";
import "../../src/assets/css/style.css";

const articleData = {
    "1": { title: "New Tech Innovations in 2025", content: "Detailed insights into AI, robotics, and more." },
    "2": { title: "Climate Change: Global Response", content: "Nations uniting for environmental action." },
    "3": { title: "SpaceX Mars Mission: Update", content: "Milestones achieved for Mars travel." }
};

export async function getServerSideProps({ params }) {
    const article = articleData[params.id];

    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            article
        }
    };
}

export default function ArticlePage({ article }) {
    return (
        <div className="container">
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.title} />
            </Head>

            <section className="task-section">
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <Link href="/mini-project4/">Back to News</Link>
            </section>
        </div>
    );
}
