import Head from "next/head";
import "../../src/assets/css/style.css";

const productData = {
    p1: { name: "iPhone 15", price: "$999", description: "Latest Apple flagship phone" },
    p2: { name: "Samsung Galaxy S23", price: "$899", description: "High-end Android device" },
    p3: { name: "OnePlus 12", price: "$799", description: "Performance-focused Android phone" },
};

export async function getStaticPaths() {
    const paths = Object.keys(productData).map((id) => ({
        params: { id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const product = productData[params.id];

    return {
        props: {
            product,
        },
    };
}

export default function ProductPage({ product }) {
    return (
        <div className="container">
            <Head>
                <title>{product.name} - Product Page</title>
            </Head>

            <section className="task-section">
                <h1>{product.name}</h1>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
            </section>
        </div>
    );
}
