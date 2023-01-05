import {ReactNode} from "react";

import style from "../../styles/components/core/panel.module.css"

const Panel = ({children}: {children: ReactNode}) => {
    return <div className={style.panel}>
        {children}
    </div>
}

export default Panel;