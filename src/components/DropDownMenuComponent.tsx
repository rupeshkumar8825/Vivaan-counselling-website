import { IDropDownMenu } from "../interfaces/interfaces"

const DropDownMenuComponent = (props: IDropDownMenu) => {
    return (
        <div className="w-[50%]   z-100">

            {/* Code for menu button */}
            <button id={props.buttonId} data-dropdown-toggle={props.divId} data-dropdown-trigger="hover" className="text-white bg-blue-forComponentBg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5  sm:px-2 md:px-3 lg:px-4 xl:px-5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5  text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{props.menuName} 
                <div>
                    <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>
            </button>

            {/* Code  for the dropdown for that particular menu */}
            <div id={props.divId} className="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    {/* using the for loop here to show all the submenus here */}
                    {props.subMenuList.map((_ : string, index : number) => (
                        <li key={index}>
                            <a href={props.routesList[index]} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">{props.subMenuList[index]}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}


// say everything went fine 
export default DropDownMenuComponent