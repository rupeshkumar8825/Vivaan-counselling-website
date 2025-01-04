// this is the table for ranking section of the college page

import TableContentComponent from "../../../../../components/TableContentComponent"
import { ITableContentComponent } from "../../../../../interfaces/interfaces"
import NIRFRankingLogo from "../../../../../assets/images/NirfAllEngineeringLogo.png"
import OverAllEngineeringLocationLogo from "../../../../../assets/images/OverAllEngineeringLogo.png"

const RankingSectionTableComponent = (props : ITableContentComponent) => {

    const imageList = [NIRFRankingLogo, OverAllEngineeringLocationLogo]
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
                        <td className="px-6 py-4 flex  justify-around flex-wrap  items-center">
                            <div className=" ">
                            {currentRow[1]}
                            </div>

                            <div className="">
                                <img src={imageList[index]} className="w-10 h-10  rounded-lg" alt="location logo" />
                            </div>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
    )
}


// say everything went fine 
export default RankingSectionTableComponent