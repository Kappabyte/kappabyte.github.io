import {ReactNode} from "react";

const Panel = ({children}: {children: ReactNode}) => {
    return <div className="p-4">
        {children}
    </div>
}

export default Panel;