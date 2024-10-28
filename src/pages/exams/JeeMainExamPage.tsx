import HeadingComponent from "../../components/HeadingComponent"
import OverviewSectionComponent from "../../home/components/OverviewSectionComponent"
import VideoCard from "../../components/VideoCardComponent"
import BlogHeadingComponent from "../../components/blog/BlogHeadingComponent"
import BlogComponent from "../../components/blog/BlogComponent"

const JeeMainExamPage = () => {
    return (
        <div className="text-white  mt-10 w-full">
            <div className="flex items-center justify-center">
                <OverviewSectionComponent></OverviewSectionComponent>
            </div>
            <HeadingComponent headingName="Latest Updates" headingSpanName="Jee Mains"></HeadingComponent>
            <div className="flex justify-center items-center justify-evenly mt-10 w-full p-10">
                <VideoCard videoUrl="https://www.youtube.com/embed/CHmaw6Vu4_I" title="First update" content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>

                <VideoCard videoUrl="https://www.youtube.com/embed/CHmaw6Vu4_I" title="First update" content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
                <VideoCard videoUrl="https://www.youtube.com/embed/CHmaw6Vu4_I" title="First update" content="An example of a YouTube video embedded in a Tailwind CSS card."></VideoCard>
            </div>
            <div className="border-2 border-white">
                {/* <BlogHeadingComponent headingName="JEE MAINS EXAM"></BlogHeadingComponent> */}
                <BlogComponent></BlogComponent>

            </div>
        </div>
    )
}

// say everything went fine 
export default JeeMainExamPage