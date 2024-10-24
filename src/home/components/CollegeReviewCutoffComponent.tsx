// defining the interface being used for this particular component itself
interface IBoxModuleComponent {
    boxText : string
}


const CollegeReviewCutoffComponent = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className=" w-4/5 text-center text-white rounded-lg shadow sm:p-8 bg-blue-forComponentBg border-gray-700">
                <h5 className="mb-10 text-3xl font-bold">College Review and Cutoff</h5>
                {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
                <div className="items-center justify-between space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <BoxModuleComponent boxText="JOSAA"></BoxModuleComponent>
                    <BoxModuleComponent boxText="CSAB"></BoxModuleComponent>
                    <BoxModuleComponent boxText="JAC"></BoxModuleComponent>
                    <BoxModuleComponent boxText="WEBJEE"></BoxModuleComponent>
                    <BoxModuleComponent boxText="text1"></BoxModuleComponent>
                    
                </div>
            </div>
        </div>
    )
}


// making the common component to be used in this component itself in order to reduce the total 
// number of code lines and make the code clearer and more readable for this purpose
const BoxModuleComponent = (props : IBoxModuleComponent) => {
    return (
        <div>
            <a href="#" className="w-full sm:w-auto hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  hover:bg-gray-600 focus:ring-gray-700">
                {/* <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg> */}
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xl">{props.boxText}</div>
                </div>
            </a>
        </div>
    )
}
export default CollegeReviewCutoffComponent