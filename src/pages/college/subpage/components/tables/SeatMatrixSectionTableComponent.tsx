// this is the seat matrix component for all the colleges in this case 

import { ITableContentComponent } from "../../../../../interfaces/interfaces"

const SeatMatrixSectionTableComponent = (props: ITableContentComponent) => {
    return (
        <>
            <div className="relative overflow-x-auto  flex items-center justify-center p-10">
                <table className="w-3/4 text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs  uppercase bg-gray-700 text-gray-400 text-center">
                        <tr>
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
                                <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white text-center border-r border-gray-600">
                                    {currentRow[0]}
                                </th>
                                <td className="px-6 py-4 text-center border-r border-gray-600">
                                    {currentRow[1]}
                                </td>
                                <td className="px-6 py-4 text-center border-r border-gray-600">
                                    {currentRow[2]}
                                </td>
                            </tr>
                        ))}

                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" rowSpan={2} className="px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white text-center border-r border-gray-600">
                                Total
                            </th>
                            <td className="px-6 py-4 text-center border-r border-gray-600">
                                {props.tableContent.reduce((acc, currentRow) => acc + Number(currentRow[1]), 0)}
                            </td>
                            <td className="px-6 py-4 text-center border-r border-gray-600">
                                {props.tableContent.reduce((acc, currentRow) => acc + Number(currentRow[2]), 0)}
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            {/* <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-nowrap text-white text-center">
                                Grand Total
                            </th> */}
                            <td colSpan={2} className="px-6 py-4 text-center border-r border-gray-600">
                                {props.tableContent.reduce((acc, currentRow) => acc + Number(currentRow[1]), 0) + props.tableContent.reduce((acc, currentRow) => acc + Number(currentRow[2]), 0)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div>This is seat matrix for all thecollege</div> */}
        </>
    )
}


// say everything went fine
export default SeatMatrixSectionTableComponent