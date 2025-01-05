import { useEffect, useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { ICoursesSectionCollegePageComponent } from "../../../../interfaces/interfaces";
import SelectComponent from "../../../../components/common/SelectComponent";
import CoursesSectionTableComponent from "./tables/CoursesSectionTableComponent";

// Component for course section for colleges 
const CoursesSectionCollegePageComponent = (props : ICoursesSectionCollegePageComponent) => {
    // States of the component comes here
    const [courseType, setCourseType] = useState<string>("");
    const [defaultCourseType, setDefaultCourseType] = useState<string>("");
    const [listOfAllCourse, setListOfAllCourse] = useState<string[]>([]);
    const [listOfAllCourseTypes, setListOfAllCourseTypes] = useState<string[]>([]);


    // handlers for this component comes here
    const handleCourseTypeChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        console.log("The course type has been changed to: ", event.target.value)

        setCourseType(event.target.value) 
    }

    const getAllCourseTypes = () => {
        console.log("finding the list of all the course types for this purpose");
        // say everything went fine 
        return props.coursesSectionTableHeading
    }

    // using the useeffect to do the following two things: 
    // 1. set the default course type to the first element of the list
    // 2. set the list of selected courses for this purpose
    // when it renders for the first time we will have to set the default one 
    useEffect(() => {
        setCourseType(getAllCourseTypes()[0]);
        setListOfAllCourseTypes(props.coursesSectionTableHeading)
    }, [])

    // whenever the course type of course type is changed then we call the below useeffect
    useEffect(() => {
        console.log("the course type has been changed to: ", courseType)
        // now here we will find the index and then we will get the list of all courses to be shown on the UI 
        const courseListIndexToBeUsed : number = props.coursesSectionTableHeading.findIndex((course) => course === courseType)
        console.log("The index of the course is: ", courseListIndexToBeUsed)

        setListOfAllCourse(props.coursesSectionTableContent[courseListIndexToBeUsed])
    }, [courseType])
    


    return (
        <div className="mt-10">
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
            
             <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>

            <div className="flex justify-evenly items-center">

                <SelectComponent
                    selectId="duration"
                    selectLabelName="Select Course Duration:"
                    selectedValue={courseType}
                    selectOnChangeHandler={handleCourseTypeChange}
                    selectValuesList={listOfAllCourseTypes}
                    selectHtmlFor="duration"
                />

                {/* <SelectComponent
                    selectId="graduationType"
                    selectLabelName="Select Course Graduation Type:"
                    selectedValue={selectedGraduationType}
                    selectOnChangeHandler={handleGraduationTypeChange}
                    selectValuesList={listConsistingOnlyTypes}
                    selectHtmlFor="graduationType"
                />
                 */}
            </div>

            {/* here the table content will be the list of courses to be shown on the UI */}
            {listOfAllCourse ? <CoursesSectionTableComponent tableContent={listOfAllCourse} tableContentHeading={[courseType]}></CoursesSectionTableComponent> : null}
            {/* here comes the courses being offered in the college */}
            {/* List of courses */}
            {/* <div className="mt-10 flex flex-col items-center justify-center">
                <h2 className="text-lg font-medium text-slate-300 ">Courses Being Offered:</h2>
                <ul className="list-disc pl-5">
                    {courses.map((course, index) => (
                        <li key={index} className="mt-2 text-slate-400 text-gray-700 border-b  border-gray-700 text-lg">
                            {course}
                        </li>
                    ))}
                </ul>
            </div> */}

            {/* here we will have to show the list of courses that are being offered currently */}
            {/* <div>
                <h1>List of courses being offered</h1>
            </div> */}
        </div>
    );
};

export default CoursesSectionCollegePageComponent;