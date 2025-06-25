import Head from "next/head";
import "../../src/assets/css/style.css";

export default function Task9SEOPage() {
    return (
        <>
            <Head>
                <title>Task 9 – SEO Meta Tags in Next.js</title>
                <meta name="description" content="Learn how to add meta tags in Next.js for SEO benefits using the Head component." />
                <meta name="keywords" content="Next.js, SEO, meta tags, Head component, React" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="Task 9 - SEO Meta Tags in Next.js" />
                <meta property="og:description" content="This page demonstrates how to use meta tags for search engine optimization in Next.js." />
            </Head>

            <div className="container">
                <h1>Task 9: SEO Benefits with Meta Tags</h1>
                <p>This page includes important meta tags using the <code>Head</code> component provided by Next.js.</p>
                <ul>
                    <li><strong>Title</strong>: Sets the browser tab title</li>
                    <li><strong>Description</strong>: Helps search engines understand the content</li>
                    <li><strong>Keywords</strong>: Gives relevant tags for indexing</li>
                    <li><strong>Author</strong>: Mentions the content creator</li>
                </ul>
            </div>
        </>
    );
}
