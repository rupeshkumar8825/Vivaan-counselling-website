// this is a blog section
// this typically consists of the heading of the blog and the content 

import { useEffect, useState } from "react"
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

    // defining the state for the className of the blog section component
    const [classNameProperty, setClassNameProperty] = useState<string>("")


    // this will be called once the component renders for the first time 
    useEffect(() => {
        // here we can write the logic to actually assign the correct value of the className tailwind css 
        // to the blog section component.
        // Consider the following section: 
        // 1. isCurrentHeadingEmpty = true : this means that this is not a new blog section.
        //  *        a. Hence we do not have to give top border. 
        //  *        b. For bottom border check whether we the isNextHeadingEmpty is true or false.
        //  *              i. If isNextHeadingEmpty is true then we will not give the bottom border
        //  *             ii. If isNextHeadingEmpty is false then we will give the bottom border because this marks the end of the section
        //  * 
        //  *   2. isCurrentHeadingEmpty = false : this means that this is a new blog section. 
        //  *        a. Hence we have to give the top border. As this is a new section hence we have to give a top border here for this purpose
        //  *        b. For bottom border check whether isNextHeadingEmpty is true or false
        //  *             i. If isNextHeadingEmpty is true : this means that this is not the end of the blog section hence we will not give the bottom border 
        //  *             ii. If isNextHeadingEmpty is false : this means that this is the end of the blog section hence we will give the bottom border 
        //  *

        if(props.isCurrentHeadingEmpty == true)
        {
            // this means that this is not a new blog section
            // hence we do not have to give the top border
            if(props.isNextHeadingEmpty == true)
            {
                // this means that this is not the end of the blog section
                // hence we will not give the bottom border
                setClassNameProperty(" p-6 bg-blue rounded-lg border-2 border-slate-800 border-t-0 border-b-0 shadow-lg shadow-md mt-0 ")
            }
            else
            {
                // this means that this is the end of the blog section
                // hence we will give the bottom border but we will not give the top border
                setClassNameProperty(" p-6 bg-blue rounded-lg border-2 border-slate-800  border-t-0 shadow-lg shadow-md mt-0")
            }
        }
        else if (props.isCurrentHeadingEmpty == false)
        {
            // this means that this is a new blog section
            // hence we have to give the top border
            if(props.isNextHeadingEmpty == true)
            {
                // this means that this is not the end of the blog section
                // hence we will not give the bottom border
                setClassNameProperty(" p-6 bg-blue rounded-lg border-2 border-slate-800 border-b-0 shadow-lg shadow-md mt-4")
            }
            else
            {
                // this means that this is the end of the blog section
                // hence we will give the bottom border
                setClassNameProperty(" p-6 bg-blue rounded-lg border-2 border-slate-800 shadow-lg shadow-md mt-4")
            }
        }
        
    }, [])


    return (
        
        /**
         * Depending on the value of the depending on the value of the isPreviousHeadingEmpty and isNextHeadingEmpty
         * We have to give the border of the current blog section. 
         * Following are the cases for this purpose:
         *   1. isCurrentHeadingEmpty = true : this means that this is not a new blog section.
         *        a. Hence we do not have to give top border. 
         *        b. For bottom border check whether we the isNextHeadingEmpty is true or false.
         *              i. If isNextHeadingEmpty is true then we will not give the bottom border
         *             ii. If isNextHeadingEmpty is false then we will give the bottom border because this marks the end of the section
         * 
         *   2. isCurrentHeadingEmpty = false : this means that this is a new blog section. 
         *        a. Hence we have to give the top border. As this is a new section hence we have to give a top border here for this purpose
         *        b. For bottom border check whether isNextHeadingEmpty is true or false
         *             i. If isNextHeadingEmpty is true : this means that this is not the end of the blog section hence we will not give the bottom border 
         *             ii. If isNextHeadingEmpty is false : this means that this is the end of the blog section hence we will give the bottom border 
         *   
         */
        <div className={classNameProperty}>
            {/* if there is no heading then also we will not show the heading */}
            {/* why the below updated code helps is when we want to just add some content
            after in the blog. For example in between table might come and then we might want 
            to add the content */}
            {props.headingId !== "" ? <div id = {props.headingId}>
                <BlogHeadingComponent headingName={props.headingName}></BlogHeadingComponent>
            </div> : null}
            {/* if the content is not empty then only we will show the paragraph else we will not show anything  */}
            {/**
             * Following is the new requirement from the client side: 
             *  1. They wanted to be able to add multiple images and content in the same blog heading
             *  2. Hence we will have to support the combination of content + image + image + content + content and so on 
             *  3. Basically any type of the combination we should be able to do between content and image for this purpose
             * Now with the above mentioned requirement the change was made in the constants of the counselling pages for now. 
             * In future we may have to do this changes in almost of all of the constants pages. 
             * Another change was in the blog related components as well. 
             * 
             * What needs to be changed in this: 
             *  1. For the heading with multiple combinations of (content, image) the border should be different
             *  2. As per current implementation if we add new image and content then we will have to add a new heading
             *  3. Due to which the borders are coming different 
             * 
             * Updated Implementation: 
             *  1. check whether the previous heading is empty string. this will be done using the isSameHeading field itself
             *  2. If it is empty string then this means that this content/image belongs to the same heading 
             *  3. Hence no need to give heading here

             */}
            {props.content !== "" ? <p className=" whitespace-pre-wrap text-left text-slate-300  p-5  mt-4" dangerouslySetInnerHTML={{__html : props.content}}></p> : null}
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
