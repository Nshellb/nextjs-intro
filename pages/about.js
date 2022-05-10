// import Head from "next/head"; // head를 반복 작성하는 경우
import Seo from "../components/Seo"; // head 반복 작성을 피한경우

export default function Potato() {
    return (
        <div>
            {/* head를 반복 작성하는 경우 - About */}
            {/* <Head>
                <title>About | Next Movies</title>
            </Head> */}

            {/* head 반복 작성을 피한경우 */}
            <Seo title="About" />

            <h1>About</h1>
        </div>
    );
}