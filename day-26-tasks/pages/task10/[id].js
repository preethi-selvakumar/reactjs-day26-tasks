import { useRouter } from 'next/router';
import "../../src/assets/css/style.css";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "101" } },
            { params: { id: "102" } }
        ],
        fallback: true, 
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        props: {
            id,
            message: `Page generated for ID: ${id}`
        },
    };
}

export default function Task10Fallback({ id, message }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className="container">
                <h1>Loading Fallback Page...</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Task 10: Fallback Page for Dynamic SSG</h1>
            <p><strong>{message}</strong></p>
            <p>This page was generated using <code>getStaticPaths</code> with <code>fallback: true</code>.</p>
        </div>
    );
}
