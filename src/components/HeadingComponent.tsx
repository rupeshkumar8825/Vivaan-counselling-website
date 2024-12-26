import { IHeadingComponent } from "../interfaces/interfaces"

const HeadingComponent = (props: IHeadingComponent) => {
    return (
        <div className="pt-16 pl-16 border-2 border-white">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-2xl text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.headingName}</span> {props.headingSpanName}</h2>
        </div>
    )
}

export default HeadingComponent