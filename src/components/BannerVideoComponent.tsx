// this will be the banner component related to the video for this purpose

import {  IBannerVideoComponent } from "../interfaces/interfaces"
import ButtonComponent from "./ButtonComponent"

const BannerVideoComponent = (props: IBannerVideoComponent) => {
    return (
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <div className="absolute block w-full  h-full rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-evenly pl-2 pr-2 sm:pl-2 sm:pr-2 md:pl-6 md:pr-6 lg:pl-10 lg:pr-10 xl:pl-16 xl:pr-16">
                <div className=" flex flex-col justify-evenly items-center text-white w-1/2">
                    <div className="  flex flex-col justify-center items-center">
                        <p className="text-md sm:text-2xl md:text-3xl lg:4xl w-full text-center text-center">
                            {props.bannerText1}
                        </p>
                        <p className="text-sm sm:text-2xl md:text-3xl lg:4xl w-full text-center text-center">
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
                    <div className={` w-[100%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] flex items-center justify-center bg-blue-forComponentBg rounded-lg shadow-md`}>
                        <div className=" relative pt-[60.25%] w-full h-[100%]">
                            <iframe
                                className="absolute inset-0 w-full h-full "
                                src={props.bannerImage}
                                title={"some title"}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// say everything went fine 
export default BannerVideoComponent