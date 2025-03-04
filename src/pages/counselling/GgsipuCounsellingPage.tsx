import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { useNavigate } from "react-router-dom"
import { GGSIPUCounsellingPageButtonCodeList, GGSIPUCounsellingPageButtonNameList, GGSIPUCounsellingPageButtonWidthList, GGSIPUCounsellingPageContentList, GGSIPUCounsellingPageHeadingIdList, GGSIPUCounsellingPageHeadingList, GGSIPUCounsellingPageRoutesList, GGSIPUCounsellingPageSubMenuList, GGSIPUCounsellingPageTableOfContentList, GGSIPUCounsellingPageVideoCardTitleList, GGSIPUCounsellingPageVideoCardUrlList } from "../../constants/councelling/GGSIPUCounsellingPageConstants"
import TopBanner from "../../home/components/TopBanner"


// component for the GGSIPU councelling page for this purpose
const GGSIPUCounsellingPage = () => {
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
            navigate("/counselling/josaa")
        }
        else if(buttonCode === "2")
        {
            navigate("/counselling/csab")
        }
        else if (buttonCode === "3")
        {
            navigate("/counselling/jacdelhi")
        }
        else if (buttonCode === "4")
        {
            navigate("/counselling/wbjee")
        }
        else if (buttonCode === "5")
        {
            navigate("/counselling/uptu")
        }
        else if (buttonCode === "6")
        {
            navigate("/counselling/ggsipu")
        }
        else if (buttonCode === "7")
        {
            navigate("/counselling/comedk")
        }
    }

    return (
        <div className="text-white  w-full">
            <TopBanner></TopBanner>
            <div className="flex items-center justify-center">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="GGSIPUOverviewButtonId" dropDowndivId="GGSIPUOverviewDivId" dropDownSubMenuList={GGSIPUCounsellingPageSubMenuList} dropDownRoutesList={GGSIPUCounsellingPageRoutesList} buttonNameList={GGSIPUCounsellingPageButtonNameList} buttonWidthList={GGSIPUCounsellingPageButtonWidthList} buttonCodeList={GGSIPUCounsellingPageButtonCodeList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="GGSIPU Counselling"></HeadingComponent>
            <div className="flex  flex-col justify-around items-center md:flex-row  mt-10 w-full">
                {/* here we will be using the map function to render all the available video card  component */}
                {GGSIPUCounsellingPageVideoCardUrlList.map((_ : string, index : number) => (
                    <div className="mb-10">
                        <VideoCard key={index} videoUrl={GGSIPUCounsellingPageVideoCardUrlList[index]} title={GGSIPUCounsellingPageVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card." videoCardWidth="64"></VideoCard>

                    </div>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={GGSIPUCounsellingPageHeadingIdList} headingNameList={GGSIPUCounsellingPageHeadingList} tableOfContentsList={GGSIPUCounsellingPageTableOfContentList} contentList={GGSIPUCounsellingPageContentList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default GGSIPUCounsellingPage