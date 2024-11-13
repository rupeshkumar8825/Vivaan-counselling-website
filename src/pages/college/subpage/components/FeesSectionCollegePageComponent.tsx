import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import { IFeesSectionCollegePageComponent } from '../../../../interfaces/interfaces';

const FeesSectionCollegePageComponent = (props : IFeesSectionCollegePageComponent) => {
    return (
        <div>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <div className="relative overflow-x-auto  flex items-center justify-center p-10">
                <table className="w-3/4 text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-slate-400">
                                Breakdown
                            </th>
                            <th scope="col" className="px-6 py-3 text-slate-400">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-slate-400 whitespace-nowrap text-white">
                                One time Money
                            </th>
                            <td className="px-6 py-4">
                                5,200
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                One Time Fees
                            </th>
                            <td className="px-6 py-4">
                                5,000
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                Tuition Fees
                            </th>
                            <td className="px-6 py-4">
                                1,00,000
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                Other Fees
                            </th>
                            <td className="px-6 py-4">
                                4,500
                            </td>
                        </tr>
                        <tr className="bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                Annual Fees
                            </th>
                            <td className="px-6 py-4">
                                2,390
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default FeesSectionCollegePageComponent;