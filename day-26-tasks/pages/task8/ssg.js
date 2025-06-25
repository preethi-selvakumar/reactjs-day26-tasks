import Link from 'next/link';
import "../../src/assets/css/style.css";

export async function getStaticProps() {
    return {
        props: {
            mode: "SSG (Static Site Generation)",
            time: new Date().toLocaleString(),
        },
    };
}

export default function SSGPage({ mode, time }) {
    return (
        <div className="container">
            <h1>8. SSR vs SSG Comparison</h1>
            <h2>{mode} Page</h2>
            <p>Time generated at: <strong>{time}</strong></p>
            <Link href="/task8/ssr/">Go to SSR Page</Link>
        </div>
    );
}
