// in this component we will show the video to joint the counselling
// this acts as window pop up component where it will be shown when user clicks on the getCounselling button on home page

import EnrollCounsellingHelpDeskVideo from "../../assets//videos/enrollcounsellinghelpdeskfinalvideo.mp4"

export interface IEnrollCounsellingBannerComponent{
    buttonHandler : () => void
}

const EnrollCounsellingBannerComponent = (props : IEnrollCounsellingBannerComponent) => {
    return (
        <>
        <div className="w-[100%] h-[100%] flex items-center justify-center pt-10">
            <button
                    onClick={props.buttonHandler}
                    className=" absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            <div className="  w-[50%] h-[90%] p-4  rounded-lg shadow sm:p-6 md:p-8 bg-transparent border-gray-700 flex justify-between items-center flex-col">
                {/* <form className="space-y-6" action="#"> */}
                    <p className="text-3xl text-center text-white">Join <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Counselling</span></p>
                    {/* here we have to embed the already downloaded video in this code for this purpose */}
                    <CounsellingVideoComponent/>
                    <button type="submit" className="border-2 border-gray-500  w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-transparent  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Now</button>
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div> */}
                {/* </form> */}
            </div>
        </div>
        </>
    )

}


const CounsellingVideoComponent = () => {
    return (
        <>
        <video className="border-2 border-slate-500 bg-shadow rounded-lg " width="600" autoPlay ={true} controls>
            <source src={EnrollCounsellingHelpDeskVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        </>
    )
}


// say everything went fine 
export default EnrollCounsellingBannerComponent