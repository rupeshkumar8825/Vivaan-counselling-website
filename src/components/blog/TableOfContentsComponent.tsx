// this is table of contents component for storing the table of contents of the blog

import { ITableOfContent } from "../../interfaces/interfaces"

const TableOfContentsComponent = (props : ITableOfContent) => {
    return (
        <div className="p-6 bg-blue border-2 border-slate-700 rounded-lg shadow-md sticky top-5 mr-5 max-h-96 overflow-y-auto w-full">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">

                {/* here we will have to use the map in order to show the table of contents dynamically  */}
                {props.headingIdList.map((_ : string, index : number) => (
                    props.headingNameList[index] == ""? null :  /**
                    * After getting the request from client side about adding the support of multiple images per blog section
                    * We have to add "" empty string in order to add the support of multiple images 
                    * Hence now heading name list can be an empty string.Due to which empty gap is coming in the table of contents
                    * If the heading string is an empty string then we will not show anything and hence will remove the gap from TOC
                    * using the if else statement on the heading name we have to show the html other wise keep the html content as null itself
                    */
                   
                   <a
                       href={`#${props.headingIdList[index]}`}
                       className="block px-4 py-2 text-sm text-slate-300 hover:bg-gray-100 hover:text-black hover:rounded-lg"
                       role="menuitem"
                   >
                       {props.headingNameList[index]}
                   </a>
)
                    
                )}
            </ul>
        </div>
    )
}

// say everything went fine 
export default TableOfContentsComponent