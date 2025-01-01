// this is the ranking section of the college section for  generic college page

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent"
import { IRankingSectionCollegePageComponent } from "../../../../interfaces/interfaces"
import RankingSectionTableComponent from "./tables/RankingSectionTableComponent"


const RankingSectionCollegeComponent = (props : IRankingSectionCollegePageComponent) => {

    return (
        <>
            <div className="mt-10">
                {/* here comes the blog component if any for the ranking section for this purpose */}
                <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
                {/* then here comes the ranking table component for this purpose */}
                <RankingSectionTableComponent tableContentHeading={props.rankingSectionTableHeading} tableContent={props.rankingSectionTableContent}></RankingSectionTableComponent>

            </div>
        </>
    )
}


// say everything went fine 
export default RankingSectionCollegeComponent