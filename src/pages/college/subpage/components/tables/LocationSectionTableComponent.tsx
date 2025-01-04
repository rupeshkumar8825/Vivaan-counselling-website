// this is the table for location section in college page 

import { ITableContentComponent } from "../../../../../interfaces/interfaces"
import AeroPlaneLocationlogo from "../../../../../assets/images/AeroplaneLocationLogo.png"
import RailwayLocationLogo from "../../../../../assets/images/TrainLocationLogo.png"
import { useEffect } from "react"


const LocationSectionTableComponent = (props : ITableContentComponent) => {

    const imageList = [AeroPlaneLocationlogo, RailwayLocationLogo]

    return (
        <div className="relative overflow-x-auto  flex items-center justify-center p-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
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
                        <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white">
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
export default LocationSectionTableComponent