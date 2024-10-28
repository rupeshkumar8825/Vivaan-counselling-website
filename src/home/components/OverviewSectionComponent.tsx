// this is overview section which will list the options for navigation
// This component will be used at multiple places and pages 
// hence we will be making this particular component very generic
import ButtonComponent from "../../components/ButtonComponent"
import DropDownMenuComponent from "../../components/DropDownMenuComponent"
import { JeeMainsExamRoutesList, JeeMainsExamSubMenuList } from "../../constants/JeeMainsExamPageConstants"

const OverviewSectionComponent = () => {
    return (
        <div className="flex justify-center flex-wrap items-center justify-evenly border-2 border-red-500">
            <div className="border-2 border-white rounded-lg">
                <DropDownMenuComponent buttonId="overview" menuName="Overview" divId="overviewDiv" subMenuList={JeeMainsExamSubMenuList} routesList={JeeMainsExamRoutesList}></DropDownMenuComponent>
            </div>
            <ButtonComponent buttonName="Jee Advance" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent buttonName="Jee Advance" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent buttonName="BITSAT" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent buttonName="WEBJEE" buttonWidthInRem="36"></ButtonComponent>
            <ButtonComponent buttonName="MHTCET" buttonWidthInRem="36"></ButtonComponent>
        </div>
    )
}



// say everything went fine 
export default OverviewSectionComponent