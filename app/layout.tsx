import './globals.css';
import React from "react";
import Header from "../components/core/header";

export default function layout({children}: { children: React.ReactNode }) {
    return <html lang="en">
        <body className="mocha bg-mantle">
            <Header/>
            <main>
                {children}
            </main>
        </body>
    </html>
}
