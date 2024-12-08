import { ICollegePageNavigationComponent, IIITCollegeNavigationConstants } from '../../../../interfaces/interfaces';
// import aboutSvg from "../../../../assets/images/collegeNavigation/about.svg"
const CollegePageNavigationComponent = (props : ICollegePageNavigationComponent) => {
    return (
        <div className="p-5 border-t rounded bg-blue-forComponentBg border-gray-600">
            <div className="flex flex-wrap justify-around  items-center font-medium">
                {/* using the for loop here to render all the navigation items */}
                {props.collegePageNavigationConstants.map((currentNavigationItem: IIITCollegeNavigationConstants, index : number) => (
                    <a href={`#${currentNavigationItem.headingId}`} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 hover:rounded-lg group">
                        {/* the below svg code was commented to shift to better icons which were downloaded from internet */}
                        {/* this was given by Vivaan itself and this was client's request to change the icons hence this action was taken for this purpose */}
                        {/* <svg className="w-5 h-5 mb-2 text-gray-400  group:hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg> */}
                        <img src={props.collegePageNavigationSvgPathConstants[index]} className='w-11 h-11 mb-2 text-gray-400 group:hover:text-red-500 rounded-full' aria-hidden="true" alt="" />
                        <span className="text-sm  text-gray-400 group-hover:text-black">{currentNavigationItem.title}</span>
                    </a>
                ))}
            </div>
        </div>


    );
};

export default CollegePageNavigationComponent;
