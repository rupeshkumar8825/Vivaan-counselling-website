// Component for placement section

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { IPlacementSectionCollegePageComponent } from "../../../../interfaces/interfaces";

// in this we will be showing the placement of the colleges for multiple years 
const PlacementSectionCollegePageComponent = (props : IPlacementSectionCollegePageComponent) => {
    return (
        <div>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <h2>Placement Section</h2>
        </div>
    );
};

export default PlacementSectionCollegePageComponent;