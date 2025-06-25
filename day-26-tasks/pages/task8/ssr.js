import Link from 'next/link';
import "../../src/assets/css/style.css";

export async function getServerSideProps() {
    return {
        props: {
            mode: "SSR (Server-Side Rendering)",
            time: new Date().toLocaleString(),
        },
    };
}

export default function SSRPage({ mode, time }) {
    return (
        <div className="container">
            <h1>8. SSR vs SSG Comparison</h1>
            <h2>{mode} Page</h2>
            <p>Time generated at: <strong>{time}</strong></p>
            <Link href="/task8/ssg/">Go to SSG Page</Link>
        </div>
    );
}
