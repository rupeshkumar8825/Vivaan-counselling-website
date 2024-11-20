// Component for placement section

import { useEffect, useState } from "react";
import BlogSectionComponent from "../../../../components/blog/BlogSectionComponent";
import SelectComponent from "../../../../components/common/SelectComponent";
import { IPlacementSectionCollegePageComponent } from "../../../../interfaces/interfaces";

// in this we will be showing the placement of the colleges for multiple years 
const PlacementSectionCollegePageComponent = (props : IPlacementSectionCollegePageComponent) => {
    // states for the component comes here
    const [selectedPlacementYear, setSelectedPlacementYear] = useState<string>("");
    const [listConsistingOnlyPlacementYears, setListConsistingOnlyPlacementYears] = useState<Array<string>>([]);    

    // handlers for the component comes here
    const handlePlacementYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlacementYear(e.target.value);
    }

    // useEffect for the component comes here
    useEffect(() => {
        // when the component is rendered for the first time do the following actions
        // 1. clear the selected placement year
        // 2. make a separate array for the placement years from the props
        setSelectedPlacementYear("")
        const listConsistingOnlyPlacementYears = props.collegePlacementDataConstant.map((currPlacementYear : any) => currPlacementYear.placementYear)
        setListConsistingOnlyPlacementYears(listConsistingOnlyPlacementYears? listConsistingOnlyPlacementYears : [])
    }, [])

    
    return (
        <div>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <SelectComponent
                selectId="placement"
                selectLabelName="Select Placement Year:"
                selectedValue={selectedPlacementYear}
                selectOnChangeHandler={handlePlacementYearChange}
                selectValuesList={listConsistingOnlyPlacementYears}
                selectHtmlFor="placement"
            ></SelectComponent>
        </div>
    );
};

export default PlacementSectionCollegePageComponent;