// this is the table for location section in college page 

const LocationSectionTableComponent = () => {
    return (
        <div className="border border-white flex flex-wrap items-center justify-between p-10">
            {/* <div className="flex flex-col"> */}
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Distance</th>
                        <th className="px-4 py-2">Mode of Transport</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">IIT Bombay</td>
                        <td className="border px-4 py-2">5 km</td>
                        <td className="border px-4 py-2">Bus</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">IIT Gandhinagar</td>
                        <td className="border px-4 py-2">10 km</td>
                        <td className="border px-4 py-2">Bus</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">IIT Delhi</td>
                        <td className="border px-4 py-2">15 km</td>
                        <td className="border px-4 py-2">Bus</td>
                    </tr>
                </tbody>
            </table>
            {/* </div> */}
        </div>
    )
}


// say everything went fine 
export default LocationSectionTableComponent