import TwoColumn from "../../components/layout/TwoColumn";
import Panel from "../../components/core/Panel";

export default async function Page() {
    // Forward fetched data to your Client Component
    return <>
        <h1>Posts</h1>
        <TwoColumn ratio={1/2}>
            <Panel>
                <h2>Post Example</h2>
            </Panel>
            <Panel>
                <h2>Post Example</h2>
            </Panel>
        </TwoColumn>
    </>
}
