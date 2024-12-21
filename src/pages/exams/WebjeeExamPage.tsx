import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { useNavigate } from "react-router-dom"
import { WbJeeContentList, WbJeeExamPageButtonCodesList, WbJeeExamPageButtonWidthList, WBJeeExamRoutesList, WBJeeExamsButtonNameList, WBJeeExamSubMenuList, WbJeeHeadingIdList, WbJeeHeadingList, WbJeeImageList, WbJeeTableOfContentList, WbJeeVideoCardTitleList, WbJEEVideoCardUrlList } from "../../constants/exam/WbJeeExamPageConstants"


// this component for the jee advance exam page 
// do note that this is same as that of the jee main exam page
const WebJeeExamPage = () => {
    const navigate = useNavigate()

    // this function is generic click hander for the jee main exam page's overview section
    // same function will be implemented for the other exam pages like the jee advance, bitsat, wbjee and so on
    // hence this function is made generic to handle the click handlers present in a particular exam page
    const OnOverviewSectionButtonClickHandlerGeneric = (buttonCode : string) => {
        if (buttonCode === "1") 
        {
            navigate("/exam/jeeadvance")
        }
        else if(buttonCode === "2")
        {
            navigate("/exam/jeemains")
        }
        else if (buttonCode === "3")
        {
            navigate("/exam/bitsat")
        }
        else if (buttonCode === "4")
        {
            navigate("/exam/wbjee")
        }
        else if (buttonCode === "5")
        {
            navigate("/exam/mhtcet")
        }
    }

    return (
        <div className="text-white  mt-10 w-full">
            <div className="flex items-center justify-center">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="WbJeeOverviewButtonId" dropDowndivId="WbJeeOverviewDivId" dropDownSubMenuList={WBJeeExamSubMenuList} dropDownRoutesList={WBJeeExamRoutesList} buttonNameList={WBJeeExamsButtonNameList} buttonWidthList={WbJeeExamPageButtonWidthList} buttonCodeList={WbJeeExamPageButtonCodesList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="WBJEE"></HeadingComponent>
            <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10">
                {/* here we will be using the map function to render all the available video card  component */}
                {WbJEEVideoCardUrlList.map((_ : string, index : number) => (
                    <VideoCard key={index} videoUrl={WbJEEVideoCardUrlList[index]} title={WbJeeVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={WbJeeHeadingIdList} headingNameList={WbJeeHeadingList} tableOfContentsList={WbJeeTableOfContentList} contentList={WbJeeContentList} imageList={WbJeeImageList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default WebJeeExamPage