import { Select } from "flowbite-react";
import { useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { ICoursesSectionCollegePageComponent } from "../../../../interfaces/interfaces";

// Component for course section for colleges 
const CoursesSectionCollegePageComponent = (props : ICoursesSectionCollegePageComponent) => {

    // states for this component comes here for this purpose 
    const [selectedDuration, setSelectedDuration] = useState<string>("");
    const [courses, setCourses] = useState<Array<string>>([]);


    // handler functions comes here
    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDuration(e.target.value);
    };

    return (
        <div>
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>
            {/* here comes the search section with drop down option */}
            {/* Search section with dropdown option */}
            <div className="border-2 border-white">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Select Course Duration:
                </label>
                <Select
                    id="duration"
                    value={selectedDuration}
                    onChange={handleDurationChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                </Select>
            </div>
        </div>
    );
};

export default CoursesSectionCollegePageComponent;