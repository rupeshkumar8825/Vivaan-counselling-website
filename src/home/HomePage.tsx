import CouncellingCarouselComponent from "./components/CouncellingCarouselComponent"
import HeadingComponent from "../components/HeadingComponent"
import JeeMainCarouselComponent from "./components/JeeMainCarouselComponent"
import JeeAdvanceCarouselComponent from "./components/JeeAdvanceCarouselComponent"
import AdmissionAndCouncellingComponent from "./components/AdmissionAndCouncellingComponent"
import CollegeReviewCutoffComponent from "./components/CollegeReviewCutoffComponent"
import TestimonialComponent from "./components/TestimonialComponent"
import { useEffect } from "react"
import TopBanner from "./components/TopBanner"

const HomePage = () => {
    console.log("the page has rendered")

    useEffect(() => {
        console.log("inside home page useeffect. The component has redenred this means")
    }) 
    
    return (
        <div className="">
            <TopBanner/>

            <HeadingComponent headingName="Councelling Help" headingSpanName="Desk"></HeadingComponent>
            <CouncellingCarouselComponent></CouncellingCarouselComponent>

            <HeadingComponent headingName="JEE Main Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeMainCarouselComponent></JeeMainCarouselComponent>

            <HeadingComponent headingName="JEE Advanced  Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeAdvanceCarouselComponent></JeeAdvanceCarouselComponent>
            

            <HeadingComponent headingName="Counselling Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeAdvanceCarouselComponent></JeeAdvanceCarouselComponent>

            <AdmissionAndCouncellingComponent></AdmissionAndCouncellingComponent>
            <CollegeReviewCutoffComponent></CollegeReviewCutoffComponent>
            <TestimonialComponent></TestimonialComponent>
        </div>
    )
}

// say everything went fine 
export default HomePage