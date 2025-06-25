import Head from "next/head";
import Link from "next/link";
import "../../src/assets/css/style.css";

export async function getStaticProps() {
    const products = [
        { id: "p1", name: "iPhone 15", price: "$999" },
        { id: "p2", name: "Samsung Galaxy S23", price: "$899" },
        { id: "p3", name: "OnePlus 12", price: "$799" },
    ];

    return {
        props: { products },
    };
}

export default function ProductCatalog({ products }) {
    return (
        <div className="container">
            <Head>
                <title>Mini Project 2 - Product Catalog</title>
            </Head>

            <section className="task-section">
                <h1>Mini Project 2: Product Catalog (SSG)</h1>
                <p>These product pages are generated statically using <code>getStaticProps</code> and <code>getStaticPaths</code>.</p>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link href={`/miniproject2/${product.id}`}>{product.name} - {product.price}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
