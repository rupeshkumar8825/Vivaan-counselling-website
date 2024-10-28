// Import React

import { IVideoCardComponent } from "../interfaces/interfaces";

// Define the VideoCard component
const VideoCard = (props : IVideoCardComponent) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
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
        <p className="text-gray-600">An example of a YouTube video embedded in a Tailwind CSS card.</p>
      </div>
    </div>
  );
};

// Usage example in App component
// const App = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <VideoCard
//         videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
//         title="Embedded YouTube Video"
//       />
//     </div>
//   );
// };

export default VideoCard;
