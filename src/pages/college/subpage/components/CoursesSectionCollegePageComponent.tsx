import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
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
        
    }

    // handler to handle the graduation type change
    const handleGraduationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGraduationType(e.target.value);
    };

    // this useeffect will be called only when the component is rendered first time
    useEffect(() => {
        // clear the entries of the selected duration and selected gradutation type
        setSelectedDuration("")
        setSelectedGraduationType("")
    }, [])

    // useffect will be called when the selecteDuration is changed 
    useEffect(() => {
        // here we have to update the value of the 
        // find the gradutation type
        const currSelectedDurationData = IITBombayCoursesDetailsConstants.find((currDuration : any) => currDuration.duration === selectedDuration)
        const currGraduationTypeList = currSelectedDurationData?.graduationType
        setGraduationTypesList(currGraduationTypeList)
    }, [selectedDuration])

    // this useffect will be called only when the selectedGraduationType is changed
    // and we will update the courses as well
    useEffect(() => {
        // we have to find the list of courses now given the graduation type 
        const currCoursesList = graduationTypesList.find((currElement : any) => currElement.type === selectedGraduationType)?.courses
        setCourses(currCoursesList? currCoursesList : [])
    }, [selectedGraduationType])


    return (
        <div>
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>
            {/* here comes the search section with drop down option */}
            {/* Search section with dropdown option */}
            <div className="flex justify-evenly items-center">

                <div className="flex justify-center items-center flex-col w-1/3">
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
                <div className=" flex justify-center items-center flex-col w-1/3">
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
                        {graduationTypesList?.map((graduationType: any, index: number) => (
                            <option key={index} value={graduationType.type}>
                                {graduationType.type}
                            </option>
                        ))}
                        
                    </Select>
                </div>
            </div>

            {/* here comes the courses being offered in the college */}
            {/* List of courses */}
            <div className="mt-10 flex flex-col items-center justify-center">
                <h2 className="text-lg font-medium text-slate-300 ">Courses Being Offered:</h2>
                <ul className="list-disc pl-5">
                    {courses.map((course, index) => (
                        <li key={index} className="mt-2 text-slate-400 text-gray-700 border-b  border-gray-700 text-lg">
                            {course}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CoursesSectionCollegePageComponent;