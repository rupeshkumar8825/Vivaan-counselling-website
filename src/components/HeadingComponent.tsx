import { IHeadingComponent } from "../interfaces/interfaces"

const HeadingComponent = (props: IHeadingComponent) => {
    return (
        <div className="pt-16 pl-16">
            <h2 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.headingName}</span> {props.headingSpanName}</h2>
        </div>
    )
}

export default HeadingComponent