import HeadingComponent from "../components/HeadingComponent"
import JeeMainCarouselComponent from "./components/JeeMainCarouselComponent"
import JeeAdvanceCarouselComponent from "./components/JeeAdvanceCarouselComponent"
import AdmissionAndCouncellingComponent from "./components/AdmissionAndCouncellingComponent"
import CollegeReviewCutoffComponent from "./components/CollegeReviewCutoffComponent"
import TestimonialComponent from "./components/TestimonialComponent"
import { useEffect } from "react"
import TopBanner from "./components/TopBanner"


// import personalizedChoiceFilling from "path/to/image1";
// import dailyGoogleMeet from "path/to/image2";
// import callSupport from "path/to/image3";
// import whatsAppGroupChat from "path/to/image4";
// import dailyDoubtSolvingSession from "path/to/image5";
// import completeGuidanceTillAdmission from "path/to/image6";


import personalizedChoiceFilling from "../assets/images/second.svg"
import dailyGoogleMeet from "../assets/images/third.svg"
import whatsAppGroupChat from "../assets/images/fourth.svg"
import dailyDoubtSolvingSession from "../assets/images/fifth.svg"
import completeGuidanceTillAdmission from "../assets/images/sixth.svg"
import callSupport from "../assets/images/first.svg"
// import BannerComponent from "./BannerComponent";
import CarouselComponent from "./components/CouncellingCarouselComponent"
import BannerComponent from "../components/BannerComponent"
import BannerVideoComponent from "../components/BannerVideoComponent"

const banners = [
  {
    BannerComponent: BannerComponent,
    bannerText1: "Personalised Choice Filling Pdf",
    bannerText2: "According to your rank",
    bannerImage: personalizedChoiceFilling,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  },
  {
    BannerComponent: BannerComponent,
    bannerText1: "Daily Google Meet",
    bannerText2: "For Doubt Session",
    bannerImage: dailyGoogleMeet,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  },
{
    BannerComponent: BannerComponent,
    bannerText1: "Call Support",
    bannerText2: "Ask Unlimited Queries",
    bannerImage: callSupport,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  },
  {
    BannerComponent: BannerComponent,
    bannerText1: "Message Support",
    bannerText2: "Through Dedicated Whatsapp Group",
    bannerImage: whatsAppGroupChat,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  },
  {
    BannerComponent: BannerComponent,
    bannerText1: "Daily Doubt Solving Session",
    bannerText2: "Clear Your Doubts",
    bannerImage: dailyDoubtSolvingSession,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  },
  {
    BannerComponent: BannerComponent,
    bannerText1: "Complete Guidance",
    bannerText2: "Till Admission",
    bannerImage: completeGuidanceTillAdmission,
    bannerButtonWidth: "44",
    bannerButtonName: "Get Counselling",
    bannerButttonEventHandler: () => alert("Get Counselling!"),
  }
  // Add other banners similarly
];


const JEEmainCarouselSeeMoreButtonHandler = () => {
            window.location.href = "https://www.youtube.com/watch?v=had2p1dC42M"
            return
}

const JeeMainBanners = [
    {
        BannerComponent : BannerVideoComponent, 
        bannerText1: "Complete Guidance",
        bannerText2: "Till Admission",
        bannerImage: "https://www.youtube.com/embed/had2p1dC42M",
        bannerButtonWidth: "44",
        bannerButtonName: "See More",
        seeMoreEventHandler: () => JEEmainCarouselSeeMoreButtonHandler()
    }
]

const JeeAdvanceCarouselSeeMoreButtonHandler = () => {
    window.location.href = "https://www.youtube.com/embed/AJX1ZQaPiTg"
    return
}

const JeeAdvanceBanners = [
    {
        BannerComponent : BannerVideoComponent, 
        bannerText1: "NTA Update",
        bannerText2: "Category Certificate Issue Authority In Jee Main 2025",
        bannerImage: "https://www.youtube.com/embed/AJX1ZQaPiTg",
        bannerButtonWidth: "44",
        bannerButtonName: "See More",
        seeMoreEventHandler: () => JeeAdvanceCarouselSeeMoreButtonHandler()
    }
]

// export default function App() {
//   return <CarouselComponent banners={banners} />;
// }


const HomePage = () => {
    console.log("the page has rendered")

    useEffect(() => {
        console.log("inside home page useeffect. The component has redenred this means")
    }) 
    
    return (
        <div className="">
            <TopBanner/>

            <HeadingComponent headingName="Councelling Help" headingSpanName="Desk"></HeadingComponent>
            {/* <CouncellingCarouselComponent></CouncellingCarouselComponent> */}
            <CarouselComponent banners={banners} autoPlay={true} autoPlayInterval={3000} />

            <HeadingComponent headingName="JEE Main Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeMainCarouselComponent banners={JeeMainBanners} autoPlay={true} autoPlayInterval={3000}></JeeMainCarouselComponent>

            <HeadingComponent headingName="JEE Advanced  Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeAdvanceCarouselComponent banners={JeeAdvanceBanners} autoPlay={true} autoPlayInterval={3000}></JeeAdvanceCarouselComponent>
            

            <HeadingComponent headingName="Counselling Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeAdvanceCarouselComponent banners={JeeAdvanceBanners} autoPlay={true} autoPlayInterval={3000}></JeeAdvanceCarouselComponent>

            <AdmissionAndCouncellingComponent></AdmissionAndCouncellingComponent>
            <CollegeReviewCutoffComponent></CollegeReviewCutoffComponent>
            <TestimonialComponent></TestimonialComponent>
        </div>
    )
}

// say everything went fine 
export default HomePage