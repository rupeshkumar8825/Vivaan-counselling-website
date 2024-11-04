import SearchBarComponent from "../../components/SearchBarComponent"
import { IIITCollegeCardConstants } from "../../constants/IIITCollegeConstants"
import { IIITCollegeCard } from "../../interfaces/interfaces"
import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

// this is the home page for IIIT college 
const IIITCollegePage = () => {
    return (
        <div className="flex flex-col">
            {/* code for search bar  */}
            <div className="mt-10 mb-10">
                <SearchBarComponent></SearchBarComponent>
            </div>

            {/* code for showing the list of available colleges */}
            <div className="border border-white flex flex-wrap items-center justify-between p-10">
                {/* search bar option comes here */}
                {IIITCollegeCardConstants.map((currentCollegeIntro : IIITCollegeCard) => (
                    <CollegeIntroCardComponent title={currentCollegeIntro.collegeName} contentDescription={currentCollegeIntro.collegeDescription} redirectRoute={currentCollegeIntro.buttonRoute}></CollegeIntroCardComponent>

                ))}
            </div>

        </div>
    )
}


// say everything went fine 
export default IIITCollegePage