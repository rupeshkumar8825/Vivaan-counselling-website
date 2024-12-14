// this is a blog section
// this typically consists of the heading of the blog and the content 

import { IBlogSectionComponent } from "../../interfaces/interfaces"
import BlogHeadingComponent from "./BlogHeadingComponent"


/**
 * The architecture of every blog component will be as follows: 
 *  1. Heading of the blog : This will first consists of the heading of the blog component. This is compulsory field
 *  2. Content of the blog : This will consists of the content of the blog. This is compulsory field
 *  3. Image of the blog : This will consists of the image of the blog. This is optional field
 * 
 * Do note that there is no support for sub heading in this. May be in future we may add this support
 * according to the requirements of the clients. 
 */
const BlogSectionComponent = (props : IBlogSectionComponent) => {
    return (
        <div className=" p-6 bg-blue rounded-lg border-2 border-slate-800 shadow-lg shadow-md mt-4">
            {/* if there is no heading then also we will not show the heading */}
            {/* why the below updated code helps is when we want to just add some content
            after in the blog. For example in between table might come and then we might want 
            to add the content */}
            {props.headingId !== "" ? <div id = {props.headingId}>
                <BlogHeadingComponent headingName={props.headingName}></BlogHeadingComponent>
            </div> : null}
            {/* if the content is not empty then only we will show the paragraph else we will not show anything  */}
            {props.content !== "" ? <p className="  whitespace-pre-line text-left text-slate-400  p-5  mt-4" dangerouslySetInnerHTML={{__html : props.content}}></p> : null}
            {/* we have to add support for the image as well here. In order to add support we will have to 
            update the constants as well whereever we will have the image for this purpose*/}
            {props.image ? (
                <img src={props.image} alt="Blog Image" className=" p-10 w-full h-auto mt-0 rounded-lg border-1 border-slate-600 shadow-lg" />
            ) : null}
        </div>
    )
}


// say everything went fine 
export default BlogSectionComponent
