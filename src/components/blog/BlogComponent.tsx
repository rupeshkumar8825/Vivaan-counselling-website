// Import React
import TableOfContentsComponent from './TableOfContentsComponent';
import BlogSectionComponent from './BlogSectionComponent';
import { IBlogComponent } from '../../interfaces/interfaces';


// App component for the main layout
const BlogComponent = (props : IBlogComponent) => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Section - spans 2 columns on medium screens */}
                <div className="md:col-span-2">
                    {/* here we have to use the map element to iterate over all the blogs contents  */}
                    {props.contentList.map((_ : string, index : number) => (
                        <BlogSectionComponent headingName={props.headingNameList[index]} content={props.contentList[index]} headingId={props.headingIdList[index]} image={props.imageList? (props.imageList[index]? props.imageList[index] : undefined) : undefined} 
                        isNextHeadingEmpty= {((index < (props.headingNameList.length-1) && props.headingNameList[index+1] == "") ? true : false)} 
                        isCurrentHeadingEmpty = {(props.headingIdList[index] == "") ? true : false}
                        isPreviousHeadingEmpty = {(index > 0 && props.headingIdList[index-1] == "") ? true : false}
                        />
                    ))}
                </div>
                {/* Table of Contents */}
                <div>
                    <TableOfContentsComponent headingIdList={props.headingIdList} headingNameList={props.tableOfContentsList}/>
                </div>
            </div>
        </div>
    );
};

export default BlogComponent;
