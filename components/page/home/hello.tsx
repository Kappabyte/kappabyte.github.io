import style from "../../../styles/components/page/home/hello.module.css"

const Hello = () => {
    return <>
        <div className={style.hello}>
            <div>
                <h1 className={style.type}>Hi! I&apos;m Avery Keuben!</h1>
            </div>
            <div>
                <h2 className={style.type}>Computer Scientist based in Alberta, Canada</h2>
            </div>
        </div>
        <div className={style.helloBackground}>
        </div>
    </>
}

export default Hello;