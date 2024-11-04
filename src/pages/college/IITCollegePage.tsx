import SearchBarComponent from "../../components/SearchBarComponent"
import { IITCollegeCardConstants } from "../../constants/IITCollegePageConstants"
import { IIITCollegeCard } from "../../interfaces/interfaces"
import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

// this is the home page for the IIT colleges
const IITCollegePage = () => {
    return (
        <div className="flex flex-col">
            <div className="mt-10 mb-10">
                <SearchBarComponent></SearchBarComponent>
            </div>
            <div className="border border-white flex flex-wrap items-center justify-between p-10">
                {/* search bar option comes here */}
                {IITCollegeCardConstants.map((currentCollegeIntro : IIITCollegeCard) => (
                    <CollegeIntroCardComponent title={currentCollegeIntro.collegeName} contentDescription={currentCollegeIntro.collegeDescription} redirectRoute={currentCollegeIntro.buttonRoute}></CollegeIntroCardComponent>

                ))}
            </div>

        </div>
    )
}

export default IITCollegePage