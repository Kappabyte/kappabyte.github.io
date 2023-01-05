import React from "react";

export default ({children}: { children: React.ReactNode }) => {
    return <>
        <h2>Layout Sub</h2>
        {children}
    </>
}
