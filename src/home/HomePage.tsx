import CouncellingCarouselComponent from "./components/CouncellingCarouselComponent"
import HeadingComponent from "../components/HeadingComponent"
import JeeMainCarouselComponent from "./components/JeeMainCarouselComponent"
import JeeAdvanceCarouselComponent from "./components/JeeAdvanceCarouselComponent"

const HomePage = () => {
    return (
        <div>
            <HeadingComponent headingName="Councelling Help" headingSpanName="Desk"></HeadingComponent>
            <CouncellingCarouselComponent></CouncellingCarouselComponent>

            <HeadingComponent headingName="Jee Main Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeMainCarouselComponent></JeeMainCarouselComponent>

            <HeadingComponent headingName="Jee Advance Latest Update" headingSpanName="2025"></HeadingComponent>
            <JeeAdvanceCarouselComponent></JeeAdvanceCarouselComponent>
        </div>
    )
}

// say everything went fine 
export default HomePage