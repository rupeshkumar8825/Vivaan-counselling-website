// this is the generic nit page to show the details about the NIT colleges 
// instead of making a separate page for every nit college 
// we have made a generic page such that it will be applicable to all colleges 
// and the variation will be in the props that we pass to this component

import { CollegePageNavigationSvgPathConstants } from "../../../../constants/college/IIT/IITCollegePageNavigationComponentConstants"
import TopBannerForCollegePage from "../../../../home/components/TopBannerForCollegePage"
import { INITGenericCollegeComponent } from "../../../../interfaces/interfaces"
import AboutSectionCollegePageComponent from "../components/AboutSectionCollegePageComponent"
import AdmissionSectionCollegePageComponent from "../components/AdmissionSectionCollegePageComponent"
import CollegePageNavigationComponent from "../components/CollegePageNavigationComponent"
import CoursesSectionCollegePageComponent from "../components/CoursesSectionCollegePageComponent"
import CutoffSectionCollegePageComponent from "../components/CutoffSectionCollegePageComponent"
import FAQSectionCollegePageComponent from "../components/FAQSectionCollegePageComponent"
import FeesSectionCollegePageComponent from "../components/FeesSectionCollegePageComponent"
import FeeWaiverSectionCollegeComponent from "../components/FeeWaiverSectionCollegePageComponent"
import LocationSectionCollegeComponent from "../components/LocationSectionCollegeComponent"
import PlacementSectionCollegePageComponent from "../components/PlacementSectionCollegePageComponent"
import RankingSectionCollegeComponent from "../components/RankingSectionCollegeComponent"
import SeatSectionCollegeComponent from "../components/SeatSectionCollegeComponent"


const NITGenericCollegePage = (props : INITGenericCollegeComponent) => {

    return (
        <div>
            <TopBannerForCollegePage/>
            <div className="flex flex-col  text-white">
                {/* here comes the IIT bombay image  */}
                <div className="flex flex-col items-center justify-center p-10 rounded w-full">
                    <div className="relative w-full flex justify-center items-center">
                        <img src={props.collegeImage} alt="IIT Bombay" className=" rounded w-full h-40 sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]  sm:h-64 md:h-68 lg:h-72 xl:h-80 "></img>
                        <div className="absolute inset-0 bg-blue opacity-50 rounded"></div>
                    </div>
                    <div className="text-2xl text-center fosnt-bold mt-5 ">{props.collegeName}</div>
                </div>
                <CollegePageNavigationComponent collegePageNavigationSvgPathConstants={CollegePageNavigationSvgPathConstants} collegePageNavigationConstants={props.collegePageNavigationConstants}></CollegePageNavigationComponent>
                <AboutSectionCollegePageComponent headingId={props.aboutSectionHeadingId} headingName={props.aboutSectionHeadingName} content={props.aboutSectionContent} aboutSectionTableContent={props.aboutSectionTableContent} aboutSectionTableHeading={props.aboutSectionTableHeading}></AboutSectionCollegePageComponent>
                <LocationSectionCollegeComponent headingId={props.locationSectionHeadingId} headingName={props.locationSectionHeadingName} content={props.locationSectionContent} locationSectionTableContent={props.locationSectionTableContent} locationSectionTableHeading={props.locationSectionTableHeading}></LocationSectionCollegeComponent>
                <RankingSectionCollegeComponent headingId={props.rankingSectionHeadingId} headingName={props.rankingSectionHeadingName} content={props.rankingSectionContent} rankingSectionTableContent={props.rankingSectionTableContent} rankingSectionTableHeading={props.rankingSectionTableHeading}></RankingSectionCollegeComponent>
                <AdmissionSectionCollegePageComponent headingId={props.admissionSectionHeadingId} headingName={props.admissionSectionHeadingName} content={props.admissionSectionContent}></AdmissionSectionCollegePageComponent>
                <CoursesSectionCollegePageComponent coursesSectionTableContent={props.coursesSectionTableContent} coursesSectionTableHeading={props.coursesSectionTableHeading} headingId={props.coursesSectionHeadingId} headingName={props.coursesSectionHeadingName} content={props.coursesSectionContent}></CoursesSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={props.feeSectionHeadingId} headingName={props.feeSectionHeadingName} content={props.feeSectionContent} feeSectionInstituteFeeTableContent={props.feeSectionInstituteFeeTableContent} feeSectionInstituteFeeTableHeading={props.feeSectionInstituteFeeTableHeading} feeSectionHostelFeeTableContent={props.feeSectionHostelFeeTableContent} feeSectionHostelFeeTableHeading={props.feeSectionHostelFeeTableHeading}></FeesSectionCollegePageComponent>
                <FeeWaiverSectionCollegeComponent headingId={props.feeWaiverSectionHeadingId} headingName={props.feeWaiverSectionHeadingName} content={props.feeWaiverSectionContent}></FeeWaiverSectionCollegeComponent>
                <SeatSectionCollegeComponent headingId={props.seatSectionHeadingId} headingName={props.seatSectionHeadingName} content={props.seatSectionContent} seatSectionTableContent={props.seatSectionTableContent} seatSectionTableHeading={props.seatSectionTableHeading}></SeatSectionCollegeComponent>
                <CutoffSectionCollegePageComponent headingId={props.cutoffSectionHeadingId} headingName={props.cutoffSectionHeadingName} content={props.cutoffSectionContent}></CutoffSectionCollegePageComponent>
                <PlacementSectionCollegePageComponent collegePlacementDataConstant={props.collegePlacementDataConstant} headingId={props.placementSectionHeadingId} headingName={props.placementSectionHeadingName} content={props.placementSectionContent} imageArray={props.placementImageList}></PlacementSectionCollegePageComponent>
                <FAQSectionCollegePageComponent></FAQSectionCollegePageComponent>
            </div>
        </div>
    )
}

export default NITGenericCollegePage