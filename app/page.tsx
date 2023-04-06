import Hello from "../components/page/home/hello";
import TwoColumn from "../components/layout/TwoColumn";
import Panel from "../components/core/Panel";

export default async function Page() {
    // Forward fetched data to your Client Component
    return <>
        <Hello />
        <h1>About Me</h1>
        <Panel>
            <TwoColumn ratio={1/5}>
                <span></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet diam non sagittis ornare. Mauris eget iaculis eros. Suspendisse tincidunt id urna nec interdum. Curabitur scelerisque dictum mauris sed consequat. Nunc placerat ex nec elit varius auctor. Duis semper magna id sollicitudin laoreet. Fusce eu mi vitae nisi gravida elementum semper fermentum nisi. Curabitur placerat ipsum mi, sed ornare nisl efficitur id. Phasellus iaculis consectetur nibh, vel blandit augue. Integer condimentum vehicula posuere. Curabitur ullamcorper elit a mi placerat lacinia. </p>
            </TwoColumn>
        </Panel>
        <h1>Featured Projects</h1>
        <TwoColumn ratio={1/2}>
            <Panel>
                <h2>Name of Project</h2>
                <p>Project Description</p>
                <a>Learn more &gt;</a>
            </Panel>
            <Panel>
                <h2>Name of Project</h2>
                <p>Project Description</p>
                <a>Learn more &gt;</a>
            </Panel>
        </TwoColumn>
    </>
}
