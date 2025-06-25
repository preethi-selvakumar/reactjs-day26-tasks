import Link from "next/link";
import "../../src/assets/css/style.css";

export default function Task12() {
    return (
        <div className="container">
            <h2 className="main-heading">Task 12: Client-Side Navigation</h2>

            <p>
                This task demonstrates how to use the <code>Link</code> component from Next.js to enable smooth client-side navigation.
            </p>

            <ul>
                <li>
                    <Link href="/task7/1">Go to Task 7: Dynamic SSG Page (ID: 1)</Link>
                </li>
                <li>
                    <Link href="/task8/ssr">Go to Task 8: SSR Page</Link>
                </li>
                <li>
                    <Link href="/task8/ssg">Go to Task 8: SSG Page</Link>
                </li>
                <li>
                    <Link href="/task9">Go to Task 9: SEO Page</Link>
                </li>
                <li>
                    <Link href="/task10/999">Go to Task 10: Fallback Page</Link>
                </li>
                <li>
                    <Link href="/task11">Go to Task 11: ISR Page</Link>
                </li>
                <li>
                    <Link href="/alltasks">⬅ Back to All Tasks</Link>
                </li>
            </ul>
        </div>
    );
}
