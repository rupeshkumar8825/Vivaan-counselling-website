import { IButtonComponent } from "../interfaces/interfaces"

// this is for button component 
const ButtonComponent = (props: IButtonComponent) => {
    return (
        <div>
            <button onClick={props.onButtonComponentClickHandler ? props.onButtonComponentClickHandler : undefined} type="button" className={`focus:ring-4 focus:ring-gray-100 font-medium rounded-lg w-28 sm:w-32 md:w-36 lg:w-${props.buttonWidthInRem} text-xs sm:text-xs md:text-sm lg:text-sm px-1 py-1.5 sm:px-1 md:px-2 sm:py-1.5 md:py-2.5 me-2 mb-2 bg-gray-800 text-white border-2 border-slate-800 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700`}>{props.buttonName}</button>
        </div>
    )

}

export default ButtonComponent 