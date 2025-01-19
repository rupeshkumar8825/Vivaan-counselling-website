// this is the component for FAQ for all the colleges in this case
// the same component will be used for all the colleges just the data passed to this as props will be different

import BlogHeadingComponent from "../../../../components/blog/BlogHeadingComponent"
import FAQComponent from "../../../../components/common/FAQComponent"
// import { IFAQSectionCollegePageComponent } from "../../../../interfaces/interfaces"

const FAQSectionCollegePageComponent = () => {
    return  (

        <>
        <div id = {"FAQ"} className="p-6 bg-blue rounded-lg border-2 border-slate-800  shadow-lg shadow-md mt-4">
            <BlogHeadingComponent headingName={"FAQ"}></BlogHeadingComponent>
            <FAQComponent></FAQComponent>
        </div>
        </>
    )
}


export default FAQSectionCollegePageComponent
