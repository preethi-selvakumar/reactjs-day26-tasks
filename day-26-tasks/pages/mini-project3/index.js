import Head from "next/head";
import "../../src/assets/css/style.css";

export async function getServerSideProps() {
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        username: "janedoe_91",
        bio: "Full Stack Developer. Tech enthusiast. Coffee lover.",
    };

    return {
        props: {
            user,
        },
    };
}

export default function UserProfile({ user }) {
    return (
        <div className="container">
            <Head>
                <title>{user.name} - User Profile</title>
                <meta name="description" content={`${user.name}'s profile page`} />
            </Head>

            <section className="task-section">
                <h1>User Profile</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
            </section>
        </div>
    );
}
