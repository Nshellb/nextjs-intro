import NavBar from "../components/NavBar";
import "../styles/globals.css"; // work

export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}