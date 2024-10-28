// this is table of contents component for storing the table of contents of the blog

import { ITableOfContent } from "../../interfaces/interfaces"

const TableOfContentsComponent = (props : ITableOfContent) => {
    return (
        <div className="p-6 bg-blue rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">

                {/* here we will have to use the map in order to show the table of contents dynamically  */}
                {props.headingIdList.map((_ : string, index : number) => (
                    <a
                        href={`#${props.headingIdList[index]}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        {props.headingNameList[index]}
                    </a>

                ))}
            </ul>
        </div>
    )
}

// say everything went fine 
export default TableOfContentsComponent