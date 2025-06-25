import "../../src/assets/css/style.css";

export async function getStaticPaths() {
    const paths = [
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } },
    ];

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { id } = params;

    const data = {
        1: { title: "Page One", description: "This is the first dynamic page." },
        2: { title: "Page Two", description: "This is the second dynamic page." },
        3: { title: "Page Three", description: "This is the third dynamic page." },
    };

    return {
        props: {
            id,
            content: data[id] || {},
        },
    };
}

export default function Task7Page({ id, content }) {
    return (
        <div className="container">
            <h1>7. Dynamic SSG Page</h1>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <p><strong>Page ID:</strong> {id}</p>
        </div>
    );
}
