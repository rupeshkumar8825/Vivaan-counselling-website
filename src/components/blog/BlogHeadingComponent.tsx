// this is common component for the heading for the blogs that we will be writing
// this component needs to be made as unique. The possible props required are as follows: 
// 1. heading name 
// 2. heading color
// 3. size of the texts

import { IBlogHeadingComponent } from "../../interfaces/interfaces"

const BlogHeadingComponent = (props : IBlogHeadingComponent) => {
    return (
        <div>
            <div className="flex items-center space-x-4">
                {/* Left strip */}
                <div className="w-1 h-8 bg-blue-500"></div>

                {/* Heading text */}
                <h2 className="text-2xl font-bold text-white">{props.headingName}</h2>
            </div>
        </div>
    )
}


// say eevrything went fine 
export default BlogHeadingComponent