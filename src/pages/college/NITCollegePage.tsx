import { NITCollegeCardConstants } from "../../constants/college/NIT/NITCollegePageConstants"
import { INITCollegeCard } from "../../interfaces/interfaces"
import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

// this is NIT college home page 
const NITCollegePage = () => {
    return (
        <div className="flex flex-col">
            {/* code for search bar  */}
            {/* <div className="mt-10 mb-10">
                <SearchBarComponent></SearchBarComponent>
            </div> */}

            {/* code for showing the list of available colleges */}
            <div className=" flex flex-wrap items-center justify-evenly p-10">
                {/* search bar option comes here */}
                {NITCollegeCardConstants.map((currentCollegeIntro : INITCollegeCard) => (
                    <CollegeIntroCardComponent title={currentCollegeIntro.collegeName} contentDescription={currentCollegeIntro.collegeDescription} redirectRoute={currentCollegeIntro.buttonRoute} imageLink={currentCollegeIntro.imageLink}></CollegeIntroCardComponent>

                ))}
            </div>

        </div>
    )
}


// say everything went fine 
export default NITCollegePage