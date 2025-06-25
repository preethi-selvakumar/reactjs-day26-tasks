import Head from "next/head";

export default function Task13({ error }) {
    if (error) {
        throw new Error("Simulated server error");
    }

    return (
        <div className="container">
            <Head>
                <title>Task 13 - Error Handling</title>
            </Head>
            <h1>Task 13: Error Handling in Next.js</h1>
            <p>This page demonstrates how custom error pages work in Next.js.</p>
        </div>
    );
}

export async function getServerSideProps() {
    const simulateError = false; 

    if (simulateError) {
        return {
            props: {
                error: true,
            },
        };
    }

    return {
        props: {
            error: false,
        },
    };
}
