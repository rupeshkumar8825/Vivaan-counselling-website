// this is the seat section component for the generic college pages

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent"
import { ISeatSectionCollegePageComponent } from "../../../../interfaces/interfaces"
import SeatMatrixSectionTableComponent from "./tables/SeatMatrixSectionTableComponent"

const SeatSectionCollegeComponent = (props : ISeatSectionCollegePageComponent) => {
    return (
        <>
        <div className="border-2 border-slate-700 mt-4 pt-2">
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <SeatMatrixSectionTableComponent tableContent={props.seatSectionTableContent} tableContentHeading={props.seatSectionTableHeading}></SeatMatrixSectionTableComponent>

        </div>
        </>
    )
}


// say everything went fine 
export default SeatSectionCollegeComponent