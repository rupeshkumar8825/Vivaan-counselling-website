// this is common component to show the content in the form of table
// few of use cases where we are going to use this component are as follows: 
// 1. Data Showing the fees in the form of table in the college pages

import { IITBombayFeesDataTableConstant, IITBombayFeesDataTableHeading } from "../constants/college/IIT/FeesDataForIITCollegeConstant";


const TableContentComponent = () => {
    return (
        <div className="relative overflow-x-auto  flex items-center justify-center p-10">
                <table className="w-3/4 text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-gray-400">
                        <tr>
                            {/* using the for loop to show the headings of the table */}
                            {IITBombayFeesDataTableHeading.map((currentHeading: string) => (
                                <th scope="col" className="px-6 py-3 text-slate-400">
                                    {currentHeading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* using the for loop to show each row data in the table */}
                        {IITBombayFeesDataTableConstant.map((currentRow: string[]) => (
                            <tr className="border-b bg-gray-800 border-gray-700">
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

    );
};


// say everything went fine 
export default TableContentComponent;
