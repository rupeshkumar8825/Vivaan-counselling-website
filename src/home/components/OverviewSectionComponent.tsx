// this is overview section which will list the options for navigation
// This component will be used at multiple places and pages 
// hence we will be making this particular component very generic
import { useState } from "react"
import { IDropDownMenu, IOverviewComponent } from "../../interfaces/interfaces"
import ButtonForExamPageComponent from "../../pages/exams/components/ButtonForExamPageComponent"

const OverviewSectionComponent = (props : IOverviewComponent) => {
    return (
        <div className="flex justify-center items-center justify-evenly w-full sm:w-full md:w-4/5 lg:4/5">
            {/* <div className="mr-1 sm:mr-5 md:smr-2 lg:mr-2 xl:mr-2 rounded-lg mb-4 mb-0">  
                <DropDownMenuComponent buttonId="overview" menuName="Overview" divId="overviewDiv" subMenuList={JeeMainsExamSubMenuList} routesList={JeeMainsExamRoutesList}></DropDownMenuComponent>
                <DropDownMenuNew menuName={props.dropDownMenuName} divId={props.dropDowndivId} buttonId={props.dropDownButtonId} subMenuList={props.dropDownSubMenuList} routesList={props.dropDownRoutesList}></DropDownMenuNew>
            </div> */}

            {/* using the map function to map all the buttons properly  */}
            <div className="flex flex-nowrap overflow-x-auto space-x-4">
                {props.buttonNameList.map((_ : string, index : number) => (
                    <ButtonForExamPageComponent key={index} OnButtonClickHandlerExamPage={props.buttonGenericClickHandler} buttonName={props.buttonNameList[index]} buttonWidthInRem={props.buttonWidthList[index]} buttonCode={props.buttonCodeList[index]}></ButtonForExamPageComponent>
                ))}

            </div>
            {/* <ButtonComponent onButtonComponentClickHandler={handleJeeMainClickHandler} buttonName="Jee Mains" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleBitSatClickHandler} buttonName="BITSAT" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleWebJeeClickHandler} buttonName="WEBJEE" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleMhtCetClickHandler} buttonName="MHTCET" buttonWidthInRem="36"></ButtonComponent> */}
        </div>
    )
}



// here is the demo dropdown menu component for trial purpose. 
// if this works properly then we will be using and shifting this dropdown menu itself
export const DropDownMenuNew = (props : IDropDownMenu) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // const showDropdown = () => {
    //     setIsOpen(true);
    // }

    // const hideDropdown = () => {    
    //     setIsOpen(false);
    // }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="relative inline-block z-60 w-[50%]">
            <button
                id={props.buttonId}
                onClick={toggleDropdown}
                // onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
                // onMouse={showDropdown}
                // onMouseOut={hideDropdown}

                // className="inline-flex justify-center  w-full rounded-md  bg-blue-forComponentBg hover:bg-blue-800 shadow-sm px-1.5 py-1 sm:px-1.5 md:px-2 lg:px-3 xl:px-4 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 bg-blue text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
                // className="text-white bg-blue-forComponentBg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5  sm:px-2 md:px-3 lg:px-4 xl:px-5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5  text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                className="text-white bg-blue-forComponentBg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5  sm:px-2 md:px-3 lg:px-4 xl:px-5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5  text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {/* <div className="flex justify-center items-center"> */}
                    {/* <p> */}
                        {props.menuName}
                    {/* </p> */}
                    <div>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>

                </div>
            </button>

            {isOpen && (
                <div id={props.divId} className="origin-top-right absolute right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {/* using the for loop here for this purpose */}
                        {props.subMenuList.map((currSubDropDownName : string, index : number) => (
                            <a
                                key={index}
                                href={props.routesList[index]}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                {currSubDropDownName}
                            </a>

                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// say everything went fine 
export default OverviewSectionComponent