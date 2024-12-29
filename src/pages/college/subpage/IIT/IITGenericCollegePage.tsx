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
import LocationSectionCollegeComponent from "../components/LocationSectionCollegeComponent"
import RankingSectionCollegeComponent from "../components/RankingSectionCollegeComponent"
import SeatSectionCollegeComponent from "../components/SeatSectionCollegeComponent"

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
                {/* The order of the pages should be like below: 
                    aboutSvg,
                    locationNew2Svg,
                    rankingSvg,
                    admissionsSvg,
                    coursesSvg,
                    feesSvg,
                    seatsSvg,
                    cutoffSvg,
                    placementsSvg, */}
                <CollegePageNavigationComponent collegePageNavigationSvgPathConstants={CollegePageNavigationSvgPathConstants} collegePageNavigationConstants={props.collegePageNavigationConstants}></CollegePageNavigationComponent>
                <AboutSectionCollegePageComponent headingId={props.aboutSectionHeadingId} headingName={props.aboutSectionHeadingName} content={props.aboutSectionContent}></AboutSectionCollegePageComponent>
                <LocationSectionCollegeComponent headingId={props.locationSectionHeadingId} headingName={props.locationSectionHeadingName} content={props.locationSectionContent}></LocationSectionCollegeComponent>
                <RankingSectionCollegeComponent headingId={props.rankingSectionHeadingId} headingName={props.rankingSectionHeadingName} content={props.rankingSectionContent}></RankingSectionCollegeComponent>
                <AdmissionSectionCollegePageComponent headingId={props.admissionSectionHeadingId} headingName={props.admissionSectionHeadingName} content={props.admissionSectionContent}></AdmissionSectionCollegePageComponent>
                <CoursesSectionCollegePageComponent collegeCourseDetailConstant={props.collegeCourseDetailConstant} headingId={props.coursesSectionHeadingId} headingName={props.coursesSectionHeadingName} content={props.coursesSectionContent}></CoursesSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={props.feeSectionHeadingId} headingName={props.feeSectionHeadingName} content={props.feeSectionContent}></FeesSectionCollegePageComponent>
                <SeatSectionCollegeComponent headingId={props.seatSectionHeadingId} headingName={props.seatSectionHeadingName} content={props.seatSectionContent}></SeatSectionCollegeComponent>
                <CutoffSectionCollegePageComponent headingId={props.cutoffSectionHeadingId} headingName={props.cutoffSectionHeadingName} content={props.cutoffSectionContent}></CutoffSectionCollegePageComponent>
                <PlacementSectionCollegePageComponent collegePlacementDataConstant={props.collegePlacementDataConstant} headingId={props.placementSectionHeadingId} headingName={props.placementSectionHeadingName} content={props.placementSectionContent}></PlacementSectionCollegePageComponent>

                {/* ' following are the components which are not there currently' */}
                {/* 1. Location 
                    2. Ranking
                    3. Seats  */}
            </div>
        </div>
    )
}

export default IITGenericCollegePage