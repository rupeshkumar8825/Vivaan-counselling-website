// this will be the banner component related to the video for this purpose

import { IBannerComponent, IBannerVideoComponent } from "../interfaces/interfaces"
import ButtonComponent from "./ButtonComponent"
import VideoCard from "./VideoCardComponent"

const BannerVideoComponent = (props: IBannerVideoComponent) => {
    return (
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <div className="absolute block w-full  h-full rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-evenly pl-16 pr-16">
                <div className="flex flex-col justify-evenly items-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-3xl">
                            {props.bannerText1}
                        </p>
                        <p className="text-3xl">
                            {props.bannerText2}
                        </p>
                    </div>

                    {/* button  for going to get the councelling page */}
                    <ButtonComponent buttonName={props.bannerButtonName} buttonWidthInRem={props.bannerButtonWidth} onButtonComponentClickHandler={props.seeMoreEventHandler}></ButtonComponent>
                </div>
                <div className=" flex justify-center items-center w-1/2 h-full">
                    {/* instead of using the image in the banner component we will add the youtube video here. I have the link. This requirement came from 
                    client side itself */}
                    {/* <img src={props.bannerImage} className="w-half h-3/4 rounded-xl" alt="Loading" /> */}
                    
                    {/* <VideoCard videoUrl={props.bannerImage} title="Some title comes here" content="Some content comes here" videoCardWidth="full" videoCardHeight="10"></VideoCard> */}
                    <div className={` w-[80%] flex items-center justify-center flex-col justify-evenly bg-blue-forComponentBg rounded-lg shadow-md`}>
                        <div className=" bg-blue-forComponentBg rounded-lg overflow-hidden w-full h-full">
                            <div className="relative pt-[56.25%]">
                                <iframe
                                    className="absolute inset-0 w-full h-full "
                                    src={props.bannerImage}
                                    title={"some title"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* <div className="p-4">
                                <h3 className="text-lg font-semibold"></h3>
                                <p className="text-slate-300">Some text here</p>
                            </div> */}
                        </div>
                        <div>
                        {/* <ButtonComponent buttonName="See More" buttonWidthInRem="36" onButtonComponentClickHandler={undefined}></ButtonComponent> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// say everything went fine 
export default BannerVideoComponent