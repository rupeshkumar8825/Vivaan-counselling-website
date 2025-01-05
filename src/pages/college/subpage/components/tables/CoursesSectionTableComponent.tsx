// this will be table in which we will be showing the courses for the college 
// this will be a common component for all the required colleges 

import { ICourseTableContentComponent,  } from "../../../../../interfaces/interfaces";

const CoursesSectionTableComponent = (props : ICourseTableContentComponent) => {
    return (
        <div className="flex flex-col   items-center justify-center p-1 sm:p-2 md:p-4 lg:p-8 xl:p-10 mt-5 ">
            <table className="w-full md:w-1/2 text-sm text-left rtl:text-right text-gray-400 ">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr className="text-center">
                        {/* using the for loop to show the headings of the table */}
                        {props.tableContentHeading.map((currentHeading : string, index : number) => (
                            <th key={index} scope="col" className="px-6 py-3 text-slate-400">
                                {currentHeading}
                            </th>
                        ))}
                    </tr>   
                </thead>
                <tbody>
                    {/* using the for loop to show each row data in the table */}
                    {props.tableContent.map((currentRow : string, index : number) => (
                        <tr key={index} className="border-b bg-gray-800 border-gray-700 text-center">
                            <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white">
                                {currentRow}
                            </th>
                            {/* <td className="px-6 py-4">
                                {currentRow[1]}
                            </td> */}
                        </tr>
                    ))}

                </tbody>
            </table> 
        </div>
    );
}

// say everything went fine
export default CoursesSectionTableComponent