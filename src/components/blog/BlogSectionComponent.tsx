// this is a blog section
// this typically consists of the heading of the blog and the content 

import { IBlogSectionComponent } from "../../interfaces/interfaces"
import BlogHeadingComponent from "./BlogHeadingComponent"

const BlogSectionComponent = (props : IBlogSectionComponent) => {
    return (
        <div className="p-6 bg-blue rounded-lg shadow-md">
            {/* if there is no heading then also we will not show the heading */}
            {/* why the below updated code helps is when we want to just add some content
            after in the blog. For example in between table might come and then we might want 
            to add the content */}
            {props.headingId !== "" ? <div id = {props.headingId}>
                <BlogHeadingComponent headingName={props.headingName}></BlogHeadingComponent>
            </div> : null}
            {/* if the content is not empty then only we will show the paragraph else we will not show anything  */}
            {props.content !== "" ? <p className=" text-left text-slate-400 border-1 border-slate-600 shadow-lg p-10 mb-4 mt-4">{props.content}</p> : null}
        </div>
    )
}


// say everything went fine 
export default BlogSectionComponent
