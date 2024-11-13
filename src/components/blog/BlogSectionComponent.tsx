// this is a blog section
// this typically consists of the heading of the blog and the content 

import { IBlogSectionComponent } from "../../interfaces/interfaces"
import BlogHeadingComponent from "./BlogHeadingComponent"

const BlogSectionComponent = (props : IBlogSectionComponent) => {
    return (
        <div className="p-6 bg-blue rounded-lg shadow-md">
            <div id = {props.headingId}>
                <BlogHeadingComponent headingName={props.headingName}></BlogHeadingComponent>
            </div>
            {/* <h2 className="text-3xl font-bold mb-4">Blog Post Title</h2> */}
            {/* if the content is not empty then only we will show the paragraph else we will not show anything  */}
            {props.content !== "" ? <p className=" text-left text-slate-400 border-2 border-slate-600 shadow-lg p-10 mb-4 mt-4">{props.content}</p> : null}
            {/* <p className=" text-left text-slate-400 border-2 border-slate-600 shadow-lg p-10 mb-4 mt-4">
                {props.content}
            </p> */}
        </div>
    )
}


// say everything went fine 
export default BlogSectionComponent
