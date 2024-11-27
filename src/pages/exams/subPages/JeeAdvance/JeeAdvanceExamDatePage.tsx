// this is the sub page exam -> jee mains 

import BlogComponent from "../../../../components/blog/BlogComponent"
import { JeeAdvanceDatesContentList, JeeAdvanceDatesHeadingIdList, JeeAdvanceDatesHeadingList, JeeAdvanceDatesTableOfContentList } from "../../../../constants/exam/JeeAdvanceExamPageConstants"

const JeeAdvanceExamDatePage = () => {
    return (
        <div className="text-white  mt-10 w-full">
            {/* <div className="flex items-center justify-center">
                <OverviewSectionComponent dropDownMenuName="Overview" dropDownButtonId="JeeMainOverviewButtonId" dropDowndivId="JeeMainOverviewDivId" dropDownSubMenuList={JeeMainsExamSubMenuList} dropDownRoutesList={JeeMainsExamRoutesList} buttonNameList={JeeMainExamsButtonNameList} buttonWidthList={JeeMainExamPageButtonWidthList} buttonCodeList={JeeMainExamPageButtonCodesList} buttonGenericClickHandler={OnOverviewSectionButtonClickHandlerGeneric}></OverviewSectionComponent>
            </div> */}
            {/* <HeadingComponent headingName="Latest Updates" headingSpanName="Jee Mains"></HeadingComponent> */}
            {/* <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10"> */}
                {/* here we will be using the map function to render all the available video card  component */}
                {/* {JeeMainVideoCardTitleList.map((_ : string, index : number) => ( */}
                    {/* <VideoCard key={index} videoUrl={JeeMainVideoCardUrlList[index]} title={JeeMainVideoCardTitleList[index]} content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard> */}
                {/* ))} */}
            {/* </div> */}
            <div className="">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent headingIdList={JeeAdvanceDatesHeadingIdList} headingNameList={JeeAdvanceDatesHeadingList} tableOfContentsList={JeeAdvanceDatesTableOfContentList} contentList={JeeAdvanceDatesContentList}></BlogComponent>

            </div>
        </div>
    )
}


// say everything went fine 
export default JeeAdvanceExamDatePage