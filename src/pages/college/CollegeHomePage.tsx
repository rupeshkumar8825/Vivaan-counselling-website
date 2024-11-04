// this is the home page for college section 

import CollegeIntroCardComponent from "./components/CollegeIntroCardComponent"

const CollegeHomePage = () => {
    return (
        <div className="border border-white flex flex-wrap items-center justify-between p-10">
            <CollegeIntroCardComponent></CollegeIntroCardComponent>
            <CollegeIntroCardComponent></CollegeIntroCardComponent>
            <CollegeIntroCardComponent></CollegeIntroCardComponent>
        </div>
    )
}

// say everything went fine 
export default CollegeHomePage