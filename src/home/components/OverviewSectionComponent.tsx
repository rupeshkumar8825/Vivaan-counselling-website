// this is overview section which will list the options for navigation
// This component will be used at multiple places and pages 
// hence we will be making this particular component very generic
import { useNavigate } from "react-router-dom"
import ButtonComponent from "../../components/ButtonComponent"
import DropDownMenuComponent from "../../components/DropDownMenuComponent"
import { JeeMainsExamRoutesList, JeeMainsExamSubMenuList } from "../../constants/JeeMainsExamPageConstants"

const OverviewSectionComponent = () => {
    const navigate = useNavigate()
    // defining the click handlers for the different buttons for this purpose
    const handleJeeAdvanceClickHandler = () => {
        navigate("/jee")
    } 

    const handleJeeMainClickHandler = () => {

    }

    const handleBitSatClickHandler = () => {

    }

    const handleWebJeeClickHandler = () => {
        
    }

    const handleMhtCetClickHandler = () => {

    }

    return (
        <div className="flex justify-center flex-wrap items-center justify-evenly w-3/4">
            <div className="border-2 border-white rounded-lg">
                <DropDownMenuComponent buttonId="overview" menuName="Overview" divId="overviewDiv" subMenuList={JeeMainsExamSubMenuList} routesList={JeeMainsExamRoutesList}></DropDownMenuComponent>
            </div>
            <ButtonComponent onButtonComponentClickHandler={handleJeeAdvanceClickHandler} buttonName="Jee Advance" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleJeeMainClickHandler} buttonName="Jee Mains" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleBitSatClickHandler} buttonName="BITSAT" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleWebJeeClickHandler} buttonName="WEBJEE" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent onButtonComponentClickHandler={handleMhtCetClickHandler} buttonName="MHTCET" buttonWidthInRem="36"></ButtonComponent>
        </div>
    )
}



// say everything went fine 
export default OverviewSectionComponent