import "../../src/assets/css/style.css";

export async function getStaticProps() {
    const time = new Date().toLocaleTimeString();

    return {
        props: {
            time,
        },
        revalidate: 10, 
    };
}

export default function Task11Revalidate({ time }) {
    return (
        <div className="container">
            <h1>Task 11: Revalidate Pages in SSG</h1>
            <p>This page uses <code>getStaticProps</code> with <code>revalidate</code> to auto-refresh every 10 seconds.</p>
            <h3>Generated at:</h3>
            <p>{time}</p>
        </div>
    );
}
