// this is the seat section component for the generic college pages

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent"
import { ISeatSectionCollegePageComponent } from "../../../../interfaces/interfaces"
import SeatMatrixSectionTableComponent from "./tables/SeatMatrixSectionTableComponent"

const SeatSectionCollegeComponent = (props : ISeatSectionCollegePageComponent) => {
    return (
        <>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <SeatMatrixSectionTableComponent tableContent={props.seatSectionTableContent} tableContentHeading={props.seatSectionTableHeading}></SeatMatrixSectionTableComponent>
        </>
    )
}


// say everything went fine 
export default SeatSectionCollegeComponent