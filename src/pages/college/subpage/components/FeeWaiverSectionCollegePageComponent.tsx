// this is the fee waiver section for all the colleges that are there for this purpose

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { IFeeWaiverSecionCollegePageComponent } from "../../../../interfaces/interfaces";

const FeeWaiverSectionCollegeComponent = (props : IFeeWaiverSecionCollegePageComponent) => {
    return (
        <div className="border-2 border-slate-700 mt-4 pt-2">
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
        </div>
    ) 

}


// say everything went fine 
export default FeeWaiverSectionCollegeComponent;