// this component will store the introduction about the colleges
// ideally this is the component which should be used for all the colleges 
// hence our goal should be to make it as generic as possible 

import { ICollegeIntroCardComponent } from "../../../interfaces/interfaces"

const CollegeIntroCardComponent = (props : ICollegeIntroCardComponent) => {
    return (
        <div className="max-w-sm p-6 bg-forComponentBg border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 mt-10">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-slate-300">{props.contentDescription}</p>
            {/* here according to the client's requirement we want to show the logo here instead of descriptoion of the colleges for this purpose */}
            <a href={props.redirectRoute} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>

    )
}

// say everything went fine 
export default CollegeIntroCardComponent