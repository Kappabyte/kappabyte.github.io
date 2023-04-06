import * as fs from "fs"
import Markdown from "../../../../components/core/markdown";
import Panel from "../../../../components/core/Panel";

export default async function Page({ params }: {params: any}) {
    const { post } = params;
    console.log("start");
    if(!fs.existsSync(`posts/${post}.md`)) {
        return <>
            <h1>404</h1>
            <h4>Unknown Post</h4>
        </>
    }
    console.log("exists");
    const file = fs.readFileSync(`posts/${post}.md`).toString()
    console.log("read");

    //@ts-ignore
    let metadata: any = /^[^}]*}/.test(file) ? JSON.parse(/^[^}]*}/.exec(file)[0]) : {title: "Invalid post file", author: "System", date: new Date().toString() }
    console.log(metadata)
    let content = file.replace(/^[^}]*}/, "");

    console.log("rendering...");
    return <>
        <Panel>
            <h1 className="text-4xl text-text">{metadata.title}</h1>
            <h2 className="text-xl text-subtext0">{metadata.author} - {metadata.date}</h2>
        </Panel>
        <hr className="h-px m-4 bg-gray-600 border-0" />
        <Panel>
            <Markdown>{content}</Markdown>
        </Panel>
    </>
}

export async function generateStaticParams() {
    const posts = fs.readdirSync("posts/")


    return posts.map((post) => ({
        post: post.split(".")[0]
    }));
}
