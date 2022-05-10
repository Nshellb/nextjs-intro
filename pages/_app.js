import Layout from "../components/Layout";
import "../styles/globals.css"; // work

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}