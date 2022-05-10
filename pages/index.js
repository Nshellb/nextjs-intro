// import Head from "next/head"; // head를 반복 작성하는 경우
import Seo from "../components/Seo"; // head 반복 작성을 피한경우

export default function Home() {
    return (
        <div>
            {/* head를 반복 작성하는 경우 - Home */}
            {/* <Head>
                <title>Home | Next Movies</title>
            </Head> */}

            {/* head 반복 작성을 피한경우 */}
            <Seo title="Home" />

            <h1 className="active">Hello</h1>
        </div>
    );
}