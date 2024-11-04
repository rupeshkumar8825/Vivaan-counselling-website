import { IITCollegeCardConstants } from "../../constants/IITCollegePageConstants"
import { ICollegeIntroCardComponent, IIITCollegeCard } from "../../interfaces/interfaces"
import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

// this is the home page for the IIT colleges
const IITCollegePage = () => {
    return (
        <div className="border border-white flex flex-wrap items-center justify-between p-10">
            {/* section for different IITs  */}
            {/* we will be making a simple component to show all the IITs  */}
            {/* in this introduction we will be just writing few things about the IITs  */}
            {/* and then provide a link to go into the details about the college */}
            {/* this is IIT college page  */}
            {/* using the for loop here in order */}
            {IITCollegeCardConstants.map((currentCollegeIntro : IIITCollegeCard, index : number) => (
                <CollegeIntroCardComponent title={currentCollegeIntro.collegeName} contentDescription={currentCollegeIntro.collegeDescription} redirectRoute={currentCollegeIntro.buttonRoute}></CollegeIntroCardComponent>

            ))}
        </div>
    )
}

export default IITCollegePage