import { useEffect, useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { ICoursesSectionCollegePageComponent } from "../../../../interfaces/interfaces";
import SelectComponent from "../../../../components/common/SelectComponent";

// Component for course section for colleges 
const CoursesSectionCollegePageComponent = (props : ICoursesSectionCollegePageComponent) => {

    // states for this component comes here for this purpose 
    const [selectedDuration, setSelectedDuration] = useState<string>("");
    const [courses, setCourses] = useState<Array<string>>([]);
    const [selectedGraduationType, setSelectedGraduationType] = useState<string>("");
    const [graduationTypesList, setGraduationTypesList] = useState<any>([]);
    const [listConsistingOnlyTypes, setListConsistingOnlyTypes] = useState<Array<string>>([]);
    const [listConsistingOnlyDuration, setListConsistingOnlyDuration] = useState<Array<string>>([]);

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
        // when the component renders for the first time do the following actions
        // 1. clear the selected duration and selected graduation type
        // 2. Make a separate array for the course duration from the IITBombayCoursesDetailsConstants
        setSelectedDuration("")
        setSelectedGraduationType("")
        const listConsistingOnlyDuration = props.collegeCourseDetailConstant.map((currObject : any) => currObject.duration)
        setListConsistingOnlyDuration(listConsistingOnlyDuration? listConsistingOnlyDuration : [])  
    }, [])

    // useffect will be called when the selecteDuration is changed 
    useEffect(() => {
        // here we have to update the value of the 
        // find the gradutation type
        const currSelectedDurationData = props.collegeCourseDetailConstant.find((currDuration : any) => currDuration.duration === selectedDuration)
        const currGraduationTypeList = currSelectedDurationData?.graduationType
        // we can get the array of only types from graduationTypesList using the map function 
        const listConsistingOnlyTypes = currGraduationTypeList?.map((currObject : any) => currObject.type)
        setListConsistingOnlyTypes(listConsistingOnlyTypes? listConsistingOnlyTypes : [])
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
        <div className="mt-10">
            {/* here comes the blog component specific for the courses being offered in the colleges */}
            {/* Blog component for the courses section */}
             <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}/>
            {/*<div className="flex justify-evenly items-center">

                <SelectComponent
                    selectId="duration"
                    selectLabelName="Select Course Duration:"
                    selectedValue={selectedDuration}
                    selectOnChangeHandler={handleDurationChange}
                    selectValuesList={listConsistingOnlyDuration}
                    selectHtmlFor="duration"
                />

                <SelectComponent
                    selectId="graduationType"
                    selectLabelName="Select Course Graduation Type:"
                    selectedValue={selectedGraduationType}
                    selectOnChangeHandler={handleGraduationTypeChange}
                    selectValuesList={listConsistingOnlyTypes}
                    selectHtmlFor="graduationType"
                />
                
            </div> */}
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