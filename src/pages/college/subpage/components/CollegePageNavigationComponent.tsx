import React from 'react';
import { IITBombayCollegeNavigationConstants } from '../../../../constants/college/IIT/CollegePageNavigationComponentConstants';
import { IIITCollegeNavigationConstants } from '../../../../interfaces/interfaces';

const CollegePageNavigationComponent: React.FC = () => {
    return (
        <div className="p-5 border-t rounded bg-blue-forComponentBg border-gray-600">
            <div className="flex flex-wrap justify-around  items-center font-medium">
                {/* using the for loop here to render all the navigation items */}
                {IITBombayCollegeNavigationConstants.map((currentNavigationItem: IIITCollegeNavigationConstants) => (
                    <a href={`#${currentNavigationItem.headingId}`} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 hover:rounded-lg group">
                        <svg className="w-5 h-5 mb-2 text-gray-400  group:hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="text-sm  text-gray-400 group-hover:text-black">{currentNavigationItem.title}</span>
                    </a>
                ))}
            </div>
        </div>


    );
};

export default CollegePageNavigationComponent;
