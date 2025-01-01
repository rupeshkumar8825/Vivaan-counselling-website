// this is the table for location section in college page 

import { ITableContentComponent } from "../../../../../interfaces/interfaces"

const LocationSectionTableComponent = (props : ITableContentComponent) => {
    return (
        <div className="relative overflow-x-auto  flex items-center justify-center p-10">
        <table className="w-3/4 text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                <tr>
                    {/* using the for loop to show the headings of the table */}
                    {props.tableContentHeading.map((currentHeading: string, index : number) => (
                        <th key={index} scope="col" className="px-6 py-3 text-slate-400">
                            {currentHeading}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* using the for loop to show each row data in the table */}
                {props.tableContent.map((currentRow: string[], index: number) => (
                    <tr key={index} className="border-b bg-gray-800 border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-nowrap text-white">
                            {currentRow[0]}
                        </th>
                        <td className="px-6 py-4">
                            {currentRow[1]}
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    )
}


// say everything went fine 
export default LocationSectionTableComponent