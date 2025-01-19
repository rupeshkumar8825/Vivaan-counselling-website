// this is generic college details page 
// actually this is the common code for the page and 
// just the data is different for each college

import { CollegePageNavigationSvgPathConstants } from "../../../../constants/college/IIT/IITCollegePageNavigationComponentConstants"
import TopBannerForCollegePage from "../../../../home/components/TopBannerForCollegePage"
import { IIIITGenericCollegeComponent } from "../../../../interfaces/interfaces"
import AboutSectionCollegePageComponent from "../components/AboutSectionCollegePageComponent"
import AdmissionSectionCollegePageComponent from "../components/AdmissionSectionCollegePageComponent"
import CollegePageNavigationComponent from "../components/CollegePageNavigationComponent"
import CoursesSectionCollegePageComponent from "../components/CoursesSectionCollegePageComponent"
import CutoffSectionCollegePageComponent from "../components/CutoffSectionCollegePageComponent"
import FeesSectionCollegePageComponent from "../components/FeesSectionCollegePageComponent"
import LocationSectionCollegeComponent from "../components/LocationSectionCollegeComponent"
import PlacementSectionCollegePageComponent from "../components/PlacementSectionCollegePageComponent"
import RankingSectionCollegeComponent from "../components/RankingSectionCollegeComponent"
import SeatSectionCollegeComponent from "../components/SeatSectionCollegeComponent"



const IIITGenericCollegePage = (props : IIIITGenericCollegeComponent) => {
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
                <CollegePageNavigationComponent collegePageNavigationSvgPathConstants={CollegePageNavigationSvgPathConstants} collegePageNavigationConstants={props.collegePageNavigationConstants}></CollegePageNavigationComponent>
                <AboutSectionCollegePageComponent headingId={props.aboutSectionHeadingId} headingName={props.aboutSectionHeadingName} content={props.aboutSectionContent} aboutSectionTableContent={props.aboutSectionTableContent} aboutSectionTableHeading={props.aboutSectionTableHeading}></AboutSectionCollegePageComponent>
                <LocationSectionCollegeComponent headingId={props.locationSectionHeadingId} headingName={props.locationSectionHeadingName} content={props.locationSectionContent} locationSectionTableContent={props.locationSectionTableContent} locationSectionTableHeading={props.locationSectionTableHeading}></LocationSectionCollegeComponent>
                <RankingSectionCollegeComponent headingId={props.rankingSectionHeadingId} headingName={props.rankingSectionHeadingName} content={props.rankingSectionContent} rankingSectionTableContent={props.rankingSectionTableContent} rankingSectionTableHeading={props.rankingSectionTableHeading}></RankingSectionCollegeComponent>
                <AdmissionSectionCollegePageComponent headingId={props.admissionSectionHeadingId} headingName={props.admissionSectionHeadingName} content={props.admissionSectionContent}></AdmissionSectionCollegePageComponent>
                <CoursesSectionCollegePageComponent coursesSectionTableContent={props.coursesSectionTableContent} coursesSectionTableHeading={props.coursesSectionTableHeading} headingId={props.coursesSectionHeadingId} headingName={props.coursesSectionHeadingName} content={props.coursesSectionContent}></CoursesSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={props.feeSectionHeadingId} headingName={props.feeSectionHeadingName} content={props.feeSectionContent} feeSectionHostelFeeTableContent={props.feeSectionHostelFeeTableContent} feeSectionHostelFeeTableHeading={props.feeSectionHostelFeeTableHeading} feeSectionInstituteFeeTableContent={props.feeSectionInstituteFeeTableContent} feeSectionInstituteFeeTableHeading={props.feeSectionInstituteFeeTableHeading}></FeesSectionCollegePageComponent>
                <SeatSectionCollegeComponent headingId={props.seatSectionHeadingId} headingName={props.seatSectionHeadingName} content={props.seatSectionContent} seatSectionTableContent={props.seatSectionTableContent} seatSectionTableHeading={props.seatSectionTableHeading}></SeatSectionCollegeComponent>
                <CutoffSectionCollegePageComponent headingId={props.cutoffSectionHeadingId} headingName={props.cutoffSectionHeadingName} content={props.cutoffSectionContent}></CutoffSectionCollegePageComponent>
                <PlacementSectionCollegePageComponent collegePlacementDataConstant={props.collegePlacementDataConstant} headingId={props.placementSectionHeadingId} headingName={props.placementSectionHeadingName} content={props.placementSectionContent} imageArray={props.placementImageList}></PlacementSectionCollegePageComponent>

            </div>
        </div>
    )
}

export default IIITGenericCollegePage