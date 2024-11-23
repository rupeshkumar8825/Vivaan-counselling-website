// page for showing the cutoff page for the colleges
// do note that this is a generic page 
// this cutoff page will be used by every college 

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import SelectComponent from "../../../../components/common/SelectComponent";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import { IIITGenericCutOffPage } from "../../../../interfaces/interfaces";

const IITGenericCutOffPage = (props : IIITGenericCutOffPage) => {
    
    // here we have to find the route for the cutoff page
    // we can use the route to find the college name
    // and then we can use the college name to find the cutoff details
    const location = useLocation(); 
    const url = location.pathname;


    // states for the component comes here 
    const [collegeName, setCollegeName] = useState<string>("");
    const [selectedYear, setSelectedYear] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedGender, setSelectedGender] = useState<string>("");


    // handlers for the component comes here
    const handleYearChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value)
    }

    const handleCategoryChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value)
    }

    const handleGenderChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGender(event.target.value)
    }

    // using the useeffect hook to assign the url there 
    useEffect(() => {
        const currCollegeName = url.split("/")[3]
        setCollegeName(currCollegeName)
    })

    return (
        <div>
            <BlogSectionComponent headingId={props.blogSectionHeadingId} headingName={props.blogSectionHeadingName} content={props.blogSectionContent}></BlogSectionComponent>
            <div className=" flex flex-col justify-center items-center">

                {/* here we have to show the following things */}
                {/* 1. select dropodown option to select the year
                2. select dropdown option to select the category
                3. select dropdown option to select the gender(male, neutral, both) */}

                {/* select dropdown for the year */}
                <SelectComponent
                    selectedValue = {selectedYear}
                    selectOnChangeHandler = {handleYearChange}
                    selectValuesList = {["2021", "2020", "2019", "2018", "2017", "2016", "2015"]}
                    selectId = {`${collegeName}-year`}
                    selectHtmlFor = {`${collegeName}-year-html`}
                    selectLabelName = {"Select Year"}
                />

                {/* select dropdown for the category */}
                <SelectComponent
                    selectedValue = {selectedCategory}
                    selectOnChangeHandler = {handleCategoryChange}
                    selectValuesList = {["General", "OBC", "SC", "ST"]}
                    selectId = {`${collegeName}-category`}
                    selectHtmlFor = {`${collegeName}-category-html`}
                    selectLabelName = {"Select Category"}
                />

                {/* select dropdown for gender */}
                <SelectComponent
                    selectedValue = {selectedGender}
                    selectOnChangeHandler = {handleGenderChange}
                    selectValuesList={["Male", "Female", "Neutral"]}
                    selectId = {`${collegeName}-gender`}
                    selectHtmlFor={`${collegeName}-gender-html`}
                    selectLabelName={"Select Gender"}
                />
            </div>
        </div>
    )
}

// say everything went fine 
export default IITGenericCutOffPage