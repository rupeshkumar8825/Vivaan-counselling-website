import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"

const JeeMainExamPage = () => {
    return (
        <div className="text-white  mt-10 w-full">
            <div className="flex items-center justify-center">
                <OverviewSectionComponent></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="Jee Mains"></HeadingComponent>
            <div className="border-2 border-white flex justify-center items-center mt-10 w-full p-10">
                <VideoCard videoUrl="https://www.youtube.com/embed/CHmaw6Vu4_I" title="First update"></VideoCard>
                {/* <VideoCard videoUrl="https://www.youtube.com/watch?v=bWoxG3Q-vr4" title="second udpate"></VideoCard>
                <VideoCard videoUrl="https://www.youtube.com/watch?v=bWoxG3Q-vr4" title="third udpate"></VideoCard>
                <VideoCard videoUrl="https://www.youtube.com/watch?v=bWoxG3Q-vr4" title="fourth update"></VideoCard> */}
            </div>
        </div>
    )
}

// say everything went fine 
export default JeeMainExamPage