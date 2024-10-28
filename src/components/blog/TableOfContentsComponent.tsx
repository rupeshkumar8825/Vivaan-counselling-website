// this is table of contents component for storing the table of contents of the blog

const TableOfContentsComponent = () => {
    return (
        <div className="p-6 bg-blue rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
                <a
                    href="#h1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    What is Jee Mains Exam
                </a>
                <a
                    href="#h2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Who conducts Jee Mains Exam?
                </a>

            </ul>
        </div>
    )
}

// say everything went fine 
export default TableOfContentsComponent