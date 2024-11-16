import { Select } from "flowbite-react";
import { useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { ICoursesSectionCollegePageComponent } from "../../../../interfaces/interfaces";
import { IITBombayCoursesDetailsConstants } from "../../../../constants/college/IIT/CoursesDataForIITCollegeConstant";

// Component for course section for colleges 
const CoursesSectionCollegePageComponent = (props : ICoursesSectionCollegePageComponent) => {

    // states for this component comes here for this purpose 
    const [selectedDuration, setSelectedDuration] = useState<string>("");
    const [courses, setCourses] = useState<Array<string>>([]);
    const [selectedGraduationType, setSelectedGraduationType] = useState<string>("");
    const [graduationTypesList, setGraduationTypesList] = useState<any>([]);

    // handler functions comes here for the components
    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("we are inside handleDurationChange function");
        setSelectedDuration(e.target.value);
        console.log("the current value of selected duration is ", e.target.value);
        // given the selected course duration we have to find the corresponding list of graduationTypes
        // and set the state accordingly
        const courseList = IITBombayCoursesDetailsConstants.find((course) => course.duration === e.target.value);
        if (courseList) {
            setGraduationTypesList(courseList.graduationType);
            
        }

        // now depending on the current value of the graduation year and the current graduationType we have to render the course
        // list accordingly
        const currentSelectedGraduationType : string  = selectedGraduationType;
        if (currentSelectedGraduationType !== "") {
            // based on current selected graduation type we have to render the course
            const currentCourseList : Array<string> = graduationTypesList.find((currElement : any) => currElement.type === selectedGraduationType).courses;
            // assign it to the course
            setCourses(currentCourseList)
        }

        console.log("exiting the handleDurationChange function");
        console.log("the curren value of selected graduation type is ", selectedGraduationType);
        console.log("the current value of list of course is ", courses);
    }

    // handler to handle the graduation type change
    const handleGraduationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("we are inside handleGraduationTypeChange function");
        console.log("the current value of selected graduation type is ", e.target.value);
        setSelectedGraduationType(e.target.value);
        console.log("the current value of selected duration is ", selectedDuration);
        console.log("the current value of graduationtypelist is ", graduationTypesList);
        // now depending the current value of the graduation year 
        // find the list of courses being offered
        const currentCourseList : Array<string> = graduationTypesList.find((currElement : any) => currElement.type === selectedGraduationType).courses;
        // assign it to the course
        setCourses(currentCourseList)
        console.log("exiting the handleGraduationTypeChange function");
        console.log("the current value of selected duration  is", selectedDuration)
        console.log("the current value of list of course is ", courses);

    };

    return (
        <div>
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>
            {/* here comes the search section with drop down option */}
            {/* Search section with dropdown option */}
            <div className="flex justify-evenly items-center  border-2 border-red-500">

                <div className="border-2 border-white flex justify-center items-center flex-col w-1/3">
                    <label htmlFor="duration" className="block text-xl font-medium text-slate-300">
                        Select Course Duration:
                    </label>
                    <Select
                        id="duration"
                        value={selectedDuration}
                        onChange={handleDurationChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        {/* mapping the durations here using the map function */}
                        {IITBombayCoursesDetailsConstants.map((course, index) => (
                            <option key={index} value={course.duration}>
                                {course.duration}
                            </option>
                        ))}
                        
                    </Select>
                </div>

                {/* adding here the second select dropdown option to select graduationType */}
                <div className="border-2 border-white flex justify-center items-center flex-col w-1/3">
                    <label htmlFor="duration" className="block text-xl font-medium text-slate-300">
                        Select Graduation Type:
                    </label>
                    <Select
                        id="duration"
                        value={selectedGraduationType}
                        onChange={handleGraduationTypeChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        {/* using the map function in order to show the list of graduation types based on the course duration selected */}
                        {graduationTypesList.map((graduationType: any, index: number) => (
                            <option key={index} value={graduationType.type}>
                                {graduationType.type}
                            </option>
                        ))}
                        
                    </Select>
                </div>
            </div>

            {/* here comes the courses being offered in the college */}
            {/* List of courses */}
            <div className="border-2 border-white">
                <h2 className="text-lg font-medium text-slate-300">Courses Being Offered:</h2>
                <ul className="list-disc pl-5">
                    {courses.map((course, index) => (
                        <li key={index} className="text-gray-700">
                            {course}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CoursesSectionCollegePageComponent;