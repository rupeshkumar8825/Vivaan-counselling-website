import { Link } from "react-router-dom"
import { IDropDownMenu } from "../interfaces/interfaces"

const DropDownMenuComponent = (props: IDropDownMenu) => {
    return (
        <div>

            {/* Code for menu button */}
            <button id={props.buttonId} data-dropdown-toggle={props.divId} data-dropdown-trigger="hover" className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{props.menuName} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            {/* Code  for the dropdown for that particular menu */}
            <div id={props.divId} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    {/* using the for loop here to show all the submenus here */}
                    {props.subMenuList.map((_ : string, index : number) => (
                        <li key={index}>
                            <a href={props.routesList[index]} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{props.subMenuList[index]}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}


// say everything went fine 
export default DropDownMenuComponent