import { IButtonComponent } from "../interfaces/interfaces"

// this is for button component 
const ButtonComponent = (props: IButtonComponent) => {
    return (
        <div>
            <button onClick={props.onButtonComponentClickHandler ? props.onButtonComponentClickHandler : undefined} type="button" className={`focus:ring-4 focus:ring-gray-100 font-medium rounded-lg w-${props.buttonWidthInRem} text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-2 border-slate-800 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700`}>{props.buttonName}</button>
        </div>
    )

}

export default ButtonComponent 