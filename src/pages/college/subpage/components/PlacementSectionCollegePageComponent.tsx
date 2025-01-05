// Component for placement section

import { useEffect, useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import SelectComponent from "../../../../components/common/SelectComponent";
import { IPlacementSectionCollegePageComponent } from "../../../../interfaces/interfaces";
// import NITWarangalImage1 from "."
// in this we will be showing the placement of the colleges for multiple years 
const PlacementSectionCollegePageComponent = (props: IPlacementSectionCollegePageComponent) => {
    // states for the component comes here
    const [selectedPlacementYear, setSelectedPlacementYear] = useState<string>("");
    const [listConsistingOnlyPlacementYears, setListConsistingOnlyPlacementYears] = useState<Array<string>>([]);

    // handlers for the component comes here
    const handlePlacementYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlacementYear(e.target.value);

        // depending on the given value of year we have to show the data on the UI for this purpsoe

    }

    // useEffect for the component comes here
    useEffect(() => {
        // when the component is rendered for the first time do the following actions
        // 1. clear the selected placement year
        // 2. make a separate array for the placement years from the props
        setSelectedPlacementYear("")
        const listConsistingOnlyPlacementYears = props.collegePlacementDataConstant.map((currPlacementYear: any) => currPlacementYear.placementYear)
        setListConsistingOnlyPlacementYears(listConsistingOnlyPlacementYears ? listConsistingOnlyPlacementYears : [])
        console.log("this list images are as follows\n", props.imageArray)
    }, [])


    return (
        <div className="mt-10">
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>

            {/* here comes the list of images to be shown in this case */}
            <div className="flex flex-wrap items-center justify-center  ">
                {props.imageArray.map((currPlacementImage: string, index: number) => (
                    <img key={index} src={currPlacementImage}  className="w-96 h-100 mt-5 mb-5 border-2 border-slate-700 rounded-lg"></img>
                ))}
            </div>
            {/* <div className=" flex flex-col justify-center items-center">
                <SelectComponent
                    selectId="placement"
                    selectLabelName="Select Placement Year:"
                    selectedValue={selectedPlacementYear}
                    selectOnChangeHandler={handlePlacementYearChange}
                    selectValuesList={listConsistingOnlyPlacementYears}
                    selectHtmlFor="placement"
                ></SelectComponent>


                <div id="accordion-collapse" className=" w-3/4" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>IIT Bombay Placement Statistics</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Branch vs Placement Percentage</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Highest Package Offered</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default PlacementSectionCollegePageComponent;