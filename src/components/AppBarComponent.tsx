import { Link } from "react-router-dom"
import DropDownMenuComponent from "./DropDownMenuComponent"
import { counsellingRouteList, counsellingSubMenuList, examRouteList, examSubMenuList, mentorshipRouteList, mentorshipSubMenuList } from "../constants/AppBarConstants"




const AppBarComponent = () => {
    

    return (
        <div>
            <nav className="bg-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                            {/* You can replace this with your own SVG icon or an <img> tag */}
                            <Link to="/">
                                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-4H4m12-8h4" />
                                </svg>
                            </Link>
                        </div>

                        {/* Menu Items */}
                        <div className="md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-white">
                                {/* Drop down menus comes here */}
                                {/* EXAM menu */}
                                <DropDownMenuComponent buttonId="ExamButtonId" divId="ExamDivId" menuName="Exams" subMenuList={examSubMenuList} routesList={examRouteList}></DropDownMenuComponent>

                                {/* Counselling Menu */}
                                <DropDownMenuComponent buttonId="CounsellingButtonId" divId="CounsellingDivId" menuName="Counselling" subMenuList={counsellingSubMenuList} routesList={counsellingRouteList}></DropDownMenuComponent>

                                {/* Mentorship Menu */}
                                <DropDownMenuComponent buttonId="MentorshipButtonId" divId="MentorshipDivId" menuName="Mentorship" subMenuList={mentorshipSubMenuList} routesList={mentorshipRouteList}></DropDownMenuComponent>
                            </div>
                        </div>


                        {/* Ask doubt button for the website */}
                        <div className="">
                            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ask Doubt</button>
                        </div>

                        {/* Login button */}
                        <div>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>

                        </div>


                    </div>
                </div>
            </nav>
        </div>
    )

}

// say everything went fine 
export default AppBarComponent