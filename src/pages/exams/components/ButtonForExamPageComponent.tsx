// this is generic button component that will be mostly used in the exam pages
// and mostly these are being used in the overview section of the exam pages

import { IButtonExamPageComponent } from "../../../interfaces/interfaces"

const ButtonForExamPageComponent = (props: IButtonExamPageComponent) => {
    return (
        <div>
            <button onClick={() => props.OnButtonClickHandlerExamPage(props.buttonCode)} type="button" className={`focus:ring-4 focus:ring-gray-100 font-medium rounded-lg  w-28 sm:w-32 md:w-36 lg:w-${props.buttonWidthInRem} text-xs sm:text-xs md:text-sm lg:text-sm px-1 py-1.5 sm:px-1 md:px-2 sm:py-1.5 md:py-2.5 me-2 mb-2 text-sm me-2 mb-2 bg-gray-800 text-white border-2 border-slate-800 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700`}>{props.buttonName}</button>
        </div>
    )
}

// say everything went fine 
export default ButtonForExamPageComponent