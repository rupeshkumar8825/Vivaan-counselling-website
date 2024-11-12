import SearchBarComponent from "../../components/SearchBarComponent"
import { StateCollegeCardConstants } from "../../constants/StateCollegePageConstants"
import { IStateCollegeCard } from "../../interfaces/interfaces"
import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

// this is NIT college home page 
const StateEngineeringCollegePage = () => {
    return (
        <div className="flex flex-col">
            {/* code for search bar  */}
            <div className="mt-10 mb-10">
                <SearchBarComponent></SearchBarComponent>
            </div>

            {/* code for showing the list of available colleges */}
            <div className="border border-white flex flex-wrap items-center justify-between p-10">
                {/* search bar option comes here */}
                {StateCollegeCardConstants.map((currentCollegeIntro : IStateCollegeCard) => (
                    <CollegeIntroCardComponent title={currentCollegeIntro.collegeName} contentDescription={currentCollegeIntro.collegeDescription} redirectRoute={currentCollegeIntro.buttonRoute}></CollegeIntroCardComponent>

                ))}
            </div>

        </div>
    )
}


// say everything went fine 
export default StateEngineeringCollegePage