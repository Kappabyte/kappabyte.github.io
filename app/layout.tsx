import React from "react";
import Header from "../components/core/header";
import  "../styles/globals.css"

export default ({children}: { children: React.ReactNode }) => (
    <html lang="en">
        <body>
            <Header />
            <main>
                {children}
            </main>
        </body>
    </html>
)
