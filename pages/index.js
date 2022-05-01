import { useState } from "react";
import NavBar from "../componets/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            {/* NavBar의 active style을 가져오지 못함 */}
            <h1 className="active">Hello</h1>
            {/* NavBar a에 영향을 주지 못하는 style  */}
            <style jsx>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}