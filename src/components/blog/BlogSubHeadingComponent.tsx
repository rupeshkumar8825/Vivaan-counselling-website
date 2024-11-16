// this is the subheading component 
// this will be mainly used in the blog sections of the pages 
// The following are the use cases : 
// 1. To add a subheading inside a heading. 
// 2. To add a subheading inside a blog section.

import { IBlogSubHeadingComponent } from "../../interfaces/interfaces";


const BlogSubHeadingComponent = (props : IBlogSubHeadingComponent) => {
    return (
        <div>
            <div className="flex items-center space-x-4">
                {/* Left strip */}
                <div className="w-1 h-8 bg-blue-500"></div>

                {/* Heading text */}
                <h2 className="text-2xl font-bold text-white">{props.headingName}</h2>
            </div>
        </div>
    );
};

export default BlogSubHeadingComponent;