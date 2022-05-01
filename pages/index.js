import { useState } from "react";
// import "../styles/globals.css" // do not work

export default function Home() {
    return (
        <div>
            {/* NavBar의 active style을 가져오지 못함 */}
            <h1 className="active">Hello</h1>
            {/* NavBar a에 영향을 주지 못하는 style  */}
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}