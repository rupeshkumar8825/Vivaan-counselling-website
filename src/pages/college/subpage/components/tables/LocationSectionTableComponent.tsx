// this is the table for location section in college page 

import { ITableContentComponent } from "../../../../../interfaces/interfaces"
import AeroPlaneLocationlogo from "../../../../../assets/images/AeroplaneLocationLogo.png"
import RailwayLocationLogo from "../../../../../assets/images/TrainLocationLogo.png"


const LocationSectionTableComponent = (props : ITableContentComponent) => {

    const imageList = [AeroPlaneLocationlogo, RailwayLocationLogo]

    return (
        <div className="relative overflow-x-auto  flex items-center justify-center p-1 sm:p-2 md:p-4 lg:p-8 xl:p-10">
        <table className="w-[100%] md:w-3/4 text-sm text-left rtl:text-right text-gray-400">
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
                        <th scope="row" className=" px-6 py-4 font-medium text-slate-400 whitespace-wrap text-white flex flex-wrap items-center ">
                            <div className="">
                                {/* convert the logic here to support the below feature: 
                                    1. If the name of the location consists of the railway station then attach image for railway 
                                    2. If the name of the location consists of the airport then attach image for airport
                                    the above logic prevents us to image attribute along with the location data as we can decide with 
                                    the above algorithm itself whether we have to attach the image for the railway or for airport */}
                                <img src={currentRow[0].includes("Railway")? imageList[1] : imageList[0]} className="w-8 h-8 md:w-10 md:h-10   rounded-lg" alt="location logo" />
                            </div>
                            <div className="ml-3 sm:ml-5 md:ml-6 lg:ml-7 text-xs">
                                {currentRow[0]}
                            </div>

                        </th>
                        <td className="px-1 py-4 sm:px-2 md:px-3 lg:px-4 xl:px-6">
                            <div className=" ">
                            {currentRow[1]} km
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