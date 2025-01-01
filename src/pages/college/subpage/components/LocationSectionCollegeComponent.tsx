// this is the component for the location section of the generic iit college page

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent"
import { ILocationSectionCollegePageComponent } from "../../../../interfaces/interfaces"
import LocationSectionTableComponent from "./tables/LocationSectionTableComponent"

const LocationSectionCollegeComponent = (props: ILocationSectionCollegePageComponent) => {

    return (
        <>
            <div className="mt-10">
                {/* here we will add some text or some blog component for this purpose */}
                <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
                {/* and then here comes the table of content for the location */}
                <LocationSectionTableComponent tableContent={props.locationSectionTableContent} tableContentHeading={props.locationSectionTableHeading}></LocationSectionTableComponent>

            </div>
        </>
    )
}


export default LocationSectionCollegeComponent