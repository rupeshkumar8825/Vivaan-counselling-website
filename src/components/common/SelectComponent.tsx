// Common component to be able to select from dropdown
// the dropdown component is used in the following places :
// 1. In Courses section in all 23 IITs
// 2. In Courses section in all 31 NITs
// 3. In Courses section in all 28 IIITs
// 4. In Courses section in other state engineering colleges

import { Select } from "flowbite-react";
import { ISelectComponent } from "../../interfaces/interfaces";

// 5. In placement section of all the colleges 
const SelectComponent = (props: ISelectComponent) => {
    return (

        <div className="flex justify-center items-center flex-col w-4/5 sm:w-1/3 md:w-1/3 ">
            <label htmlFor={props.selectHtmlFor} className="block text-xl font-medium text-slate-300">
                {props.selectLabelName}
            </label>
            <Select
                id={props.selectId}
                value={props.selectedValue}
                onChange={props.selectOnChangeHandler}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                {/* mapping the durations here using the map function */}
                {props.selectValuesList.map((currValue, index) => (
                    <option key={index} value={currValue}>
                        {currValue}
                    </option>
                ))}

            </Select>
        </div>

    );
};


// say everything went fine
export default SelectComponent;