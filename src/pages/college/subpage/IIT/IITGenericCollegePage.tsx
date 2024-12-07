// this is the generic college page for IIT
// mainly for all the IITs college page will be rendered in this component 
// we will passing some data in the form of props to this component for that particular IIT college 
import { IIITGenericCollegeComponent } from "../../../../interfaces/interfaces"
import AboutSectionCollegePageComponent from "../components/AboutSectionCollegePageComponent"
import AdmissionSectionCollegePageComponent from "../components/AdmissionSectionCollegePageComponent"
import CollegePageNavigationComponent from "../components/CollegePageNavigationComponent"
import CoursesSectionCollegePageComponent from "../components/CoursesSectionCollegePageComponent"
import CutoffSectionCollegePageComponent from "../components/CutoffSectionCollegePageComponent"
import FeesSectionCollegePageComponent from "../components/FeesSectionCollegePageComponent"
import PlacementSectionCollegePageComponent from "../components/PlacementSectionCollegePageComponent"
import { CollegePageNavigationSvgPathConstants } from "../../../../constants/college/IIT/CollegePageNavigationComponentConstants"

const IITGenericCollegePage = (props : IIITGenericCollegeComponent) => {
    return (
        <div>
            <div className="flex flex-col  text-white">
                {/* here comes the IIT bombay image  */}
                <div className="flex flex-col items-center justify-center p-10 rounded w-full">
                    <div className="relative w-full flex justify-center items-center">
                        <img src={props.collegeImage} alt="IIT Bombay" className=" rounded w-3/4 h-80 "></img>
                        <div className="absolute inset-0 bg-blue opacity-50 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold mt-5 ">{props.collegeName}</div>
                </div>
                <CollegePageNavigationComponent collegePageNavigationSvgPathConstants={CollegePageNavigationSvgPathConstants} collegePageNavigationConstants={props.collegePageNavigationConstants}></CollegePageNavigationComponent>
                <AboutSectionCollegePageComponent headingId={props.aboutSectionHeadingId} headingName={props.aboutSectionHeadingName} content={props.aboutSectionContent}></AboutSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={props.feeSectionHeadingId} headingName={props.feeSectionHeadingName} content={props.feeSectionContent}></FeesSectionCollegePageComponent>
                <AdmissionSectionCollegePageComponent headingId={props.admissionSectionHeadingId} headingName={props.admissionSectionHeadingName} content={props.admissionSectionContent}></AdmissionSectionCollegePageComponent>
                <CoursesSectionCollegePageComponent collegeCourseDetailConstant={props.collegeCourseDetailConstant} headingId={props.coursesSectionHeadingId} headingName={props.coursesSectionHeadingName} content={props.coursesSectionContent}></CoursesSectionCollegePageComponent>
                <PlacementSectionCollegePageComponent collegePlacementDataConstant={props.collegePlacementDataConstant} headingId={props.placementSectionHeadingId} headingName={props.placementSectionHeadingName} content={props.placementSectionContent}></PlacementSectionCollegePageComponent>
                <CutoffSectionCollegePageComponent headingId={props.cutoffSectionHeadingId} headingName={props.cutoffSectionHeadingName} content={props.cutoffSectionContent}></CutoffSectionCollegePageComponent>
            </div>
        </div>
    )
}

export default IITGenericCollegePage