import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { JeeMainContentList, JeeMainExamPageButtonCodesList, JeeMainExamsButtonNameList, JeeMainHeadingIdList, JeeMainsExamRoutesList, JeeMainsExamSubMenuList, JeeMainsHeadingList, JeeMainTableOfContentList, JeeMainVideoCardTitleList, JeeMainVideoCardUrlList } from "../../constants/JeeMainsExamPageConstants"
import { useNavigate } from "react-router-dom"
import { JosaaCounsellingPageButtonCodeList, JosaaCounsellingPageButtonNameList, JosaaCounsellingPageButtonWidthList, JosaaCounsellingPageContentList, JosaaCounsellingPageHeadingIdList, JosaaCounsellingPageHeadingList, JosaaCounsellingPageRoutesList, JosaaCounsellingPageSubMenuList, JosaaCounsellingPageTableOfContentList, JosaaCounsellingPageVideoCardTitleList, JosaaCounsellingPageVideoCardUrlList } from "../../constants/JosaaCounsellingPageConstants"

const JosaaCounsellingPage = () => {
    const navigate = useNavigate()

    // this function is generic click hander for the jee main exam page's overview section
    // same function will be implemented for the other exam pages like the jee advance, bitsat, wbjee and so on
    // hence this function is made generic to handle the click handlers present in a particular exam page
    const OnOverviewSectionButtonClickHandlerGeneric = (buttonCode : string) => {
        // we have to know on which button the user has clicked 
        // and then we will be to decide where to redirect the user
        // can we pass some of the identifiers to identify this
        // let us have a code generic code to distinguish between the buttons 
        // using the if else statement for this purpose
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
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="JeeMainOverviewButtonId" dropDowndivId="JeeMainOverviewDivId" dropDownSubMenuList={JosaaCounsellingPageSubMenuList} dropDownRoutesList={JosaaCounsellingPageRoutesList} buttonNameList={JosaaCounsellingPageButtonNameList} buttonWidthList={JosaaCounsellingPageButtonWidthList} buttonCodeList={JosaaCounsellingPageButtonCodeList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="Josaa Counselling"></HeadingComponent>
            <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10">
                {/* here we will be using the map function to render all the available video card  component */}
                {JosaaCounsellingPageVideoCardUrlList.map((_ : string, index : number) => (
                    <VideoCard key={index} videoUrl={JosaaCounsellingPageVideoCardUrlList[index]} title={JosaaCounsellingPageVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={JosaaCounsellingPageHeadingIdList} headingNameList={JosaaCounsellingPageHeadingList} tableOfContentsList={JosaaCounsellingPageTableOfContentList} contentList={JosaaCounsellingPageContentList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default JosaaCounsellingPage