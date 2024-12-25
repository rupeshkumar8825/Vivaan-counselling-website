// Import React

import { IVideoCardComponent } from "../interfaces/interfaces";
import ButtonComponent from "./ButtonComponent";

// Define the VideoCard component
const VideoCard = (props : IVideoCardComponent) => {
  return (
    <div className={`border-2 border-slate-700 w-${props.videoCardWidth? props.videoCardWidth : "1/4"} ${props.videoCardHeight? props.videoCardHeight : null} flex items-center justify-center flex-col justify-evenly bg-blue-forComponentBg rounded-lg shadow-md`}>
      <div className=" bg-blue-forComponentBg rounded-lg overflow-hidden">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={props.videoUrl}
            title={props.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <p className="text-slate-300">An example of a YouTube video embedded in a Tailwind CSS card.</p>
        </div>
      </div>
        <div>
          <ButtonComponent buttonName="See More" buttonWidthInRem="36" onButtonComponentClickHandler={undefined}></ButtonComponent>
        </div>
    </div>
  );
};

export default VideoCard;
