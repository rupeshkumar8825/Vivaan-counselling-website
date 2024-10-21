import { useState } from "react"

const AppBar = () => {
    //states of the application comes here
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // defining the handlers for the navbars
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <nav className="bg-blue text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                            {/* You can replace this with your own SVG icon or an <img> tag */}
                            <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-4H4m12-8h4" />
                            </svg>
                        </div>

                        {/* Menu Items */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-white">
                                <a href="#" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Exam</a>
                                <a href="#" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Counselling</a>
                                <a href="#" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Mentorship</a>
                            </div>
                        </div>

                        {/* section for hamburger of the navbar  */}
                        {/* Mobile Hamburger Icon */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Exam</a>
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Counselling</a>
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Mentorship</a>
                            </div>
                            </div>
                        )}

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
export default AppBar