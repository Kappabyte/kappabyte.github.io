import {ReactNode} from "react";
import style from "../../styles/components/layout/TwoColumn.module.css"

const TwoColumn = ({ratio, children}: {ratio: number, children: ReactNode[]}) => {
    return <div className={style.twoColumn} style={{gridTemplateColumns: `${ratio * 100}% ${(1-ratio) * 100}%`}}>
        <div>
            {children[0]}
        </div>
        <div>
            {children[1]}
        </div>
    </div>
}

export default TwoColumn;