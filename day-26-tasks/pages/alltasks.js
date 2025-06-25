import Link from "next/link";
import "../src/assets/css/style.css";

export default function AllTasks({ serverTime, staticMessage }) {
    return (
        <div className="container">
            <h2 className="main-heading">Reactjs Day 26 Tasks</h2>

            {/* Task 4 */}
            <section className="task-section">
                <h1>Task 4: Basic Page using Pages Directory</h1>
                <p>This page is built using the <code>pages</code> directory of Next.js.</p>
            </section>

            <hr />

            {/* Task 5 */}
            <section className="task-section">
                <h1>Task 5: Server-Side Rendering (SSR)</h1>
                <p>This section uses <code>getServerSideProps</code> to fetch data at request time.</p>
                <h3>Current Server Time:</h3>
                <p>{serverTime}</p>
            </section>

            <hr />

            {/* Task 6 */}
            <section className="task-section">
                <h1>Task 6: Static Site Generation (SSG)</h1>
                <p>This section uses <code>getStaticProps</code> to fetch data at <strong>build time</strong>.</p>
                <h3>Static Message:</h3>
                <p>{staticMessage}</p>
            </section>

            <hr />

            {/* Task 7 */}
            <section className="task-section">
                <h1>7. Dynamic SSG Pages</h1>
                <p>This section demonstrates dynamic page generation using <code>getStaticPaths</code> and <code>getStaticProps</code>.</p>
                <ul>
                    <li><Link href="/task7/1">Go to Dynamic Page 1</Link></li>
                    <li><Link href="/task7/2">Go to Dynamic Page 2</Link></li>
                    <li><Link href="/task7/3">Go to Dynamic Page 3</Link></li>
                </ul>
            </section>

            <hr />
            {/* Task 8 */}
            <section className="task-section">
                <h1>8. Compare SSR vs SSG</h1>
                <p>This section compares how SSR and SSG fetch and render time data.</p>
                <ul>
                    <li><Link href="/task8/ssr">SSR Page (Live Render)</Link></li>
                    <li><Link href="/task8/ssg">SSG Page (Build Time Render)</Link></li>
                </ul>
            </section>

            <hr />
            {/* Task 9 */}
            <section className="task-section">
                <h1>Task 9: SEO Benefits</h1>
                <p>This task demonstrates how to add meta tags using the <code>Head</code> component for SEO improvement.</p>
                <Link href="/task9">Go to SEO Demo Page</Link>
            </section>

            <hr />
            {/* Task 10 */}
            <section className="task-section">
                <h1>10. Fallback Pages in SSG</h1>
                <p>This task uses <code>getStaticPaths</code> with fallback mode to generate dynamic pages on-demand.</p>
                <ul>
                    <li><Link href="/task10/101">Visit Pre-rendered Page: 101</Link></li>
                    <li><Link href="/task10/999">Visit Fallback Page: 999</Link></li>
                </ul>
            </section>

            <hr />
            {/* Task 11 */}
            <section className="task-section">
                <h1>11. Revalidate Pages in SSG (ISR)</h1>
                <p>This task demonstrates automatic page regeneration using the <code>revalidate</code> option in <code>getStaticProps</code>.</p>
                <Link href="/task11">Visit Revalidated Page</Link>
            </section>

            <hr />

            {/* Task 12 */}
            <section className="task-section">
                <h1>12. Client-Side Navigation</h1>
                <p>This task demonstrates how to use the <code>Link</code> component from Next.js for client-side routing.</p>
                <Link href="/task12">Go to Task 12 Page</Link>
            </section>

            <hr />

            {/* Task 13 */}
            <section className="task-section">
                <h1>13. Error Handling</h1>
                <p>This task demonstrates how to handle 404 and 500 errors using custom error pages in Next.js.</p>
                <Link href="/task13">Visit Error Handling Page</Link>
            </section>

            <hr />

            {/* Mini Project 1 */}
            <section className="task-section">
                <h1>Mini Project 1: Blog Listing with SSR</h1>
                <p>Fetches blog posts at request time using <code>getServerSideProps</code>.</p>
                <Link href="/mini-project1">Go to Blog Listing Page</Link>
            </section>

            <hr />

            {/* Mini Project 2 */}
            <section className="task-section">
                <h1>Mini Project 2: Product Catalog (SSG)</h1>
                <Link href="/mini-project2">Go to Product Catalog</Link>
            </section>

            <hr />

            {/* Mini Project 3 */}
            <section className="task-section">
                <h1>Mini Project 3: User Profile Page (SSR)</h1>
                <Link href="/mini-project3">Go to User Profile Page</Link>
            </section>

            <hr />

            {/* Mini Project 4 */}
            <section className="task-section">
                <h1>Mini Project 4: News Website (SSG + SSR)</h1>
                <Link href="/mini-project4">Go to News Home Page</Link>
            </section>

        </div>
    );
}

export async function getServerSideProps() {
    const serverTime = new Date().toLocaleString();
    const staticMessage = "This content was generated at build time using getStaticProps.";

    return {
        props: {
            serverTime,
            staticMessage,
        },
    };
}
