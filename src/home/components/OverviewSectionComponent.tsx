// this is overview section which will list the options for navigation
// This component will be used at multiple places and pages 
// hence we will be making this particular component very generic
import { useNavigate } from "react-router-dom"
import ButtonComponent from "../../components/ButtonComponent"
import { JeeMainsExamRoutesList, JeeMainsExamSubMenuList } from "../../constants/JeeMainsExamPageConstants"
import { useState } from "react"
import { IDropDownMenu } from "../../interfaces/interfaces"

const OverviewSectionComponent = () => {
    const navigate = useNavigate()
    // defining the click handlers for the different buttons for this purpose
    const handleJeeAdvanceClickHandler = () => {
        navigate("/exam/jeeadvance")
    }

    const handleJeeMainClickHandler = () => {
        navigate("/exam/jeemains")
    }

    const handleBitSatClickHandler = () => {
        navigate("/exam/bitsat")
    }

    const handleWebJeeClickHandler = () => {
        navigate("/exam/wbjee")
    }

    const handleMhtCetClickHandler = () => {
        navigate("/exam/mhtcet")
    }

    return (
        <div className="flex justify-center flex-wrap items-center justify-evenly w-3/4">
            <div className="border-2 border-white rounded-lg">
                {/* <DropDownMenuComponent buttonId="overview" menuName="Overview" divId="overviewDiv" subMenuList={JeeMainsExamSubMenuList} routesList={JeeMainsExamRoutesList}></DropDownMenuComponent> */}
                <DropDownMenuNew menuName="Overview" divId="overviewDivId" buttonId="overviewButttonId" subMenuList={JeeMainsExamSubMenuList} routesList={JeeMainsExamRoutesList}></DropDownMenuNew>
            </div>
            <ButtonComponent onButtonComponentClickHandler={handleJeeAdvanceClickHandler} buttonName="Jee Advance" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleJeeMainClickHandler} buttonName="Jee Mains" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleBitSatClickHandler} buttonName="BITSAT" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleWebJeeClickHandler} buttonName="WEBJEE" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleMhtCetClickHandler} buttonName="MHTCET" buttonWidthInRem="36"></ButtonComponent>
        </div>
    )
}



// here is the demo dropdown menu component for trial purpose. 
// if this works properly then we will be using and shifting this dropdown menu itself
const DropDownMenuNew = (props : IDropDownMenu) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        // this is the handler for toggling the dropdown menu
        // toggle the isopen flag 
        setIsOpen(!isOpen);
    }
    return (
        <div className="relative inline-block text-left">
            <button
                id={props.buttonId}
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue text-sm font-medium text-white hover:bg-gray-50 focus:outline-none"
            >
                <div className="flex justify-center items-center">
                    <p>
                        {props.menuName}
                    </p>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>

                </div>
            </button>

            {isOpen && (
                <div id={props.divId} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {/* using the for loop here for this purpose */}
                        {props.subMenuList.map((currSubDropDownName : string, index : number) => (
                            <a
                                href={props.routesList[index]}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                {currSubDropDownName}
                            </a>

                        ))}
                        {/* <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Option 2
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Option 3
                        </a> */}
                    </div>
                </div>
            )}
        </div>
    )
}

// say everything went fine 
export default OverviewSectionComponent