// this will be the fee section table component for all the colleges for this purpose

import { ITableContentComponent } from "../../../../../interfaces/interfaces";

const FeeSectionTableComponent = (props: ITableContentComponent) => {
    return (
        <div className="relative overflow-x-auto  flex items-center justify-center p-1 sm:p-2 md:p-4 lg:p-8 xl:p-10 mt-5 ">
            <table className="w-full md:w-3/4 text-sm text-left rtl:text-right text-gray-400 ">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr className="">
                        {/* using the for loop to show the headings of the table */}
                        {props.tableContentHeading.map((currentHeading: string, index: number) => (
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
                            <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white">
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
    );
}


// say everything went fine 
export default FeeSectionTableComponent