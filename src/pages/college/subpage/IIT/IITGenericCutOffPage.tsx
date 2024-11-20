// page for showing the cutoff page for the colleges
// do note that this is a generic page 
// this cutoff page will be used by every college 

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const IITGenericCutOffPage = () => {
    
    // here we have to find the route for the cutoff page
    // we can use the route to find the college name
    // and then we can use the college name to find the cutoff details
    const location = useLocation();
    const url = location.pathname;


    // states for the component comes here 
    const [collegeName, setCollegeName] = useState<string>("");

    // using the useeffect hook to assign the url there 
    useEffect(() => {
        const currCollegeName = url.split("/")[3]
        setCollegeName(currCollegeName)
    })

    return (
        <div>
            this is cutoff page for college {collegeName}
        </div>
    )
}

// say everything went fine 
export default IITGenericCutOffPage