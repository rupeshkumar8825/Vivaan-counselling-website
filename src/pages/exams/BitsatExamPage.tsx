import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { useNavigate } from "react-router-dom"
import { BitSatContentList, BitSatExamPageButtonCodesList, BitSatExamPageButtonWidthList, BitSatExamRoutesList, BitSatExamsButtonNameList, BitSatExamSubMenuList, BitSatHeadingIdList, BitSatHeadingList, BitSatImageList, BitSatTableOfContentList, BitSatVideoCardTitleList, BitSatVideoCardUrlList } from "../../constants/exam/BitSatExamPageConstants"


// this component for the jee advance exam page 
// do note that this is same as that of the jee main exam page
const BitSatExamPage = () => {
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
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="BitSatOverviewButtonId" dropDowndivId="BitSatOverviewDivId" dropDownSubMenuList={BitSatExamSubMenuList} dropDownRoutesList={BitSatExamRoutesList} buttonNameList={BitSatExamsButtonNameList} buttonWidthList={BitSatExamPageButtonWidthList} buttonCodeList={BitSatExamPageButtonCodesList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="BITSAT"></HeadingComponent>
            <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10">
                {/* here we will be using the map function to render all the available video card  component */}
                {BitSatVideoCardUrlList.map((_ : string, index : number) => (
                    <VideoCard key={index} videoUrl={BitSatVideoCardUrlList[index]} title={BitSatVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={BitSatHeadingIdList} headingNameList={BitSatHeadingList} tableOfContentsList={BitSatTableOfContentList} contentList={BitSatContentList} imageList={BitSatImageList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default BitSatExamPage