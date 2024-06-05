import "./MainContent.css"
import Content from "./Content"
import Counter from "./Counter"

const MainContent=()=>(
    <>
    <div className="box">
        <Content/>
    </div>
    <div className="count_box">
        <Counter/>
    </div>
    </>
);

export default MainContent;