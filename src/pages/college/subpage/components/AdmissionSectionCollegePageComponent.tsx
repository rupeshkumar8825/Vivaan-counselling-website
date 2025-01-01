// Common component for admission section for the colleges
// This common component will be used in the following places : 
// 1. In Admission section in all 23 IITs 
// 2. In Admission section in all 31 NITs
// 3. In Admission section in all 28 IIITs
// 4. In Admission section in other state engineering colleges

import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { IAdmissionSectionCollegePageComponent } from "../../../../interfaces/interfaces";

const AdmissionSectionCollegePageComponent = (props: IAdmissionSectionCollegePageComponent) => {
    return (
        <div className="mt-10">
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
        </div>
    );
};

export default AdmissionSectionCollegePageComponent;