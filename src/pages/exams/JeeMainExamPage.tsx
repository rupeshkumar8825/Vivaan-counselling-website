import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { JeeMainContentList, JeeMainExamPageButtonCodesList, JeeMainExamPageButtonWidthList, JeeMainExamsButtonNameList, JeeMainHeadingIdList, JeeMainImageList, JeeMainsExamRoutesList, JeeMainsExamSubMenuList, JeeMainsHeadingList, JeeMainTableOfContentList, JeeMainVideoCardTitleList, JeeMainVideoCardUrlList } from "../../constants/exam/JeeMainsExamPageConstants"
import { useNavigate } from "react-router-dom"
import TopBanner from "../../home/components/TopBanner"

const JeeMainExamPage = () => {
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
        <div className="text-white w-full">
            {/* Client requested to add the banner on the website will have to cross check with the client */}
            <TopBanner></TopBanner>
            <div className="mt-10 flex items-center justify-center ">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="JeeMainOverviewButtonId" dropDowndivId="JeeMainOverviewDivId" dropDownSubMenuList={JeeMainsExamSubMenuList} dropDownRoutesList={JeeMainsExamRoutesList} buttonNameList={JeeMainExamsButtonNameList} buttonWidthList={JeeMainExamPageButtonWidthList} buttonCodeList={JeeMainExamPageButtonCodesList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates on" headingSpanName="Jee Main 2025"></HeadingComponent>
            <div className="flex  flex-col justify-around items-center md:flex-row    mt-10 w-full">
                {/* here we will be using the map function to render all the available video card  component */}
                {JeeMainVideoCardTitleList.map((_ : string, index : number) => (
                    <div className="mb-10">
                        <VideoCard key={index} videoUrl={JeeMainVideoCardUrlList[index]} title={JeeMainVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card." videoCardWidth="72"></VideoCard>
                    </div>
                        
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={JeeMainHeadingIdList} headingNameList={JeeMainsHeadingList} tableOfContentsList={JeeMainTableOfContentList} contentList={JeeMainContentList} imageList={JeeMainImageList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default JeeMainExamPage