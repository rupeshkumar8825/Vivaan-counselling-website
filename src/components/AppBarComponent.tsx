import { useNavigate} from "react-router-dom"
import DropDownMenuComponent from "./DropDownMenuComponent"
import { collegeRoutesList, collegeSubMenuList, counsellingRouteList, counsellingSubMenuList, examRouteList, examSubMenuList, mentorshipRouteList, mentorshipSubMenuList } from "../constants/AppBarConstants"
import appLogo from "../assets/Logo.jpg"
import whatsAppLogo from "../assets/images/WhatsAppLogo.png"
import instagramLogo from "../assets/images/instagramLogo.png"
import youtubeLogo from "../assets/images/youtubeLogo.png"
import { useState } from "react"


const AppBarComponent = () => {

    // states of the application comes here 
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const navigate = useNavigate()
    // defining the handlers for the appbar
    const handleLoginClickHandler = () => {
        console.log("the user has clicked on the login button and user wants to login to the website")
        console.log("hence redirecting the user to the appropriate webpage for  this purpose")
        navigate("/login")
    }


    return (
        <div>
            <nav className="border-b-2 border-slate-800 bg-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Icon Section */}
                        <div className="  flex justify-center items-center ">
                            {/* You can replace this with your own SVG icon or an <img> tag */}
                            <a href="/">
                                <img src={appLogo} className='w-12 h-12 mb-2 text-gray-400 group:hover:text-red-500 rounded-full' aria-hidden="true" alt="" />

                                {/* <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-4H4m12-8h4" />
                                </svg> */}
                            </a>
                            <div className="text-white text-lg flex justify-center align-center ml-5">
                                CollegeKendra.com
                            </div>
                        </div>

                        {/* Hamburger Menu Icon */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} ml-10 flex-col md:flex-row items-baseline space-y-4 md:space-y-0 md:space-x-4 text-white`}>
                            {/* <div className="ml-10 flex items-baseline space-x-4 text-white"> */}
                                {/* Drop down menus comes here */}
                                {/* here one improvement could be to use the for loop for render each  */}
                                {/* of the menus of the navbar for this purpose */}
                                {/* EXAM menu */}
                                <DropDownMenuComponent buttonId="ExamButtonId" divId="ExamDivId" menuName="Exams" subMenuList={examSubMenuList} routesList={examRouteList}></DropDownMenuComponent>

                                {/* Counselling Menu */}
                                <DropDownMenuComponent buttonId="CounsellingButtonId" divId="CounsellingDivId" menuName="Counselling" subMenuList={counsellingSubMenuList} routesList={counsellingRouteList}></DropDownMenuComponent>
                                {/* College Menu */}
                                <DropDownMenuComponent buttonId="CollegeButtonId" divId="CollegeDivId" menuName="College" subMenuList={collegeSubMenuList} routesList={collegeRoutesList}></DropDownMenuComponent>

                                {/* Mentorship Menu */}
                                <DropDownMenuComponent buttonId="MentorshipButtonId" divId="MentorshipDivId" menuName="Mentorship" subMenuList={mentorshipSubMenuList} routesList={mentorshipRouteList}></DropDownMenuComponent>
                            {/* </div> */}
                        </div>


                        {/* Ask doubt button for the website */}
                        <button className=" flex justify-around items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xs px-1 py-1.5 text-center">
                            {/* <img src="" alt="" /> */}
                            <img src={whatsAppLogo} className='w-8 h-8 text-gray-400 group:hover:text-red-500 rounded-xl' aria-hidden="true" alt="" />
                            <div className=" ml-2">+91 8986090651</div>

                            {/* <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ask Doubt</button> */}

                        </button>


                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagramLogo} className=' w-8 h-8 text-gray-400 group:hover:text-red-500 rounded-xl' aria-hidden="true" alt="Instagram Logo" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src={youtubeLogo} className='w-7 h-7 text-gray-400 group:hover:text-red-500 rounded' aria-hidden="true" alt="YouTube Logo" />
                            </a>
                        </div>

                        {/* Login button */}
                        {/* <div>
                            <button onClick={handleLoginClickHandler} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
                        </div> */}


                    </div>
                </div>
            </nav>
        </div>
    )

}

// say everything went fine 
export default AppBarComponent