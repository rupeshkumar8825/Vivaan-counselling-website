import { useEffect, useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { ICoursesSectionCollegePageComponent } from "../../../../interfaces/interfaces";
import SelectComponent from "../../../../components/common/SelectComponent";
import CoursesSectionTableComponent from "./tables/CoursesSectionTableComponent";

// Component for course section for colleges 
const CoursesSectionCollegePageComponent = (props : ICoursesSectionCollegePageComponent) => {
    // States of the component comes here
    const [courseType, setCourseType] = useState<string>("");
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
        <div className="border-2 border-slate-700 mt-4 pt-2">
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
            
             <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>

            <div className="flex justify-evenly items-center  w-full">

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
        </div>
    );
};

export default CoursesSectionCollegePageComponent;