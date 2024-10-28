// Import React
import TableOfContentsComponent from './TableOfContentsComponent';
import BlogSectionComponent from './BlogSectionComponent';
import { JeeMainContentList, JeeMainHeadingIdList, JeeMainsHeadingList } from '../../constants/JeeMainsExamPageConstants';


// App component for the main layout
const BlogComponent = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Section - spans 2 columns on medium screens */}
                <div className="md:col-span-2">
                    {/* here we have to use the map element to iterate over all the blogs contents  */}
                    {JeeMainContentList.map((_ : string, index : number) => (
                        <BlogSectionComponent headingName={JeeMainsHeadingList[index]} content={JeeMainContentList[index]} headingId={JeeMainHeadingIdList[index]} />
                    ))}
                </div>
                {/* Table of Contents */}
                <div>
                    <TableOfContentsComponent headingIdList={JeeMainHeadingIdList} headingNameList={JeeMainsHeadingList}/>
                </div>
            </div>
        </div>
    );
};

export default BlogComponent;
