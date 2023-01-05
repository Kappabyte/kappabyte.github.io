import * as fs from "fs"
import Markdown from "../../../../components/core/markdown";
import Panel from "../../../../components/core/Panel";

export default async function Page({ params }: {params: any}) {
    const { post } = params;
    if(!fs.existsSync(`posts/${post}.md`)) {
        return <>
            <h1>404</h1>
            <h4>Unknown Post</h4>
        </>
    }
    const file = fs.readFileSync(`posts/${post}.md`).toString()

    //@ts-ignore
    let metadata: any = /^[^}]*}/.test(file) ? JSON.parse(/^[^}]*}/.exec(file)[0]) : {title: "Invalid post file", author: "System", date: new Date().toString() }
    console.log(metadata)
    let content = file.replace(/^[^}]*}/, "");

    return <>
        <Panel>
            <h1>{metadata.title}</h1>
            <h2>{metadata.author} - {metadata.date}</h2>
        </Panel>
        <Panel>
            <Markdown>{content}</Markdown>
        </Panel>
    </>
}

export async function generateStaticParams() {
    const posts = fs.readdirSync("posts/")


    return posts.map((post) => ({
        post: post
    }));
}
