import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { useNavigate } from "react-router-dom"
import { JeeAdvanceContentList, JeeAdvanceExamPageButtonCodesList, JeeAdvanceExamPageButtonWidthList, JeeAdvanceExamRoutesList, JeeAdvanceExamsButtonNameList, JeeAdvanceExamSubMenuList, JeeAdvanceHeadingIdList, JeeAdvanceHeadingList, JeeAdvanceImageList, JeeAdvanceTableOfContentList, JeeAdvanceVideoCardTitleList, JeeAdvanceVideoCardUrlList } from "../../constants/exam/JeeAdvanceExamPageConstants"


// this component for the jee advance exam page 
// do note that this is same as that of the jee main exam page
const JeeAdvancedExamPage = () => {
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
            <div className="mt-10 flex items-center justify-center">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="JeeAdvanceOverviewButtonId" dropDowndivId="JeeAdvanceOverviewDivId" dropDownSubMenuList={JeeAdvanceExamSubMenuList} dropDownRoutesList={JeeAdvanceExamRoutesList} buttonNameList={JeeAdvanceExamsButtonNameList} buttonWidthList={JeeAdvanceExamPageButtonWidthList} buttonCodeList={JeeAdvanceExamPageButtonCodesList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="Jee Advance"></HeadingComponent>
            <div className="flex  flex-col justify-around items-center md:flex-row  mt-10 w-full">
                {/* here we will be using the map function to render all the available video card  component */}
                {JeeAdvanceVideoCardTitleList.map((_ : string, index : number) => (
                    <div className="mb-10">
                        <VideoCard key={index} videoUrl={JeeAdvanceVideoCardUrlList[index]} title={JeeAdvanceVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card." videoCardWidth="64"></VideoCard>

                    </div>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={JeeAdvanceHeadingIdList} headingNameList={JeeAdvanceHeadingList} tableOfContentsList={JeeAdvanceTableOfContentList} contentList={JeeAdvanceContentList} imageList={JeeAdvanceImageList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default JeeAdvancedExamPage