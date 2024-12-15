import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogComponent from "../../components/blog/BlogComponent"
import { useNavigate } from "react-router-dom"
import { CsabCounsellingPageButtonCodeList, CsabCounsellingPageButtonNameList, CsabCounsellingPageButtonWidthList, CsabCounsellingPageContentList, CsabCounsellingPageHeadingIdList, CsabCounsellingPageHeadingList, CsabCounsellingPageImageList, CsabCounsellingPageRoutesList, CsabCounsellingPageSubMenuList, CsabCounsellingPageTableOfContentList, CsabCounsellingPageVideoCardTitleList, CsabCounsellingPageVideoCardUrlList } from "../../constants/councelling/CsabCouncellingPageConstants"

const CsabCounsellingPage = () => {
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
        <div className="text-white  mt-10 w-full">
            <div className="flex items-center justify-center">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="CsabOverviewButtonId" dropDowndivId="CsabOverviewDivId" dropDownSubMenuList={CsabCounsellingPageSubMenuList} dropDownRoutesList={CsabCounsellingPageRoutesList} buttonNameList={CsabCounsellingPageButtonNameList} buttonWidthList={CsabCounsellingPageButtonWidthList} buttonCodeList={CsabCounsellingPageButtonCodeList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="Csab Counselling"></HeadingComponent>
            <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10">
                {/* here we will be using the map function to render all the available video card  component */}
                {CsabCounsellingPageVideoCardUrlList.map((_ : string, index : number) => (
                    <VideoCard key={index} videoUrl={CsabCounsellingPageVideoCardUrlList[index]} title={CsabCounsellingPageVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
                ))}
            </div>
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={CsabCounsellingPageHeadingIdList} headingNameList={CsabCounsellingPageHeadingList} tableOfContentsList={CsabCounsellingPageTableOfContentList} contentList={CsabCounsellingPageContentList} imageList={CsabCounsellingPageImageList}></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default CsabCounsellingPage