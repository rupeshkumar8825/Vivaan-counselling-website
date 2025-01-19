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
import { CollegePageNavigationSvgPathConstants } from "../../../../constants/college/IIT/IITCollegePageNavigationComponentConstants"
import LocationSectionCollegeComponent from "../components/LocationSectionCollegeComponent"
import RankingSectionCollegeComponent from "../components/RankingSectionCollegeComponent"
import SeatSectionCollegeComponent from "../components/SeatSectionCollegeComponent"
import FeeWaiverSectionCollegeComponent from "../components/FeeWaiverSectionCollegePageComponent"
import TopBannerForCollegePage from "../../../../home/components/TopBannerForCollegePage"

const IITGenericCollegePage = (props : IIITGenericCollegeComponent) => {
    return (
        <div>
            <TopBannerForCollegePage></TopBannerForCollegePage>
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
                <AboutSectionCollegePageComponent headingId={props.aboutSectionHeadingId} headingName={props.aboutSectionHeadingName} content={props.aboutSectionContent} aboutSectionTableContent={props.aboutSectionTableContent} aboutSectionTableHeading={props.aboutSectionTableHeading}></AboutSectionCollegePageComponent>
                <LocationSectionCollegeComponent headingId={props.locationSectionHeadingId} headingName={props.locationSectionHeadingName} content={props.locationSectionContent} locationSectionTableContent={props.locationSectionTableContent} locationSectionTableHeading={props.locationSectionTableHeading}></LocationSectionCollegeComponent>
                <RankingSectionCollegeComponent headingId={props.rankingSectionHeadingId} headingName={props.rankingSectionHeadingName} content={props.rankingSectionContent} rankingSectionTableContent={props.rankingSectionTableContent} rankingSectionTableHeading={props.rankingSectionTableHeading}></RankingSectionCollegeComponent>
                <AdmissionSectionCollegePageComponent headingId={props.admissionSectionHeadingId} headingName={props.admissionSectionHeadingName} content={props.admissionSectionContent}></AdmissionSectionCollegePageComponent>
                <CoursesSectionCollegePageComponent coursesSectionTableContent={props.coursesSectionTableContent} coursesSectionTableHeading={props.coursesSectionTableHeading} headingId={props.coursesSectionHeadingId} headingName={props.coursesSectionHeadingName} content={props.coursesSectionContent}></CoursesSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={props.feeSectionHeadingId} headingName={props.feeSectionHeadingName} content={props.feeSectionContent} feeSectionHostelFeeTableContent={props.feeSectionHostelFeeTableContent} feeSectionHostelFeeTableHeading={props.feeSectionHostelFeeTableHeading} feeSectionInstituteFeeTableContent={props.feeSectionInstituteFeeTableContent} feeSectionInstituteFeeTableHeading={props.feeSectionInstituteFeeTableHeading}></FeesSectionCollegePageComponent>
                <FeeWaiverSectionCollegeComponent headingId={props.feeWaiverSectionHeadingId} headingName={props.feeWaiverSectionHeadingName} content={props.feeWaiverSectionContent}></FeeWaiverSectionCollegeComponent>
                <SeatSectionCollegeComponent headingId={props.seatSectionHeadingId} headingName={props.seatSectionHeadingName} content={props.seatSectionContent} seatSectionTableContent={props.seatSectionTableContent} seatSectionTableHeading={props.seatSectionTableHeading}></SeatSectionCollegeComponent>
                <CutoffSectionCollegePageComponent headingId={props.cutoffSectionHeadingId} headingName={props.cutoffSectionHeadingName} content={props.cutoffSectionContent}></CutoffSectionCollegePageComponent>
                <PlacementSectionCollegePageComponent collegePlacementDataConstant={props.collegePlacementDataConstant} headingId={props.placementSectionHeadingId} headingName={props.placementSectionHeadingName} content={props.placementSectionContent} imageArray={props.placementImageList}></PlacementSectionCollegePageComponent>

                {/* ' following are the components which are not there currently' */}
                {/* 1. Location 
                    2. Ranking
                    3. Seats  */}
            </div>
        </div>
    )
}

export default IITGenericCollegePage

/**
 * 
 * TODO : 
 *  1. Add the footer to all the pages (done)
 *  2. Add the banner images to all the pages (done)
 *  3. Add the images besides the click here 
 *  4. Add support for FAQ section on all the main pages like exam pages, counselling related pages
 *  5. Remove mentorship pages
 *  6. Fix the topbar responsiveness
 *  7. Add the same NIRF ranking icon on both the sides(Done)
 *  8. Fix the admission section with the bullet points indentation
 *  9. Make the video responsive that comes when we give pop up message
 *  10. Check all other finishing touches that needs to give for this purpose
 */