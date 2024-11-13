// this is the generic college page for IIT
// mainly for all the IITs college page will be rendered in this component 
// we will passing some data in the form of props to this component for that particular IIT college 
import IITBombayCollegeImage  from "../../../../assets/images/iit-bombay-college-pic.jpg"
import { IITBombayCollegeAboutSectionContent, IITBombayCollegeFeeSectionContent, IITBombayCollegeNavigationConstants } from "../../../../constants/college/IIT/CollegePageNavigationComponentConstants"
import AboutSectionCollegePageComponent from "../components/AboutSectionCollegePageComponent"
import CollegePageNavigationComponent from "../components/CollegePageNavigationComponent"
import FeesSectionCollegePageComponent from "../components/FeesSectionCollegePageComponent"
const IITGenericCollegePage = () => {
    return (
        <div>
            <div className="flex flex-col  text-white">
                {/* here comes the IIT bombay image  */}
                <div className="flex flex-col items-center justify-center p-10 rounded w-full">
                    <div className="relative w-full flex justify-center items-center">
                        <img src={IITBombayCollegeImage} alt="IIT Bombay" className=" rounded w-3/4 h-80 "></img>
                        <div className="absolute inset-0 bg-blue opacity-50 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold mt-5 ">Indian Institute of Technology Bombay</div>
                </div>
                <CollegePageNavigationComponent></CollegePageNavigationComponent>
                <AboutSectionCollegePageComponent headingId={IITBombayCollegeNavigationConstants[0].headingId} headingName={IITBombayCollegeNavigationConstants[0].title} content={IITBombayCollegeAboutSectionContent}></AboutSectionCollegePageComponent>
                <FeesSectionCollegePageComponent headingId={IITBombayCollegeNavigationConstants[1].headingId} headingName={IITBombayCollegeNavigationConstants[1].title} content={IITBombayCollegeFeeSectionContent}></FeesSectionCollegePageComponent>
            </div>
        </div>
    )
}

export default IITGenericCollegePage