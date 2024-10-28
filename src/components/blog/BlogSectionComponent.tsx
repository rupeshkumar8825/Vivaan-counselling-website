// this is a blog section
// this typically consists of the heading of the blog and the content 

import { IBlogComponent } from "../../interfaces/interfaces"
import BlogHeadingComponent from "./BlogHeadingComponent"

const BlogSectionComponent = (props : IBlogComponent) => {
    return (
        <div className="p-6 bg-blue rounded-lg shadow-md">
            <div id = {props.headingId}>
                <BlogHeadingComponent headingName={props.headingName}></BlogHeadingComponent>
            </div>
            {/* <h2 className="text-3xl font-bold mb-4">Blog Post Title</h2> */}
            <p className="border-2 border-white text-left text-gray-700 mb-4 mt-4">
                {props.content}
            </p>
        </div>
    )
}


// say everything went fine 
export default BlogSectionComponent
