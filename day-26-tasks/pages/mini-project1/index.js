import Head from "next/head";
import "../../src/assets/css/style.css";

export default function BlogListing({ blogs }) {
    return (
        <div className="container">
            <Head>
                <meta name="description" content="Blog list fetched using SSR in Next.js" />
            </Head>

            <h1 className="main-heading">Mini Project 1: Blog Listing with SSR</h1>
            <p>This blog list is rendered at request time using <code>getServerSideProps</code>.</p>

            <section className="task-section">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const blogs = await res.json();

        return {
            props: {
                blogs,
            },
        };
    } catch (error) {
        return {
            props: {
                blogs: [],
            },
        };
    }
}
