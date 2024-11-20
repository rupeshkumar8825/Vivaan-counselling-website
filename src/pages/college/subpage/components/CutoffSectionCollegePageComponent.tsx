// cutoff section in the college pages 
// this is again a generic page in which we will be being used in all the college pages

import { useLocation, useNavigate } from "react-router-dom";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import ButtonComponent from "../../../../components/ButtonComponent";
import { ICutoffSectionCollegePageComponent } from "../../../../interfaces/interfaces";

export const CutoffSectionCollegePageComponent = (props: ICutoffSectionCollegePageComponent) => {

    // here defining component hooks here
    const location = useLocation();
    const url = location.pathname;
    const navigate = useNavigate();

    // handlers for the cutoff component comes here
    const onCutOffButtonComponentClickHandler = () => {
        // here we will be redirecting the user to the cutoff page for the college 
        // we have to redirect the user to the cutoff page for the college
        // here we will have to find the current college name and then redirect it to appropriate route for this purpose
        // we will be using uselocation here in order to achieve this 
        const collegeName = url.split("/")[3];

        console.log("the college name is ", collegeName)

        // here we will be redirecting the user to the cutoff page for the college
        const cutoffPageUrl = "/college/" + "iit/" + collegeName + "/cutoff"
        navigate(cutoffPageUrl)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            {/* // Accordian for different years comes here  */}
            <div className=" flex justify-center items-center w-1/2">
                <ButtonComponent buttonName={"Check Cut-Off"} buttonWidthInRem={"36"} onButtonComponentClickHandler={onCutOffButtonComponentClickHandler}></ButtonComponent>
            </div>

        </div>
    );
};


// say everything went fine 
export default CutoffSectionCollegePageComponent;